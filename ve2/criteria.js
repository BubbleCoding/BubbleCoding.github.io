/* ==========================================================================
   VE2 feedback-generator — INHOUD
   --------------------------------------------------------------------------
   Dit is het enige bestand dat je hoeft aan te passen om teksten te wijzigen.

   - LEVELS:   de vier niveaus. `label` staat bij de keuzeknop, `text` is de
               zin die in de feedback komt. {lo} wordt vervangen door de naam
               van de leeruitkomst.
   - LEARNING_OUTCOMES: per leeruitkomst de succescriteria.
       text     = het succescriterium (zichtbaar in de checklist)
       ve2Note  = opmerking specifiek voor VE2 (uitklapbaar, hulp voor docent)
       positive = zin in de feedback als het criterium is AANGEVINKT
       improve  = zin in de feedback als het criterium NIET is aangevinkt
   ========================================================================== */

const LEVELS = [
  {
    value: 1,
    label: "Onder niveau",
    text: "Voor {lo} laat je op dit moment nog onvoldoende zien dat je de succescriteria beheerst. Er is werk aan de winkel richting de eindevaluatie; pak de werkpunten hieronder concreet op en bespreek ze met je coach."
  },
  {
    value: 2,
    label: "Bijna op niveau",
    text: "Voor {lo} ben je op de goede weg, maar laat je de succescriteria nog niet overtuigend en herhaald zien op het projectwerk. Met de werkpunten hieronder kun je richting de eindevaluatie de stap naar 'op niveau' maken."
  },
  {
    value: 3,
    label: "Op niveau",
    text: "Voor {lo} laat je de succescriteria overtuigend en herhaald zien op het projectwerk. Je zit hiermee op niveau voor VE2; blijf dit vasthouden en verdiepen richting de eindevaluatie."
  },
  {
    value: 4,
    label: "Boven niveau",
    text: "Voor {lo} laat je meer zien dan we op dit moment verwachten: je toont de succescriteria consistent, zelfstandig en met diepgang. Mooi werk — zoek richting de eindevaluatie uitdaging in de werkpunten die er nog zijn."
  }
];

const LEARNING_OUTCOMES = [
  /* ---------------------------------------------------------------------- */
  {
    id: "pl",
    code: "1.1",
    title: "Persoonlijk Leiderschap",
    summary: "PL loopt door, nu in de projectcontext. De student stuurt zijn leerproces over meerdere weken (sprintplanning i.p.v. losse dagplanning), vraagt en verwerkt feedback van coach, PO en peers, en zet GenAI verantwoord in binnen het project. Verwacht meer diepgang, consistentie en zelfstandigheid dan bij VE1. Coaching 2 is hét hoofdmoment; GenAI komt terug bij de Technische Reviews.",
    criteria: [
      {
        letter: "1",
        text: "Je bent aanwezig en voorbereid bij geroosterde momenten, neemt actief deel aan Scrum‑events en komt afspraken na. Je draagt zichtbaar bij aan opdrachten, je kunt je keuzes toelichten en je communiceert proactief bij problemen.",
        ve2Note: "Nu in teamverband: aanwezig en voorbereid bij sprint-events en coaching, zichtbare bijdrage aan het projectproduct. Verwacht een consistenter beeld dan bij VE1.",
        positive: "Je bent aanwezig en goed voorbereid bij sprint-events en coaching, komt afspraken na en levert een zichtbare bijdrage aan het projectproduct.",
        improve: "Zorg dat je bij alle sprint-events en coachmomenten aanwezig en voorbereid bent, kom afspraken consequent na en maak je bijdrage aan het project zichtbaar. Communiceer proactief met je team als er iets misgaat."
      },
      {
        letter: "2",
        text: "Je vraagt regelmatig feedback op je werk en werkhouding, en laat zien hoe je deze feedback gebruikt om je aanpak te verbeteren.",
        ve2Note: "Nu ook feedback van PO en teamgenoten, niet alleen docent. Laat over meerdere sprints zien dat je feedback omzet in aangepast gedrag/werk.",
        positive: "Je vraagt actief feedback aan docent, PO en teamgenoten en laat over meerdere sprints zien hoe je die feedback omzet in aangepast werk of gedrag.",
        improve: "Vraag niet alleen je docent, maar ook je PO en teamgenoten om feedback, en laat over meerdere sprints concreet zien wat je ermee hebt gedaan (wat was de feedback, wat heb je veranderd, wat was het effect?)."
      },
      {
        letter: "3",
        text: "Je reflecteert regelmatig op concrete situaties uit je leerproces: je beschrijft wat je deed, analyseert wat je daarvan leerde en formuleert concrete leerdoelen voor je verdere ontwikkeling.",
        ve2Note: "Het VE-verslag/zelfevaluatie mag nu concreter en eerlijker, met heldere leerdoelen. Neem de Coaching‑gesprekken mee in je oordeel over de kwaliteit van de reflectie.",
        positive: "Je reflecteert concreet en eerlijk op situaties uit het project: je beschrijft wat je deed, wat je daarvan leerde en formuleert heldere leerdoelen.",
        improve: "Maak je reflecties concreter: beschrijf een specifieke situatie, analyseer wat je daarvan leerde en formuleer een helder, toetsbaar leerdoel. Neem wat je in de coachgesprekken bespreekt hierin mee."
      },
      {
        letter: "4",
        text: "Je plant je werk, monitort je voortgang en past je aanpak aan wanneer je merkt dat iets niet werkt.",
        ve2Note: "Verwacht nu planning op sprint-niveau (meerdere weken) met monitoring en bijsturing, niet alleen dagplanning zoals bij VE1.",
        positive: "Je plant je werk op sprintniveau, houdt je voortgang bij en stuurt bij wanneer iets niet werkt.",
        improve: "Werk aan een planning over meerdere weken (sprintniveau): monitor je voortgang en laat zien wanneer en hoe je je aanpak hebt bijgestuurd."
      },
      {
        letter: "5",
        text: "Je documenteert je werk, reflecties, feedback en leerdoelen in een portfolio dat je leerproces zichtbaar en navolgbaar maakt.",
        ve2Note: "Het portfolio is nu verder gevuld: projectwerk, reflecties, feedback en leerdoelen zijn navolgbaar vastgelegd. Niet meer \"net begonnen\" zoals bij VE1.",
        positive: "Je portfolio is goed gevuld: projectwerk, reflecties, feedback en leerdoelen zijn navolgbaar vastgelegd, waardoor je leerproces zichtbaar is.",
        improve: "Vul je portfolio verder aan met je projectwerk, reflecties, ontvangen feedback en leerdoelen, zodat een buitenstaander je leerproces kan volgen."
      },
      {
        letter: "6",
        text: "Je maakt bewuste keuzes over de inzet van generatieve AI op basis van wat je wilt leren en houdt bij je werk rekening met veiligheid en privacy.",
        ve2Note: "Nu zichtbaar in de projectcontext (Technische Review 2 en 3): bewust GenAI inzetten en rekening houden met veiligheid/privacy.",
        positive: "Je zet GenAI bewust in binnen het project, kunt uitleggen waarom en hoe je het gebruikt en houdt rekening met veiligheid en privacy.",
        improve: "Maak je GenAI-gebruik in het project bewuster en zichtbaarder: licht toe waar en waarom je het inzet, wat je er zelf van leert en hoe je rekening houdt met veiligheid en privacy."
      }
    ]
  },

  /* ---------------------------------------------------------------------- */
  {
    id: "aa",
    code: "2.1",
    title: "Analyseren & Adviseren",
    summary: "A&A maakt de grootste sprong t.o.v. VE1: probleemafbakening, behoefteonderzoek, methodisch testen, feedback verwerken en adviseren — alle criteria zijn nu in beeld. De complete test-/feedback-cyclus komt in Sprint Review 3/4 (ná VE2); bij VE2 zie je vooral de mondelinge presentaties en de eerste iteraties. Een volledig uitgewerkt adviesrapport is bij VE2 niet aan de orde.",
    criteria: [
      {
        letter: "1",
        text: "Je bakent het probleem af in eigen woorden, herkent stakeholders en hun behoeften, en maakt een overzicht van productkenmerken.",
        ve2Note: "Nu in beeld. Kernwerk in het project en in Coaching 2/3 (PO). Was bij VE1 \"komt later\"; beoordeel het nu volwaardig.",
        positive: "Je bakent het projectprobleem helder af in eigen woorden, brengt de stakeholders en hun behoeften in kaart en hebt een duidelijk overzicht van productkenmerken.",
        improve: "Beschrijf het probleem van de opdracht in je eigen woorden, breng in kaart wie de stakeholders zijn en wat ze nodig hebben, en vertaal dat naar een overzicht van productkenmerken."
      },
      {
        letter: "2",
        text: "Je gaat professioneel met stakeholders om: bereidt vragen/demo's voor, bespreekt ideeën respectvol en doet behoefteonderzoek voor een groep.",
        ve2Note: "Nu in beeld via PO‑gesprekken, demo's en behoefteonderzoek (Coaching 2/3, Sprint Review 2).",
        positive: "Je gaat professioneel om met de PO en andere stakeholders: je bereidt vragen en demo's voor en doet gericht behoefteonderzoek.",
        improve: "Bereid gesprekken met de PO en demo's beter voor (vragen, doel, wat wil je laten zien?) en doe aantoonbaar behoefteonderzoek bij je doelgroep."
      },
      {
        letter: "3",
        text: "Je herkent externe eisen (wet‑ en regelgeving) die van toepassing zijn en neemt deze mee in de uitvoering.",
        ve2Note: "Nu in beeld. Wordt in het project meegenomen en in coaching besproken.",
        positive: "Je herkent welke externe eisen (wet- en regelgeving) van toepassing zijn op het project en neemt ze mee in de uitvoering.",
        improve: "Ga na welke externe eisen (bijv. wet- en regelgeving rond privacy en toegankelijkheid) gelden voor je project en laat zien hoe je die meeneemt in je ontwerp en uitvoering."
      },
      {
        letter: "4",
        text: "Je doorloopt methodisch TMC (denken‑maken‑testen): maakt een eenvoudig prototype, test met (pseudo‑)gebruiker en observeert en noteert resultaten.",
        ve2Note: "Nu met echte gebruikerstesten (Technische Review 3, Sprint Review 2). Diepgang groeit nog in de reviews ná VE2.",
        positive: "Je doorloopt de TMC-cyclus methodisch: je maakt een prototype, test met gebruikers en legt je observaties en resultaten vast.",
        improve: "Doorloop de TMC-cyclus (denken-maken-testen) bewuster: test je prototype met echte gebruikers en noteer je observaties en resultaten systematisch."
      },
      {
        letter: "5",
        text: "Je verwerkt feedback, past inzichten toe in product/ontwerp, toont aanpassingen en beschrijft hoe je dit bijhoudt.",
        ve2Note: "Sterk zichtbaar via PO‑feedback en testresultaten die in product/ontwerp worden verwerkt (Coaching 2/3, Sprint Review 2, Technische Review 3).",
        positive: "Je verwerkt feedback van de PO en uit testen zichtbaar in je product of ontwerp, en houdt bij welke aanpassingen je waarom hebt gedaan.",
        improve: "Laat duidelijker zien hoe je feedback van de PO en uit testen verwerkt: welke aanpassing heb je gedaan, waarom, en waar houd je dat bij (bijv. in de backlog of user stories)?"
      },
      {
        letter: "6",
        text: "Je presenteert je analyse en aanbevelingen mondeling en schriftelijk, ondersteund met visuele hulpmiddelen zoals schetsen, diagrammen of slides.",
        ve2Note: "In beeld, zowel mondeling (reviews, PO‑pitch) als schriftelijk. In semester 1 is \"schriftelijk\" de schriftelijke ondersteuning van het product — documentatie/rapportage van feedback en aanpassingen. Een volledig uitgewerkt adviesrapport hoort pas bij semester 2 en is bij VE2 niet vereist.",
        positive: "Je presenteert je analyse en keuzes helder, mondeling en schriftelijk, ondersteund met passende visuele hulpmiddelen.",
        improve: "Ondersteun je presentaties en PO-pitch met visuele hulpmiddelen (schetsen, diagrammen, slides) en leg de verwerkte feedback en aanpassingen ook schriftelijk vast bij je product."
      }
    ]
  },

  /* ---------------------------------------------------------------------- */
  {
    id: "or",
    code: "3.1",
    title: "Ontwerpen & Realiseren",
    summary: "O&R is nu volledig technisch projectwerk: de interactieve installatie met webinterface, gekoppeld aan een database en een hardware controller (ESP32). Database-/hardware-koppeling (1), een eenvoudig datamodel (5) en security (6) zijn nu in beeld. Technische Review 2 en 3 zijn de hoofdmomenten. Het eindproduct volgt in sprint 4 (ná VE2); bij VE2 is het product werk-in-uitvoering.",
    criteria: [
      {
        letter: "1",
        text: "Je bouwt een werkende webpagina met HTML/CSS en eenvoudige JS, schrijft procedurele code die voldoet aan gegeven voorbeelden en koppelt de input en output aan een database en een hardware controller.",
        ve2Note: "Nu volledig in beeld, inclusief de koppeling aan database én hardware controller (ESP32/WebSerial) die bij VE1 nog buiten beeld was.",
        positive: "Je bouwt een werkende webinterface met HTML/CSS/JS en koppelt de input en output aan de database en de hardware controller (ESP32).",
        improve: "Werk aan de koppeling van je webinterface met de database en de hardware controller (ESP32/WebSerial), zodat input en output daadwerkelijk via die onderdelen lopen."
      },
      {
        letter: "2",
        text: "Je bouwt een oplossing aan de hand van een omschrijving in user‑stories met acceptatiecriteria.",
        ve2Note: "In beeld in het project; user stories sturen nu het bouwwerk (Technische Review 2, Sprint Review 1 en 2).",
        positive: "Je bouwt gericht aan de hand van user stories en kunt laten zien hoe je werk voldoet aan de acceptatiecriteria.",
        improve: "Laat je bouwwerk duidelijker sturen door user stories: werk vanuit de acceptatiecriteria en laat zien dat je opgeleverde werk daaraan voldoet."
      },
      {
        letter: "3",
        text: "Je richt een ontwikkelomgeving in met IDE/tools, leest foutmeldingen in terminal/console, lost basisbugs op en gebruikt deze consistent.",
        ve2Note: "In beeld in een grotere codebase; verwacht nu consistent gebruik, minder afhankelijk van hulp dan bij VE1.",
        positive: "Je werkt zelfstandig met je ontwikkelomgeving, leest foutmeldingen in terminal en console en lost basisbugs zelf op.",
        improve: "Word zelfstandiger in debuggen: lees foutmeldingen in de terminal en console eerst zelf, zoek uit wat ze betekenen en probeer basisbugs zelf op te lossen voordat je hulp vraagt."
      },
      {
        letter: "4",
        text: "Je verdeelt je code over modules, schrijft functies met één taak, hergebruikt code om duplicatie te vermijden en levert een volledig werkend product en kunt dit toelichten.",
        ve2Note: "In beeld; in een grotere codebase weegt overzichtelijke structuur en toelichting zwaarder.",
        positive: "Je code is overzichtelijk gestructureerd in modules en functies met één taak, je vermijdt duplicatie en kunt je code goed toelichten.",
        improve: "Besteed meer aandacht aan de structuur van je code: verdeel hem over modules, schrijf functies met één taak, voorkom duplicatie en zorg dat je elk deel van je code kunt toelichten."
      },
      {
        letter: "5",
        text: "Je implementeert een eenvoudige dataverzameling of systeem met basiselementen (tabellen, kolommen, relaties).",
        ve2Note: "Nu in beeld (was bij VE1 \"komt later\"): een eenvoudig datamodel van de projectdata. Dit mag simpel zijn, bijvoorbeeld twee tabellen met een eenvoudige relatie ertussen.",
        positive: "Je hebt een passend, eenvoudig datamodel voor de projectdata opgezet met tabellen, kolommen en een relatie.",
        improve: "Zet een eenvoudig datamodel op voor je projectdata (bijv. twee tabellen met een relatie ertussen) en laat zien hoe je applicatie het gebruikt."
      },
      {
        letter: "6",
        text: "Je overweegt cyber security aspecten in je ontwerp.",
        ve2Note: "Nu actief meegenomen in het ontwerp (Technische Review 2, Sprint Review 1 en 2).",
        positive: "Je neemt cyber security aspecten actief mee in je ontwerp en kunt uitleggen welke maatregelen je hebt genomen.",
        improve: "Neem cyber security actief mee in je ontwerp: welke risico's zijn er (bijv. invoer van gebruikers, opslag van gegevens) en wat doe je eraan? Maak die afwegingen zichtbaar."
      },
      {
        letter: "7",
        text: "Je maakt eenvoudige wireframes en een UI die aansluiten bij gebruikersonderzoek, en verbetert ontwerp en product iteratief op basis van TMC‑feedback.",
        ve2Note: "Nu met echt gebruikersonderzoek (gebruikerstesten in Technische Review 3 en prototype in Sprint Review 2): UI aansluitend op onderzoek en iteratief verbeterd.",
        positive: "Je wireframes en UI sluiten aan bij het gebruikersonderzoek en je verbetert je ontwerp zichtbaar op basis van testresultaten.",
        improve: "Laat je wireframes en UI duidelijker voortkomen uit je gebruikersonderzoek en toon hoe je het ontwerp stap voor stap hebt verbeterd op basis van testresultaten."
      },
      {
        letter: "8",
        text: "Je test functionaliteit met hulp, documenteert issues, legt uit hoe/waarom je oplossing past bij eisen in een review of coachgesprek, en past aan op feedback.",
        ve2Note: "Sterk in beeld via de technische reviews, deels met een expert-vragenlijst als steekproef.",
        positive: "Je test je functionaliteit, documenteert issues en legt in reviews helder uit hoe en waarom je oplossing aansluit bij de eisen.",
        improve: "Test je functionaliteit gerichter, leg gevonden problemen vast als issues en bereid je voor om in reviews uit te leggen hoe en waarom je oplossing aansluit bij de eisen."
      }
    ]
  },

  /* ---------------------------------------------------------------------- */
  {
    id: "ms",
    code: "4.1",
    title: "Managen & Samenwerken",
    summary: "M&S maakt de grote sprong: studenten werken nu echt in teamverband volgens Scrum. Let op: het zwaartepunt ligt op zelf aangedragen bewijs, bij voorkeur gekoppeld aan een persoonlijk leerdoel M&S. De feedbackmomenten (Sprint Review 2, Retrospective 2, coach/PO) leveren vooral de feedback; de student selecteert, bundelt en duidt het bewijs zelf in zijn portfolio.",
    criteria: [
      {
        letter: "1",
        text: "Je gebruikt Git consequent: maakt regelmatig commits op de main branch met korte, beschrijvende berichten en je lost merge‑conflicten op onder begeleiding.",
        ve2Note: "Loopt door via je doorlopende GitLab‑commits in het project (zelfstandig beoordeeld). In semester 1 nog op main-branch-niveau; merge‑conflicten oplossen mag nog onder begeleiding.",
        positive: "Je gebruikt Git consequent met regelmatige commits en korte, beschrijvende commit-berichten.",
        improve: "Commit regelmatiger in GitLab, in kleine stappen en met korte, beschrijvende commit-berichten, zodat je voortgang navolgbaar is."
      },
      {
        letter: "2",
        text: "Je participeert actief in SCRUM‑events (planning, review, retro), draagt bij aan voorbereiding en houdt de status van je taken op het sprint bord bij.",
        ve2Note: "Nu volwaardig in beeld (was bij VE1 grotendeels later): echte teamdeelname aan planning/review/retro en het bijhouden van het sprint bord.",
        positive: "Je neemt actief deel aan de Scrum-events, draagt bij aan de voorbereiding en houdt de status van je taken op het sprint bord bij.",
        improve: "Neem actiever deel aan de Scrum-events (planning, review, retro), help mee met de voorbereiding en houd de status van je taken op het sprint bord actueel."
      },
      {
        letter: "3",
        text: "Je pakt toegewezen werk op, wijst jezelf toe aan user stories, overlegt met team en Product Owner over de planning en blokkades, daarbij vraag je tijdig om hulp.",
        ve2Note: "Nu in beeld in het project: jezelf toewijzen aan user stories en overleggen met team en PO.",
        positive: "Je wijst jezelf toe aan user stories, overlegt met team en PO over planning en blokkades en vraagt tijdig om hulp.",
        improve: "Neem meer eigenaarschap: wijs jezelf toe aan user stories, bespreek planning en blokkades met je team en de PO, en vraag op tijd om hulp als je vastloopt."
      },
      {
        letter: "4",
        text: "Je geeft en ontvangt feedback tijdens events/code reviews, noteert deze bij issues en in de retrospectives. Je deelt complimenten en verbeterpunten met teamgenoten.",
        ve2Note: "Nu in teamverband via Sprint Review 2 en Retrospective 2 (en doorlopend vanaf Retrospective 1): feedback geven/ontvangen, noteren bij issues en in de retro.",
        positive: "Je geeft en ontvangt feedback in reviews en retrospectives, legt die vast en deelt complimenten en verbeterpunten met je teamgenoten.",
        improve: "Geef en vraag vaker feedback binnen je team, leg die vast bij issues en in de retrospective, en deel zowel complimenten als verbeterpunten met teamgenoten."
      },
      {
        letter: "5",
        text: "Je controleert je eigen werk aan de hand van de gestelde kwaliteitseisen, maakt issues aan voor fouten of ontbrekende onderdelen en verwerkt feedback in concrete verbeteracties.",
        ve2Note: "Nu in beeld: eigen werk toetsen aan de kwaliteitseisen/DoD, issues aanmaken en verbeteracties uitvoeren.",
        positive: "Je toetst je eigen werk aan de kwaliteitseisen (DoD), maakt issues aan voor fouten of ontbrekende onderdelen en zet feedback om in concrete verbeteracties.",
        improve: "Controleer je eigen werk aan de hand van de Definition of Done, maak issues aan voor wat ontbreekt of niet werkt en zet feedback om in concrete verbeteracties."
      }
    ],
    /* Extra zin die altijd onder M&S verschijnt als er werkpunten zijn. Leeg laten ("") om uit te zetten. */
    improveFooter: "Let op: bij Managen & Samenwerken telt vooral het bewijs dat je zelf aandraagt. Kies zelf artefacten (planbord, commits, issues, retro-notities, samenwerkingsafspraken), koppel ze aan een persoonlijk leerdoel M&S en licht in je portfolio toe hoe ze je ontwikkeling laten zien."
  }
];

/* Teksten rondom de feedback. {naam} wordt vervangen door de ingevulde voornaam. */
const TEXTS = {
  greetingWithName: "Hoi {naam},",
  greetingNoName: "Hoi,",
  intro: "Hieronder vind je de feedback op je Voortgangsevaluatie 2 (VE2), per leeruitkomst.",
  strengthsHeading: "Wat gaat goed:",
  improveHeading: "Werkpunten richting de eindevaluatie:",
  noteHeading: "Opmerking:",
  closing: ""
};
