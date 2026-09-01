# De klas als dataset

IJsbreker AI 101 · ±30 min · elke klasgrootte

**Nodig:** een turfkaartje per student (sjabloon onderaan), bordruimte, dit blad.

## Waar het op neerkomt

Studenten stellen zich voor door om de beurt een uitspraak over zichzelf te doen. Iedereen voor wie die uitspraak ook geldt, gaat staan. In de eerste ronde mag de uitspraak zo specifiek mogelijk zijn, in de tweede ronde is het juist de bedoeling de klas zo gelijk mogelijk te splitsen.

Elke uitspraak komt genummerd op het bord. Studenten kruisen op hun eigen kaartje aan wanneer ze stonden, dus aan het eind heeft iedereen een rij kruisjes die hem of haar beschrijft. Samen is dat een dataset: de studenten zijn de rijen, de uitspraken op het bord zijn de kolommen.

Daarna zoekt iedereen de klasgenoot met de meeste overeenkomsten en gaat daar zitten — een nearest-neighbour-zoekopdracht die de klas met de hand uitvoert. Je sluit af met vier vragen over de dataset die ze net gemaakt hebben.

---

## 1 · Spelregels — 3 min

Deel de kaartjes uit. Drie regels:

- Alleen dingen die je ook op een openbaar profiel zou zetten
- Nooit een uitspraak over iemand anders
- Passen mag altijd, zonder toelichting

---

## 2 · Ronde A — 5 min

> "Zeg je naam en één specifiek ding over jezelf. Iedereen voor wie dat ook geldt, gaat staan."

Rondje langs de klas. Tempo houden. **Niets noteren**, de kaartjes blijven leeg.

Afsluiten met: _hoe bruikbaar was dat om jullie in groepen te verdelen?_

---

## 3 · Ronde B — 12 min

> "Zelfde spel, ander doel. Nu scoor je punten ter grootte van de kleinste groep. Sta je in je eentje, dan scoor je nul."

Tijdens de ronde:

- Nummer elke uitspraak op het bord, maximaal drie woorden
- Roep de verdeling om: "zes tegen dertien, zes punten"
- Studenten kruisen dat nummer aan als ze stonden
- ~35 sec per uitspraak, stop bij 20

Afsluiten met: _jullie houden nu allemaal een rij bits vast. Op het bord staan de kolomnamen. Samen hebben jullie een dataset._

---

## 4 · Naaste buur — 8 min

> "Tel hoeveel vakjes overeenkomen met de mensen om je heen — allebei leeg telt ook als overeenkomst. Ga zitten bij je beste match."

Laat 4 minuten lopen, loop rond. Daarna:

- Vraag twee paren naar hun score
- _Hebben jullie echt iets gemeen, of ligt het aan welke uitspraken toevallig gedaan zijn?_
- _Wie kwam bij zijn tweede keuze uit omdat de eerste bezet was?_
- Benoem: **k-nearest-neighbour, k=1, Hamming-afstand**. Op het bord.

---

## 5 · Nabespreking — 4 min

Vier vragen, korte antwoorden:

1. Zouden deze uitspraken een groep verpleegkundigen net zo splitsen?
2. Hoeveel vakjes zijn er nodig om jou te identificeren? _(Neem een vrijwilliger, laat de klas versmallen — meestal drie of vier.)_
3. Wat hebben we níet verzameld?
4. Zou je je kaartje inleveren?

**Foto van het bord maken.**

---

## Als het stokt

Bied twee uitspraken tegelijk aan, nooit één. Pas de lijst aan op je groep.

1. Ik woon nog bij mijn ouders
2. Ik heb Linux als hoofdbesturingssysteem gebruikt
3. Ik ben vandaag met de fiets gekomen
4. Ik heb betaald werk in de IT gedaan
5. Ik drink koffie voor twaalf uur
6. Ik heb code geschreven in een taal die niemand me had gevraagd te leren
7. Ik ben buiten de Randstad opgegroeid
8. Ik heb nooit een spelcomputer gehad
9. Ik kijk op mijn telefoon voordat ik uit bed kom
10. Ik ben naar een hackathon geweest
11. Ik spreek thuis nog een andere taal dan Nederlands
12. Ik heb iets duurs kapotgemaakt door het uit elkaar te halen
13. Ik typ liever aantekeningen dan dat ik ze schrijf
14. Ik heb een heel college op dubbele snelheid gekeken
15. Ik heb een huisdier

Vermijd: geld, cijfers, gezondheid, geloof, gezinssituatie, verblijfsstatus.

Splitst alles één-tegen-de-rest? Reik categorieën aan: vervoer, eten, slaap, techniek, jeugd, waar je gewoond hebt.

---

## Turfkaartje

Twee per A4. Streep ongebruikte nummers door.

```
NAAM (optioneel, houd je zelf)  ______________________

Kruis aan als je bent opgestaan.

  1 [ ]    2 [ ]    3 [ ]    4 [ ]    5 [ ]    6 [ ]
  7 [ ]    8 [ ]    9 [ ]   10 [ ]   11 [ ]   12 [ ]
 13 [ ]   14 [ ]   15 [ ]   16 [ ]   17 [ ]   18 [ ]
 19 [ ]   20 [ ]   21 [ ]   22 [ ]   23 [ ]   24 [ ]

Overeenkomsten met mijn buur: ____ van de ____
```