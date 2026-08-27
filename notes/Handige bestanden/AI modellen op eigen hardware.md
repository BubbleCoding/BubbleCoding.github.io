_Laatst bijgewerkt: augustus 2026. Dit vakgebied verschuift snel — modelnamen, versies en hardware-ondersteuning veranderen binnen maanden. Check bij twijfel altijd de gelinkte documentatie in plaats van dit document._

Steeds meer AI-modellen (taalmodellen, spraakherkenning, computer vision) draai je gewoon op je eigen laptop, zonder API-key en zonder dat je data een server van OpenAI of Google raakt. Handig als je wilt experimenteren zonder kosten, offline wilt werken, of gewoon wilt begrijpen hoe dit soort modellen onder de motorkap werkt.

Dit document geeft een overzicht van de meest gebruikte tools per categorie (tekst, spraak, beeld), legt uit tegen welke problemen je waarschijnlijk aanloopt en hoe je die oplost.

## Eerst iets draaiend krijgen

Download [LM Studio](https://lmstudio.ai/) en installeer het zoals elke andere applicatie. In de Discover-tab zoek je een model; LM Studio zegt er per model bij of het op jouw machine past en welke quantisaties beschikbaar zijn. Kies iets kleins om mee te beginnen (rond de 3-4B, Q4), download het, en chat ermee in de Chat-tab.

De reden om hier te beginnen en niet bij een terminal: je ziet wat er gebeurt. GPU-offload en contextlengte zitten als schuifjes in beeld, en als een model niet in je geheugen past merk je dat aan de interface in plaats van aan een cryptische foutmelding. Dat zijn precies de begrippen waar de rest van dit document over gaat.

Wil je er vanuit code tegenaan praten, zet dan in de Developer-tab de lokale server aan. Die spreekt de OpenAI-API op poort 1234, dus elke OpenAI-client werkt zodra je de base URL omzet naar `http://localhost:1234/v1` ([documentatie](https://lmstudio.ai/docs/developer/openai-compat)):

```bash
curl http://localhost:1234/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "<model-id zoals LM Studio hem toont>",
    "messages": [{"role": "user", "content": "Leg quantisatie uit in twee zinnen."}]
  }'
```

Zodra dit werkt en je het wilt automatiseren, is [Ollama](https://ollama.com/) de logische volgende stap: één commando, geen GUI nodig, en makkelijk te reproduceren in een README of Dockerfile.

```bash
ollama run llama3.2:3b
```

Dat downloadt het model en zet je in een chat (`/bye` sluit af), met een OpenAI-compatibele server op poort 11434. Kijk in de [modelbibliotheek](https://ollama.com/library) welke modellen er op dit moment zijn — namen en versies wisselen snel, dus neem het commando hierboven als vorm en niet als voorschrift.

Loopt de installatie of de eerste run stuk, spring dan naar "Veelvoorkomende problemen" onderaan.

## Past het model wel op jouw hardware?

Modellen worden aangeduid met hun aantal parameters, bijvoorbeeld "7B" (7 miljard) of "70B". Hoe meer parameters, hoe slimmer het model meestal is, maar ook hoe meer geheugen het nodig heeft.

Dat "meestal" geldt vooral _binnen_ één modelfamilie en één generatie. Een recent 4B-model verslaat regelmatig een 13B-model van twee jaar geleden. Kijk dus naar de releasedatum en niet alleen naar het getal voor de B.

- **Quantisatie** is de truc die lokaal draaien pas haalbaar maakt: in plaats van elke parameter in 16 of 32 bit op te slaan, comprimeer je ze naar 4 of 8 bit. Je verliest een beetje kwaliteit, maar het model wordt 2-4x kleiner en sneller. Je ziet dit terug in bestandsnamen als `Q4_K_M` of `Q8_0` — hoe lager het getal, hoe kleiner en ruwer. (De letters erachter zijn varianten binnen hetzelfde bit-niveau; `Q4_K_M` is de gebruikelijke middenweg.) Het bestandsformaat waar je dit tegenkomt heet [GGUF](https://huggingface.co/docs/hub/gguf).
- **Vuistregel voor geheugengebruik** (bij de gangbare Q4-quantisatie): ongeveer 0,6-0,7 GB per miljard parameters. Een 7B-model kost dus ~4-5 GB, een 13B-model ~8 GB, een 70B-model ~40 GB.
- **Reken daar nog 1-2 GB bovenop.** Die vuistregel dekt alleen de gewichten. De context (de KV-cache: alles wat het model "onthoudt" van je gesprek) komt er los bij, en groeit mee met de contextlengte die je instelt. Bij lange contexten kan dat op zichzelf al meerdere GB's zijn. Dit is meestal de reden dat een model dat op papier past, alsnog omvalt.
- **VRAM vs RAM, en waarom het geen alles-of-niets is.** Tools als llama.cpp, Ollama en LM Studio verdelen een model laag voor laag: wat in het geheugen van je GPU (VRAM) past gaat naar de GPU, de rest draait op de CPU met je systeem-RAM. Hoe meer lagen op de GPU, hoe sneller. Zit alles op de GPU, dan is het vlot; draait alles op de CPU, dan kan het 5-10x trager zijn; daartussenin loopt het geleidelijk op. In LM Studio stel je dat aantal lagen zelf in met een schuifje, bij Ollama gaat het automatisch en laat `ollama ps` zien hoeveel procent op de GPU zit.
- **Veel laptops hebben 8-16 GB gedeeld geheugen.** Twijfel je? Begin klein (7B of kleiner, Q4). Dat werkt op vrijwel elke laptop en is genoeg om mee te leren en te experimenteren.

## GPU-merk maakt uit

Hier loop je snel tegenaan: niet elke GPU wordt even goed ondersteund.

|Platform|Wat je gebruikt|Hoe goed werkt het|
|---|---|---|
|**NVIDIA**|CUDA|De gouden standaard. Vrijwel elke tool en library ondersteunt CUDA als eerste. Werkt op Windows, Linux, en via WSL2. Als je twijfelt welke GPU je moet kopen voor AI-werk: dit is 'm.|
|**AMD**|ROCm (of Vulkan als fallback)|Wisselend. ROCm ondersteunt maar een beperkte lijst kaarten officieel, en vooral op Linux — op Windows is de support recenter en minder stabiel. Check of jouw kaart erop staat in de [compatibiliteitsmatrix voor Radeon en Ryzen](https://rocm.docs.amd.com/projects/radeon-ryzen/en/latest/docs/compatibility/compatibility.html). Veel tools (zoals llama.cpp) hebben een Vulkan-backend als alternatief, die overal werkt maar minder snel is dan CUDA/ROCm.|
|**Apple Silicon (M1/M2/M3/M4)**|Metal / MLX|Geen aparte VRAM: het werkgeheugen wordt gedeeld tussen CPU en GPU ("unified memory"), waardoor grotere modellen relatief makkelijk passen. Let op dat macOS niet je hele RAM aan de GPU uitleent — reken op zo'n 65-75% als bovengrens. Op een 8 GB-machine houd je dus ergens rond de 5 GB over, en is een 7B-model al krap. Gebruik tools met een Metal-backend (llama.cpp, Ollama, LM Studio doen dit automatisch) of Apple's eigen [MLX](https://github.com/ml-explore/mlx)-framework voor de beste snelheid.|
|**Geen GPU / CPU-only**|—|Werkt altijd, is alleen traag. Prima voor kleine modellen (1-3B) of om te testen of iets functioneel werkt voordat je naar snellere hardware gaat.|

Kortom: heb je een NVIDIA-kaart, dan werkt bijna alles zonder gedoe. Heb je AMD, check eerst of jouw specifieke kaart op de ROCm-lijst staat. Heb je een Mac met Apple Silicon, kies tools die Metal/MLX ondersteunen.

## Waar je je modellen vandaan haalt

Bijna alles komt uiteindelijk van [Hugging Face](https://huggingface.co/models). Dat is geen app store met keuring vooraf: een model is gewoon een bestand dat iemand heeft geüpload.

- **Kies `safetensors` boven `.bin`, `.pt` of `.ckpt` als je de keuze hebt.** Die laatste formaten zijn Python pickles, en het inladen daarvan kan willekeurige code uitvoeren. [`safetensors`](https://huggingface.co/docs/safetensors/index) is puur data en kan dat niet. GGUF-bestanden (voor llama.cpp/Ollama) zijn in dat opzicht ook data-only.
- **Kijk wie het gepubliceerd heeft.** Een quantisatie van een bekende community-account is iets anders dan een naamloze upload van vorige week met drie downloads.
- **Lokaal draaien beschermt je data, niet je machine.** Je stuurt niks naar een server, maar je draait nog steeds andermans bestand op je eigen systeem.
- **Gated modellen** (bijvoorbeeld de Llama-modellen van Meta) vereisen dat je een account aanmaakt, de licentie accepteert en een access-token gebruikt. Zonder token krijg je een 403 die weinig verklapt over de oorzaak; zie de [documentatie over gated models](https://huggingface.co/docs/hub/models-gated).
- **Let op je schijfruimte.** Modellen zijn zo enkele GB's per stuk en stapelen op als je varianten uitprobeert. Ollama bewaart ze in `~/.ollama/models` (`ollama list` en `ollama rm` om op te ruimen), de Hugging Face-tooling in `~/.cache/huggingface/hub`.

## Tools per categorie

### Tekst (LLM's)

- **[LM Studio](https://lmstudio.ai/)** — de makkelijkste start. Gewone installer, ingebouwde modelbrowser die aangeeft wat op jouw machine past, en GPU-offload en contextlengte als schuifjes in beeld. Kan ook als server draaien (poort 1234, OpenAI-compatibel). Nadeel: het is een closed-source applicatie, dus check de gebruiksvoorwaarden als je het buiten je studie inzet.
- **[Ollama](https://ollama.com/)** — de keuze zodra je gaat scripten. Eén commando, modelbibliotheek ingebouwd, draait als server met een OpenAI-compatibele API op poort 11434, en regelt CPU/GPU-detectie automatisch. Makkelijker te reproduceren op andermans machine dan een reeks klikinstructies, en werkt headless (server, Docker). Windows/Mac/Linux, MIT-licentie.
- **[llama.cpp](https://github.com/ggml-org/llama.cpp)** — waar Ollama en LM Studio onder de motorkap op leunen. Interessant als je wilt begrijpen wat quantisatie precies doet, of als je op ongebruikelijke hardware zit (bijvoorbeeld een oudere AMD-kaart via Vulkan) en de kant-en-klare tools het laten afweten.
- **[MLX](https://github.com/ml-explore/mlx)** (met het `mlx-lm`-pakket) — heb je een Mac met Apple Silicon, dan haal je hiermee merkbaar meer snelheid dan via de generieke route. Modellen staan als `mlx-community`-varianten op Hugging Face.

### Spraak

- **[faster-whisper](https://github.com/SYSTRAN/faster-whisper)** — praktisch altijd de betere keuze boven de originele `openai-whisper`-package: sneller en zuiniger met geheugen, bij dezelfde modellen. Het heeft Silero VAD ingebouwd, dus met `vad_filter=True` sla je stiltes over zonder extra dependency.
- **[whisper.cpp](https://github.com/ggml-org/whisper.cpp)** — dezelfde modellen, maar zonder Python. Kies dit als je vastloopt op dependencies of als je richting embedded gaat.
- **[Silero VAD](https://github.com/snakers4/silero-vad)** — detecteert of er überhaupt gesproken wordt. Klein, snel, draait prima op CPU, en lost het "wanneer stop ik met opnemen"-probleem op. Los te gebruiken als je zelf een audiostream beheert.
- **[openWakeWord](https://github.com/dscripka/openWakeWord)** — voor een echt wake word ("Hey Jarvis"). Volledig lokaal en zonder registratie. [Porcupine](https://picovoice.ai/platform/porcupine/) van Picovoice werkt ook goed en heeft meer kant-en-klare wake words, maar vraagt een account en een AccessKey — dat botst met het uitgangspunt van dit document, dus begin bij openWakeWord.
- **[Piper](https://github.com/OHF-Voice/piper1-gpl)** — spraaksynthese: licht genoeg voor een Raspberry Pi, en er zijn [Nederlandse stemmen](https://github.com/OHF-Voice/piper1-gpl/blob/main/docs/VOICES.md). Let op dat het project verhuisd is; de oude `rhasspy/piper`-repo is gearchiveerd en de nieuwe is GPL-3.0. [Kokoro](https://github.com/hexgrad/kokoro) klinkt natuurlijker maar is zwaarder en dekt minder talen — check de stemmenlijst voordat je erop bouwt als je Nederlands nodig hebt. `pyttsx3` of de systeemstem van je OS zijn prima noodoplossingen als de stem niet het interessante deel van je project is.

### Beeld

Weet je niet waar je moet beginnen: **MediaPipe** als je iets met mensen doet (handen, gezicht, houding), **YOLO** als je objecten wilt detecteren of tellen, **CLIP** als je op betekenis wilt zoeken in beeld.

- **[Ultralytics YOLO](https://docs.ultralytics.com/)** — objectdetectie in vijf regels Python; het kleinste model (`yolo11n`, of het nieuwere `yolo26n`) draait op CPU. Let op de licentie: Ultralytics is AGPL-3.0, wat betekent dat je je hele project open source moet maken als je het gebruikt, of een [commerciële licentie](https://www.ultralytics.com/license) nodig hebt. Voor een schoolproject op een publieke repo is dat prima; voor een opdracht bij een bedrijf niet vanzelfsprekend.
- **[MediaPipe](https://ai.google.dev/edge/mediapipe/solutions/guide)** — hand-, gezicht- en pose-landmarks, realtime op CPU. Google's tooling, erg toegankelijk, Apache-2.0. Draait volledig lokaal ondanks de Google-branding.
- **[OpenCV](https://docs.opencv.org/)** — voor alles eromheen: webcam uitlezen, frames bewerken, resultaten tekenen.
- **CLIP** via [`open_clip`](https://github.com/mlfoundations/open_clip) of [`sentence-transformers`](https://sbert.net/) — beeld en tekst in dezelfde vectorruimte, de basis voor "zoek in mijn foto's op omschrijving".
- **OCR**: [Tesseract](https://github.com/tesseract-ocr/tesseract) voor nette gescande documenten, [EasyOCR](https://github.com/JaidedAI/EasyOCR) voor tekst in foto's, [TrOCR](https://huggingface.co/docs/transformers/model_doc/trocr) als de andere twee het laten afweten op handschrift.

## Veelvoorkomende problemen

Dit zijn de dingen waar je met hoge waarschijnlijkheid tegenaan loopt — en de snelste oplossing.

- **"Out of memory" / het model crasht bij het laden.** Het model, of de gekozen contextlengte, past niet in je VRAM/RAM. Oplossing: kies een kleinere quantisatie (bijvoorbeeld Q4 in plaats van Q8), een kleiner model, of een kortere context. Draai je iets anders naast je model (een browser met veertig tabbladen telt mee), sluit dat eerst.
- **Het model draait, maar bizar traag.** Grote kans dat het grotendeels op de CPU draait in plaats van de GPU. Check dit expliciet: in LM Studio zie je het aantal ge-offloade lagen in de UI, bij Ollama laat `ollama ps` zien hoeveel procent op de GPU zit. Vaak is de oorzaak een ontbrekende of verouderde GPU-driver, of een model dat net te groot is waardoor er maar een paar lagen op de GPU passen.
- **Dependency-hel in Python.** Deep learning libraries (PyTorch, CUDA-toolkit versies, `bitsandbytes`, `flash-attention`) zijn berucht gevoelig voor exacte versiecombinaties. Gebruik altijd een virtual environment (`venv`, `conda` of `uv`) per project, nooit één globale Python-installatie voor alles. Als iets echt niet wil installeren op Windows: probeer [WSL2](https://learn.microsoft.com/en-us/windows/wsl/install), veel van deze libraries zijn primair voor Linux gebouwd.
- **CUDA-versie mismatch.** PyTorch- en TensorFlow-builds zijn gekoppeld aan een specifieke CUDA-versie. Een verouderde GPU-driver, of een PyTorch-versie die een nieuwere CUDA verwacht dan je driver levert, geeft cryptische errors. Check je driverversie (`nvidia-smi`) en gebruik de [officiële installatieselector van PyTorch](https://pytorch.org/get-started/locally/), die het juiste commando voor jouw situatie genereert.
- **AMD op Windows.** ROCm-support op Windows is nog relatief nieuw en dekt niet alle kaarten. Verwacht dat je vaker moet uitwijken naar de Vulkan-backend van llama.cpp, of gewoon CPU, dan bij NVIDIA.
- **403 bij het downloaden van een model.** Waarschijnlijk een gated model: accepteer de licentie op de modelpagina en gebruik een access-token. Zie de sectie hierboven over waar je je modellen vandaan haalt.
- **Je schijf loopt vol.** Ruim modellen op die je niet meer gebruikt, en kijk waar je tool ze standaard neerzet (vaak een verborgen map in je home-directory).

## Vuistregels samengevat

1. Begin met **LM Studio** — installeren en een model draaien kost een paar klikken, en je ziet direct wat er met je geheugen gebeurt. Stap over op **Ollama** zodra je het wilt scripten of reproduceren; allebei regelen ze GPU/CPU-detectie en quantisatie automatisch, zonder dat je met CUDA-versies hoeft te knoeien.
2. Check eerst hoeveel VRAM/geheugen je hebt, dan pas welk model je kiest — en reken op wat extra ruimte voor de context.
3. NVIDIA werkt bijna altijd zonder gedoe; AMD en oudere hardware vragen meer uitzoekwerk.
4. Twijfel je tussen twee modelgroottes of quantisatieniveaus? Kies de kleinere — die werkt bijna gegarandeerd, en je kunt altijd opschalen.
5. Een model is andermans bestand op jouw machine: let op formaat, publisher en licentie voordat je het in een project zet.


co-authored with Claude Opus 5.0