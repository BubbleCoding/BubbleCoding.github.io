/* ==========================================================================
   VE2 feedback-generator — INHOUD
   --------------------------------------------------------------------------
   Dit is het enige bestand dat je hoeft aan te passen om teksten te wijzigen.

   - LEVELS:   de vier niveaus. `label` staat bij de keuzeknop en in de kop
               van de feedback. `text` is een optionele extra zin onder die
               kop ({lo} = naam leeruitkomst); leeg laten = geen extra zin.
   - LEARNING_OUTCOMES: per leeruitkomst de succescriteria.
       text     = het succescriterium (alleen zichtbaar voor de docent)
       ve2Note  = opmerking specifiek voor VE2 (uitklapbaar, alleen docent)
                  In text en ve2Note maakt **zo** tekst vetgedrukt, net als
                  in het handboek.
       positive = korte regel voor de student als het criterium is AANGEVINKT
       improve  = korte regel voor de student als het criterium NIET is aangevinkt
   ========================================================================== */

const LEVELS = [
  { value: 1, label: "Onder niveau",    text: "" },
  { value: 2, label: "Bijna op niveau", text: "" },
  { value: 3, label: "Op niveau",       text: "" },
  { value: 4, label: "Boven niveau",    text: "" }
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
        text: "**Je bent aanwezig en voorbereid** bij geroosterde momenten, neemt actief deel aan Scrum‑events en komt afspraken na. **Je draagt zichtbaar bij** aan opdrachten, je kunt je keuzes toelichten en **je communiceert proactief** bij problemen.",
        ve2Note: "Nu in teamverband: aanwezig en voorbereid bij sprint-events en coaching, zichtbare bijdrage aan het projectproduct. Verwacht een consistenter beeld dan bij VE1.",
        positive: "Je bent aanwezig en voorbereid, draagt zichtbaar bij en communiceert proactief.",
        improve: "Wees aanwezig en voorbereid, draag zichtbaar bij en communiceer proactief."
      },
      {
        letter: "2",
        text: "**Je vraagt regelmatig feedback** op je werk en werkhouding, en laat zien hoe je deze feedback gebruikt om je aanpak te verbeteren.",
        ve2Note: "Nu ook feedback van PO en teamgenoten, niet alleen docent. Laat over meerdere sprints zien dat je feedback omzet in aangepast gedrag/werk.",
        positive: "Je vraagt regelmatig feedback.",
        improve: "Vraag regelmatig feedback."
      },
      {
        letter: "3",
        text: "**Je reflecteert regelmatig** op concrete situaties uit je leerproces: je beschrijft wat je deed, analyseert wat je daarvan leerde en formuleert concrete leerdoelen voor je verdere ontwikkeling.",
        ve2Note: "Het VE-verslag/zelfevaluatie mag nu concreter en eerlijker, met heldere leerdoelen. Neem de Coaching‑gesprekken mee in je oordeel over de kwaliteit van de reflectie.",
        positive: "Je reflecteert regelmatig.",
        improve: "Reflecteer regelmatig."
      },
      {
        letter: "4",
        text: "**Je plant je werk, monitort je voortgang en past je aanpak aan** wanneer je merkt dat iets niet werkt.",
        ve2Note: "Verwacht nu planning op sprint-niveau (meerdere weken) met monitoring en bijsturing, niet alleen dagplanning zoals bij VE1.",
        positive: "Je plant je werk, monitort je voortgang en past je aanpak aan.",
        improve: "Plan je werk, monitor je voortgang en pas je aanpak aan."
      },
      {
        letter: "5",
        text: "**Je documenteert je werk, reflecties, feedback en leerdoelen** in een portfolio dat je leerproces zichtbaar en navolgbaar maakt.",
        ve2Note: "Het portfolio is nu verder gevuld: projectwerk, reflecties, feedback en leerdoelen zijn navolgbaar vastgelegd. Niet meer \"net begonnen\" zoals bij VE1.",
        positive: "Je documenteert je werk, reflecties, feedback en leerdoelen.",
        improve: "Documenteer je werk, reflecties, feedback en leerdoelen."
      },
      {
        letter: "6",
        text: "**Je maakt bewuste keuzes** over de inzet van generatieve AI op basis van wat je wilt leren en houdt bij je werk rekening met veiligheid en privacy.",
        ve2Note: "Nu zichtbaar in de projectcontext (Technische Review 2 en 3): bewust GenAI inzetten en rekening houden met veiligheid/privacy.",
        positive: "Je maakt bewuste keuzes in je inzet van GenAI.",
        improve: "Maak bewuste keuzes in je inzet van GenAI."
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
        text: "**Je bakent het probleem af** in eigen woorden, **herkent stakeholders** en hun behoeften, en maakt een overzicht van productkenmerken.",
        ve2Note: "**Nu in beeld.** Kernwerk in het project en in Coaching 2/3 (PO). Was bij VE1 \"komt later\"; beoordeel het nu volwaardig.",
        positive: "Je bakent het probleem af en herkent stakeholders.",
        improve: "Baken het probleem af en herken de stakeholders."
      },
      {
        letter: "2",
        text: "**Je gaat professioneel met stakeholders om**: bereidt vragen/demo's voor, bespreekt ideeën respectvol en doet behoefteonderzoek voor een groep.",
        ve2Note: "**Nu in beeld** via PO‑gesprekken, demo's en behoefteonderzoek (Coaching 2/3, Sprint Review 2).",
        positive: "Je gaat professioneel met stakeholders om.",
        improve: "Ga professioneel met stakeholders om."
      },
      {
        letter: "3",
        text: "**Je herkent externe eisen** (wet‑ en regelgeving) die van toepassing zijn en neemt deze mee in de uitvoering.",
        ve2Note: "**Nu in beeld.** Wordt in het project meegenomen en in coaching besproken.",
        positive: "Je herkent externe eisen.",
        improve: "Herken externe eisen."
      },
      {
        letter: "4",
        text: "**Je doorloopt methodisch TMC** (denken‑maken‑testen): maakt een eenvoudig prototype, test met (pseudo‑)gebruiker en observeert en noteert resultaten.",
        ve2Note: "**Nu met echte gebruikerstesten** (Technische Review 3, Sprint Review 2). Diepgang groeit nog in de reviews ná VE2.",
        positive: "Je doorloopt methodisch TMC.",
        improve: "Doorloop methodisch TMC."
      },
      {
        letter: "5",
        text: "**Je verwerkt feedback**, past inzichten toe in product/ontwerp, toont aanpassingen en beschrijft hoe je dit bijhoudt.",
        ve2Note: "**Sterk zichtbaar** via PO‑feedback en testresultaten die in product/ontwerp worden verwerkt (Coaching 2/3, Sprint Review 2, Technische Review 3).",
        positive: "Je verwerkt feedback.",
        improve: "Verwerk feedback."
      },
      {
        letter: "6",
        text: "**Je presenteert** je analyse en aanbevelingen **mondeling en schriftelijk**, ondersteund met visuele hulpmiddelen zoals schetsen, diagrammen of slides.",
        ve2Note: "**In beeld**, zowel mondeling (reviews, PO‑pitch) als schriftelijk. In semester 1 is \"schriftelijk\" de **schriftelijke ondersteuning van het product** — documentatie/rapportage van feedback en aanpassingen (BOKSA 2.1, \"Bevindingen en advies communiceren\"). Een volledig uitgewerkt adviesrapport hoort pas bij semester 2 en is bij VE2 niet vereist.",
        positive: "Je presenteert mondeling en schriftelijk.",
        improve: "Presenteer mondeling en schriftelijk."
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
        text: "**Je bouwt een werkende webpagina** met HTML/CSS en eenvoudige JS, **schrijft procedurele code** die voldoet aan gegeven voorbeelden en **koppelt** de input en output **aan een database en een hardware controller**.",
        ve2Note: "**Nu volledig in beeld**, inclusief de koppeling aan database én hardware controller (ESP32/WebSerial) die bij VE1 nog buiten beeld was.",
        positive: "Je bouwt een werkende webpagina, schrijft procedurele code en koppelt aan een database en een hardware controller.",
        improve: "Bouw een werkende webpagina, schrijf procedurele code en koppel aan een database en een hardware controller."
      },
      {
        letter: "2",
        text: "**Je bouwt een oplossing aan de hand van** een omschrijving in **user‑stories** met acceptatiecriteria.",
        ve2Note: "**In beeld** in het project; user stories sturen nu het bouwwerk (Technische Review 2, Sprint Review 1 en 2).",
        positive: "Je bouwt een oplossing aan de hand van user stories.",
        improve: "Bouw een oplossing aan de hand van user stories."
      },
      {
        letter: "3",
        text: "**Je richt een ontwikkelomgeving in** met IDE/tools, leest foutmeldingen in terminal/console, lost basisbugs op **en gebruikt deze consistent**.",
        ve2Note: "**In beeld** in een grotere codebase; verwacht nu consistent gebruik, minder afhankelijk van hulp dan bij VE1.",
        positive: "Je richt een ontwikkelomgeving in en gebruikt deze consistent.",
        improve: "Richt een ontwikkelomgeving in en gebruik deze consistent."
      },
      {
        letter: "4",
        text: "**Je verdeelt je code over modules**, schrijft functies met één taak, hergebruikt code om duplicatie te vermijden en levert een volledig werkend product en **kunt dit toelichten**.",
        ve2Note: "**In beeld**; in een grotere codebase weegt overzichtelijke structuur en toelichting zwaarder.",
        positive: "Je verdeelt je code over modules en kunt dit toelichten.",
        improve: "Verdeel je code over modules en zorg dat je dit kunt toelichten."
      },
      {
        letter: "5",
        text: "**Je implementeert een eenvoudige dataverzameling** of systeem met basiselementen (tabellen, kolommen, relaties).",
        ve2Note: "**Nu in beeld** (was bij VE1 \"komt later\"): een eenvoudig datamodel van de projectdata. Dit mag simpel zijn, bijvoorbeeld twee tabellen met een eenvoudige relatie ertussen.",
        positive: "Je implementeert een eenvoudige dataverzameling.",
        improve: "Implementeer een eenvoudige dataverzameling."
      },
      {
        letter: "6",
        text: "**Je overweegt cyber security aspecten** in je ontwerp.",
        ve2Note: "**Nu actief meegenomen** in het ontwerp (Technische Review 2, Sprint Review 1 en 2).",
        positive: "Je overweegt cyber security aspecten.",
        improve: "Overweeg cyber security aspecten."
      },
      {
        letter: "7",
        text: "**Je maakt eenvoudige wireframes en een UI** die aansluiten bij gebruikersonderzoek, **en verbetert** ontwerp en product **iteratief** op basis van TMC‑feedback.",
        ve2Note: "**Nu met echt gebruikersonderzoek** (gebruikerstesten in Technische Review 3 en prototype in Sprint Review 2): UI aansluitend op onderzoek en iteratief verbeterd.",
        positive: "Je maakt eenvoudige wireframes en een UI en verbetert iteratief.",
        improve: "Maak eenvoudige wireframes en een UI en verbeter iteratief."
      },
      {
        letter: "8",
        text: "**Je test functionaliteit met hulp**, documenteert issues, **legt uit** hoe/waarom je oplossing past bij eisen **in een review of coachgesprek**, en **past aan** op feedback.",
        ve2Note: "**Sterk in beeld** via de technische reviews, deels met een expert-vragenlijst als steekproef.",
        positive: "Je test functionaliteit, legt uit in een review of coachgesprek en past aan.",
        improve: "Test functionaliteit, leg uit in een review of coachgesprek en pas aan."
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
        text: "**Je gebruikt Git consequent**: maakt regelmatig commits op de main branch met korte, beschrijvende berichten en je lost merge‑conflicten op onder begeleiding.",
        ve2Note: "**Loopt door** via je doorlopende GitLab‑commits in het project (zelfstandig beoordeeld). In semester 1 nog op main-branch-niveau; merge‑conflicten oplossen mag nog onder begeleiding.",
        positive: "Je gebruikt Git consequent.",
        improve: "Gebruik Git consequent."
      },
      {
        letter: "2",
        text: "**Je participeert actief in SCRUM‑events** (planning, review, retro), draagt bij aan voorbereiding en houdt de status van je taken op het sprint bord bij.",
        ve2Note: "**Nu volwaardig in beeld** (was bij VE1 grotendeels later): echte teamdeelname aan planning/review/retro en het bijhouden van het sprint bord.",
        positive: "Je participeert actief in Scrum-events.",
        improve: "Participeer actief in Scrum-events."
      },
      {
        letter: "3",
        text: "**Je pakt toegewezen werk op**, wijst jezelf toe aan user stories, **overlegt met team en Product Owner** over de planning en blokkades, daarbij vraag je tijdig om hulp.",
        ve2Note: "**Nu in beeld** in het project: jezelf toewijzen aan user stories en overleggen met team en PO.",
        positive: "Je pakt toegewezen werk op en overlegt met team en Product Owner.",
        improve: "Pak toegewezen werk op en overleg met team en Product Owner."
      },
      {
        letter: "4",
        text: "**Je geeft en ontvangt feedback** tijdens events/code reviews, noteert deze bij issues en in de retrospectives. Je deelt complimenten en verbeterpunten met teamgenoten.",
        ve2Note: "**Nu in teamverband** via Sprint Review 2 en Retrospective 2 (en doorlopend vanaf Retrospective 1): feedback geven/ontvangen, noteren bij issues en in de retro.",
        positive: "Je geeft en ontvangt feedback.",
        improve: "Geef en ontvang feedback."
      },
      {
        letter: "5",
        text: "**Je controleert je eigen werk aan de hand van de gestelde kwaliteitseisen**, maakt issues aan voor fouten of ontbrekende onderdelen en verwerkt feedback in concrete verbeteracties.",
        ve2Note: "**Nu in beeld**: eigen werk toetsen aan de kwaliteitseisen/DoD, issues aanmaken en verbeteracties uitvoeren.",
        positive: "Je controleert je eigen werk aan de hand van de kwaliteitseisen.",
        improve: "Controleer je eigen werk aan de hand van de kwaliteitseisen."
      }
    ],
    /* Optionele extra regel onder M&S als er werkpunten zijn. Leeg = uit.
       Bijv.: "Tip: draag zelf bewijs aan, gekoppeld aan een persoonlijk leerdoel M&S." */
    improveFooter: ""
  }
];

/* Kopjes in de feedbacktekst. */
const TEXTS = {
  strengthsHeading: "Goed:",
  improveHeading: "Werkpunten:",
  noteHeading: "Opmerking:"
};
