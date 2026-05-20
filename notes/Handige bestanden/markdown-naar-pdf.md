# Markdown bestanden omzetten naar PDF

Je kent het wel: je schrijft allemaal mooie opdrachten in Markdown en upload ze naar Portflow. Dan krijg je te horen van je docent dat je alles naar PDF moet omzetten. Dit vragen we met een reden natuurlijk.

- **Afbeeldingen.** Als je afbeeldingen in je `.md` hebt staan, uploaden die niet mee. Afbeeldingen staan los op je computer en in Markdown zijn het alleen links naar bestanden.
- **Inzien.** Wij kunnen `.md` bestanden niet direct in Portflow inzien, met PDF kan dat wel.

In een PDF worden de afbeeldingen *ingebed*, dus dan staat alles in één bestand.

## Belangrijk vooraf: hoe verwijs je naar afbeeldingen?

Voordat je gaat exporteren: zorg dat de paden naar je afbeeldingen kloppen. Dit is veruit de meest voorkomende oorzaak van "mijn PDF is leeg waar de plaatjes hoorden te staan".

Twee opties die werken:

```markdown
![beschrijving](./images/diagram.png)        <!-- relatief pad -->
![beschrijving](/Users/jij/Documenten/diagram.png)  <!-- absoluut pad -->
```

Relatieve paden (vanaf de locatie van je `.md` bestand) verdienen de voorkeur — dan blijft het werken als je de map verplaatst. Houd je afbeeldingen het liefst in een submap `images/` naast je `.md`.

**Veelvoorkomende valkuilen:**

- Spaties in bestandsnamen breken sommige converters. Vervang ze door `-` of `_`.
- Op Windows: gebruik forward slashes `/`, geen backslashes `\`.
- Externe afbeeldingen (URL's) werken alleen als je internet hebt tijdens het exporteren.

---

## Optie 1: VS Code plugin (aanrader voor de meeste studenten)

VS Code en waarschijnlijk ook wel andere IDE's hebben een plugin die Markdown bestanden omzet naar PDF. Voor VS Code is het specifiek de plugin **Markdown PDF** van yzane.

**Installatie:**

1. Open VS Code
2. Ga naar de Extensions tab (`Cmd+Shift+X` op macOS, `Ctrl+Shift+X` op Windows/Linux)
3. Zoek op `Markdown PDF`
4. Installeer de extensie van **yzane**

**Gebruik:**

1. Open je `.md` bestand
2. Rechtermuisklik in het bestand → **Markdown PDF: Export (pdf)**
3. Of via het Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`) → typ `Markdown PDF`

De PDF verschijnt in dezelfde map als je `.md` bestand. Afbeeldingen met lokale paden worden netjes meegenomen.

> **Tip:** je kunt ook exporteren naar HTML, PNG of JPEG via dezelfde extensie.

## Optie 2: Android Studio / JetBrains IDE's

Werk je in Android Studio of een andere JetBrains IDE? Dan zijn er twee routes:

**Plugin route:**

1. `Settings` → `Plugins` → `Marketplace`
2. Zoek op **Markdown Navigator Enhanced**
3. Installeren en IDE herstarten
4. Rechtermuisklik op je `.md` bestand → exportopties verschijnen (HTML/PDF)

De standaard Markdown plugin van JetBrains heeft beperkte exportmogelijkheden — gebruik Markdown Navigator Enhanced voor betere resultaten.

**Browser route (werkt altijd):**

1. Open je `.md` in de IDE preview
2. Exporteer naar HTML (of kopieer de HTML uit de preview)
3. Open de HTML in Chrome
4. `Cmd+P` / `Ctrl+P` → **Save as PDF**

Deze route werkt prima zolang de HTML de afbeeldingen kan vinden op de aangegeven paden.

## Optie 3: Obsidian

Gebruik je Obsidian voor je aantekeningen? Dan is dit de makkelijkste route:

1. Open je notitie
2. Command Palette (`Cmd+P` / `Ctrl+P`) → **Export to PDF**
3. Kies je instellingen (paginaformaat, marges) en exporteer

Obsidian's eigen `![[afbeelding.png]]` syntax werkt, en gewone Markdown `![](pad)` ook.

## Optie 4: Pandoc (voor de liefhebbers)

Pandoc is een command-line tool die zo'n beetje elk documentformaat naar elk ander formaat omzet. Wat meer gedoe om te installeren, maar veruit het krachtigst — en handig als je later veel documenten tegelijk wilt converteren (scriptbaar).

**Installatie:**

- macOS: `brew install pandoc` en `brew install weasyprint`
- Windows: download via [pandoc.org](https://pandoc.org/installing.html)
- Linux: `sudo apt install pandoc weasyprint`

**Gebruik:**

```bash
pandoc opdracht.md -o opdracht.pdf --pdf-engine=weasyprint
```

Met eigen styling via CSS:

```bash
pandoc opdracht.md -o opdracht.pdf --pdf-engine=weasyprint --css=style.css
```

Waarom `weasyprint` als engine? De standaard `xelatex` werkt ook, maar vereist een complete LaTeX installatie (paar GB). `weasyprint` is veel lichter en gaat soepeler om met lokale afbeeldingspaden.

---

## Welke optie kies ik?

| Situatie | Aanrader |
|---|---|
| Ik werk in VS Code | Optie 1 (Markdown PDF) |
| Ik werk in Android Studio / IntelliJ | Optie 2 |
| Ik gebruik Obsidian | Optie 3 |
| Ik wil meerdere bestanden tegelijk converteren | Optie 4 (Pandoc) |
| Ik wil de mooiste/meest controleerbare output | Optie 4 (Pandoc + CSS) |

## Controleer altijd je PDF!

Voordat je uploadt naar Portflow:

1. Open de PDF
2. Check of **alle afbeeldingen** zichtbaar zijn
3. Check of de **opmaak klopt** (code blocks, tabellen, lijsten)
4. Check of er geen tekst is **afgekapt** aan de rand

Als een afbeelding ontbreekt: kijk terug naar het pad in je `.md`. Negen van de tien keer is dat het probleem.
