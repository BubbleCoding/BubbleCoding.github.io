LLM draaien​

- Ollama — standaardkeuze. Eén commando, modelbibliotheek ingebouwd, draait als server met een OpenAI-compatibele API op poort 11434. Windows/Mac/Linux.​
    
- LM Studio — GUI-variant, fijn voor wie op de CLI vastloopt. Laat GPU-offload en contextlengte zien met schuifjes, wat didactisch prettig is: ze zien meteen wat er gebeurt als het model niet in het geheugen past. Kan ook als server draaien.​
    
- llama.cpp — waar Ollama en LM Studio onder de motorkap op leunen. Alleen aanraden aan studenten die willen begrijpen wat quantisatie is.​
    
- MLX / mlx-lm — voor Apple Silicon merkbaar sneller dan de generieke route. Leuk voor de Mac-bezitters.​  
    ​
    

Spraak​

- faster-whisper — praktisch altijd de betere keuze boven de originele openai-whisper package: sneller, minder geheugen.​
    
- whisper.cpp — als Python-dependencies problemen geven.​
    
- Silero VAD — detecteert of er überhaupt gesproken wordt. Klein, snel, en lost het "wanneer stop ik met opnemen"-probleem op.​
    
- openWakeWord of Porcupine — voor een echt wake word ("Hey Jarvis").​
    
- Piper — TTS, licht, veel stemmen, ook Nederlands. Kokoro klinkt beter maar is zwaarder. pyttsx3 of de systeemstem als noodoplossing.​
    

​  
Beeld​

- Ultralytics YOLO — objectdetectie in vijf regels Python, yolo11n draait op CPU.​
    
- MediaPipe — hand-, gezicht- en pose-landmarks, realtime op CPU. Google's tooling, erg toegankelijk.​
    
- OpenCV — voor alles eromheen (webcam uitlezen, frames bewerken).​
    
- CLIP via open_clip of sentence-transformers — beeld en tekst in dezelfde vectorruimte, basis voor "zoek in mijn foto's".​
    
- Tesseract, EasyOCR of TrOCR voor tekst uit beeld.​