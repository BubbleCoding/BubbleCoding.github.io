## Feedback en hulp bij leervraag door studentmentor/docent

Dit stappenplan helpt je om zo gericht en efficiënt mogelijk hulp te krijgen van de studentmentor en docenten. Een duidelijke hulpvraag is de sleutel tot succesvolle begeleiding.

Deze handleiding is vrijblijvend, maar het kan wel gebruikt worden als bewijs van je eigen leerproces. Een goede uitwerking van dit document kan gebruikt worden voor het leerdoel persoonlijk leiderschap en voor onderzoekend probleemoplossen.

### Stap 1: Jouw voorbereiding en analyse

Voordat je om feedback of hulp vraagt, moet je helder in kaart brengen waar je precies hulp bij nodig hebt, waar je bij vastloopt of waar je feedback over wil krijgen.

- **1.1 Identificeer het knelpunt:** Wees zo specifiek mogelijk (bijv. niet alleen "Programmeren", maar “Loops, SQL, OOP, Python, e.d.”).
- **1.2 Documenteer je Inzet:** Maak een overzicht van alles wat je al hebt gedaan om het probleem zelf op te lossen (colleges, literatuur, oefenopdrachten, reeds behaalde scores). **Wij verwachten dat je zelf al moeite hebt gedaan. Vraag medestudenten, bekijk de DLO, zoek op het internet, en maak gebruik van LLM’s voor dat je bij ons komt.**

### Stap 2: Demonstreer je hulpvraag

Gebruik de onderstaande structuur om jouw hulpvraag te formuleren. Zie een voorbeeld onderaan dit document.

**A. Context en onderwerp**

- **Onderwerp:** Noem het precieze onderwerp en de specifieke tak van jouw probleem
    - _Voorbeeld:_ **Databases**, **SQL JOIN-statements**.
- **Huidige Kennisniveau:** Geef een eerlijke inschatting van je beheersing van de basis.
    - Wat lukt wel en wat lukt niet?

#### B. Wat heb je tot nu toe gedaan?

Beschrijf of demonstreer je acties. Wij gebruiken dit om te zien waar je bent vastgelopen.

- _Voorbeelden van acties:_
    - "Ik probeer code te draaien op mijn laptop, ik krijg foutmeldingen dat ik libraries niet heb geïnstalleerd, maar na dat ik ze instaleer blijft de foutmelding.”
    - "Ik heb geprobeerd om de feedback op mijn ERD toe te passen, maar ik begrijp niet waar ik de fout in ga, volgens bronnen van het internet doe ik het goed."

#### C. Waar loop je tegenaan?

**Dit is de kern van je aanvraag.** Beschrijf _exact_ wat het probleem is. Voeg indien mogelijk een stukje code, een foutmelding, of een schets van een concept toe.

- _Voorbeelden van problemen:_
    - **Conceptueel:** "Ik zie het verschil niet tussen een **ERD** en een **EERD** en wanneer ik welke moet gebruiken."
    - **Toepassing:** "Mijn programma werkt, maar als ik een _Inner Join_ op twee tabellen uitvoer in mijn code, krijg ik steeds een lege dataset terug, terwijl er wel data in de database staat."
    - **Projectmatig:** "Ik ben overzicht kwijt in mijn project en weet niet hoe ik mijn code moet opsplitsen in verschillende klassen om het principe van **Single Responsibility** toe te passen."

#### D. De precieze hulpvraag en het gewenste resultaat

Wat wil je _bereiken_ met onze hulp? Dit definieert de focus van gene die jou helpt.

- _Voorbeelden van hulpvragen:_
    - "Ik wil de concepten **Abstractie** en **Encapsulatie** in OOP begrijpen door middel van **nieuwe, korte oefeningen** die we samen maken."
    - "Hulp bij het opsporen van de fout in mijn **SQL-code** en een korte uitleg over hoe ik dergelijke fouten in de toekomst kan voorkomen."
    - "Begeleiding bij het opstellen van een **projectstructuur** voor de komende sprint, gebaseerd op de eerder beschreven hulpvraag."

### Stap 3: Afronding

Voeg ten slotte je persoonlijke terugblik en wat je geleerd hebt toe aan het document. Zet daarna het document op Portflow als extra bewijs.

- **Terugblik:** Als je nu terugkijkt naar je probleem, kan je nu zelf antwoord geven op de vraag die je hebt opgesteld? Door het inzichtelijk te maken van je probleem, gebeurt het soms dat je nu wel begrijp waar je vast loopt en dus geen hulp meer nodig hebt. Ga anders naar een studentmentor of docent.
- **Wat neem je mee:** Na het gebruiken van dit document moet je ook iets doen met wat je geleerd hebt. Schrijf op wat je geleerd hebt en neem het mee voor jezelf. Is er verder iets wat je geleerd hebt wat niet onderdeel was van je vraag tijdens het gebruiken van dit document?
- **Portflow:** Als je dit document mooi stap voor stap hebt gevolgd kan je het direct op Portflow zetten als bewijsstuk voor Persoonlijk Leiderschap en misschien ook voor Onderzoekend probleemoplossen. Als je dat doet, beschrijf dan waarom jij denkt dat dit goed bewijs is.

### Voorbeeld: Ingevulde Hulpvraag

#### A. Context en Onderwerp

- **Onderwerp/Vak:** **Programmeren 2** – Focus op **Objectgeoriënteerd Programmeren (OOP)**.
- **Specifiek Concept:** Het correct inzetten en onderscheiden van **Abstracte Klassen** versus **Interfaces** en het werken met _Polymorfisme_.
- **Huidige Kennisniveau:** Basis syntax (loops, conditions, methoden) is bekend. Ervaring met het maken van één klasse, maar moeite met complexe overerving en design patterns.

#### B. Wat heb ik tot nu toe gedaan?

- Ik heb alle hoorcolleges en werkcolleges over OOP bijgewoond en de slides doorgenomen.
- Ik heb Hoofdstuk 6 ("Inheritance") en Hoofdstuk 7 ("Interfaces and Abstract Classes") van het voorgeschreven boek _[Titel van boek]_ gelezen.
- Ik heb geprobeerd om Oefening 4.2 (Implementeer een Shape class met verschillende afgeleide klassen) te maken. Ik heb deze met een score van **5/10** teruggekregen omdat ik _Interfaces_ heb gebruikt waar een _Abstracte Klasse_ logischer was, en vice versa.
- Ik heb een aantal YouTube-tutorials bekeken, maar de voorbeelden zijn vaak te simpel en de vertaalslag naar onze opdrachten lukt niet.

#### C. Waar loop ik tegenaan? (Het Concrete Probleem)

Het grootste probleem zit in de **designkeuze:**

- **Onderscheid:** Ik snap dat een _Interface_ een contract is, maar ik zie niet wanneer ik moet kiezen voor abstract class Animal met basisimplementaties, of voor interface IShape zonder implementatie.
- **Polymorfisme:** Ik begrijp de theorie van polymorfisme (List<Animal>), maar ik zie niet hoe dit concept mijn code **eenvoudiger of beter onderhoudbaar** maakt in een groter project. Ik schrijf de code nu alsof ik nog in een procedurele taal werk.

**Specifieke Foutmelding:** Bij mijn poging om het probleem te herstellen, heb ik een afgeleide klasse Square gemaakt die van een Shape _erft_ én een ISerializable _implementeert_, maar ik raak in de war met het gebruik van virtual en override keywords in combinatie met de interface methoden.

#### D. De precieze hulpvraag en het gewenste resultaat

- **Hulpvraag:**
    - Duidelijke, praktische uitleg over: Waarom kies je wat?
    - Het samen maken van **twee nieuwe, kleine oefenopdrachten** waarin we _alleen_ de OOP-concepten (Abstract, Interface, Polymorfisme) toepassen.