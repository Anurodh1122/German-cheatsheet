const flashcardTopics = [
  {
    topic: "🛋️ Möbel",
    cards: [
      { article: "das", word: "Sofa", plural: "Sofas", meaning: "Sofa" },
      { article: "der", word: "Schrank", plural: "Schränke", meaning: "Wardrobe" },
      { article: "der", word: "Tisch", plural: "Tische", meaning: "Table" },
      { article: "der", word: "Stuhl", plural: "Stühle", meaning: "Chair" },
      { article: "die", word: "Lampe", plural: "Lampen", meaning: "Lamp" }
    ]
  },
  {
    topic: "👚 Kleidung",
    cards: [
      { article: "die", word: "Jacke", plural: "Jacken", meaning: "Jacket" },
      { article: "das", word: "Hemd", plural: "Hemden", meaning: "Shirt" },
      { article: "die", word: "Hose", plural: "Hosen", meaning: "Pants" },
      { article: "die", word: "Schuhe", plural: "Schuhe", meaning: "Shoes" },
      { article: "die", word: "Mütze", plural: "Mützen", meaning: "Cap" }
    ]
  },
  {
    topic: "⚽ Freizeitaktivitäten",
    cards: [
      { article: "das", word: "Spiel", plural: "Spiele", meaning: "Game" },
      { article: "der", word: "Sport", plural: "Sportarten", meaning: "Sport" },
      { article: "das", word: "Schwimmen", plural: "-", meaning: "Swimming" },
      { article: "das", word: "Radfahren", plural: "-", meaning: "Cycling" },
      { article: "der", word: "Tanz", plural: "Tänze", meaning: "Dance" }
    ]
  },
  {
    topic: "🏢 Büro",
    cards: [
      { article: "der", word: "Computer", plural: "Computer", meaning: "Computer" },
      { article: "der", word: "Schreibtisch", plural: "Schreibtische", meaning: "Desk" },
      { article: "der", word: "Stift", plural: "Stifte", meaning: "Pen" },
      { article: "das", word: "Papier", plural: "Papiere", meaning: "Paper" },
      { article: "das", word: "Telefon", plural: "Telefone", meaning: "Telephone" }
    ]
  },
  {
    topic: "💻 Computer",
    cards: [
      { article: "der", word: "Bildschirm", plural: "Bildschirme", meaning: "Monitor" },
      { article: "die", word: "Tastatur", plural: "Tastaturen", meaning: "Keyboard" },
      { article: "die", word: "Maus", plural: "Mäuse", meaning: "Mouse" },
      { article: "das", word: "Programm", plural: "Programme", meaning: "Program" },
      { article: "das", word: "Internet", plural: "-", meaning: "Internet" }
    ]
  },
  {
    topic: "🚗 Verkehrsmittel",
    cards: [
      { article: "das", word: "Fahrrad", plural: "Fahrräder", meaning: "Bicycle" },
      { article: "der", word: "Bus", plural: "Busse", meaning: "Bus" },
      { article: "das", word: "Auto", plural: "Autos", meaning: "Car" },
      { article: "die", word: "Straße", plural: "Straßen", meaning: "Street" },
      { article: "der", word: "Zug", plural: "Züge", meaning: "Train" }
    ]
  },
  {
    topic: "✈️ Reisen",
    cards: [
      { article: "das", word: "Hotel", plural: "Hotels", meaning: "Hotel" },
      { article: "der", word: "Flughafen", plural: "Flughäfen", meaning: "Airport" },
      { article: "das", word: "Reiseziel", plural: "Reiseziele", meaning: "Destination" },
      { article: "die", word: "Karte", plural: "Karten", meaning: "Ticket/map" },
      { article: "der", word: "Koffer", plural: "Koffer", meaning: "Suitcase" }
    ]
  },
  {
    topic: "🍏 Lebensmittel und Speisen",
    cards: [
      { article: "das", word: "Brot", plural: "Brote", meaning: "Bread" },
      { article: "die", word: "Milch", plural: "-", meaning: "Milk" },
      { article: "das", word: "Ei", plural: "Eier", meaning: "Egg" },
      { article: "das", word: "Wasser", plural: "-", meaning: "Water" },
      { article: "die", word: "Apfelsine", plural: "Apfelsinen", meaning: "Orange (fruit)" }
    ]
  },
  {
    topic: "🦵 Körperteile",
    cards: [
      { article: "der", word: "Arm", plural: "Arme", meaning: "Arm" },
      { article: "das", word: "Bein", plural: "Beine", meaning: "Leg" },
      { article: "der", word: "Kopf", plural: "Köpfe", meaning: "Head" },
      { article: "das", word: "Auge", plural: "Augen", meaning: "Eye" },
      { article: "die", word: "Hand", plural: "Hände", meaning: "Hand" }
    ]
  },
  {
    topic: "👩‍🦰 Aussehen",
    cards: [
      { article: "die", word: "Haarfarbe", plural: "-", meaning: "Hair color" },
      { article: "das", word: "Gesicht", plural: "Gesichter", meaning: "Face" },
      { article: "die", word: "Größe", plural: "-", meaning: "Height" },
      { article: "die", word: "Augenfarbe", plural: "-", meaning: "Eye color" },
      { article: "der", word: "Bart", plural: "Bärte", meaning: "Beard" }
    ]
  },
  {
    topic: "👤 Charakter",
    cards: [
      { article: "der", word: "Freund", plural: "Freunde", meaning: "Friend" },
      { article: "die", word: "Freundlichkeit", plural: "-", meaning: "Kindness" },
      { article: "der", word: "Mut", plural: "-", meaning: "Courage" },
      { article: "die", word: "Geduld", plural: "-", meaning: "Patience" },
      { article: "der", word: "Humor", plural: "-", meaning: "Humor" }
    ]
  },
  {
    topic: "🏠 Aktivitäten im Haushalt",
    cards: [
      { article: "das", word: "Putzen", plural: "-", meaning: "Cleaning" },
      { article: "das", word: "Kochen", plural: "-", meaning: "Cooking" },
      { article: "das", word: "Waschen", plural: "-", meaning: "Washing" },
      { article: "der", word: "Staubsauger", plural: "Staubsauger", meaning: "Vacuum cleaner" },
      { article: "die", word: "Mülltonne", plural: "Mülltonnen", meaning: "Trash bin" }
    ]
  },
  {
    topic: "🚦 Regeln in Verkehr und Umwelt",
    cards: [
      { article: "das", word: "Tempo", plural: "-", meaning: "Speed" },
      { article: "die", word: "Ampel", plural: "Ampeln", meaning: "Traffic light" },
      { article: "das", word: "Verbot", plural: "Verbote", meaning: "Prohibition" },
      { article: "die", word: "Umwelt", plural: "-", meaning: "Environment" },
      { article: "die", word: "Vorschrift", plural: "Vorschriften", meaning: "Regulation" }
    ]
  },
  {
    topic: "🧭 Himmelsrichtungen",
    cards: [
      { article: "der", word: "Norden", plural: "-", meaning: "North" },
      { article: "der", word: "Süden", plural: "-", meaning: "South" },
      { article: "der", word: "Osten", plural: "-", meaning: "East" },
      { article: "der", word: "Westen", plural: "-", meaning: "West" },
      { article: "die", word: "Richtung", plural: "Richtungen", meaning: "Direction" }
    ]
  },
  {
    topic: "🎉 Feste",
    cards: [
      { article: "das", word: "Weihnachten", plural: "-", meaning: "Christmas" },
      { article: "das", word: "Geburtstag", plural: "Geburtstage", meaning: "Birthday" },
      { article: "das", word: "Fest", plural: "Feste", meaning: "Festival" },
      { article: "das", word: "Ostern", plural: "-", meaning: "Easter" },
      { article: "das", word: "Silvester", plural: "-", meaning: "New Year's Eve" }
    ]
  }
];

module.exports = flashcardTopics;
