const flashcardTopics = [
  {
    topic: "🛋️ Möbel",
    cards: [
      { article: "das", word: "Sofa", plural: "Sofas", meaning: "Sofa" },
      { article: "der", word: "Schrank", plural: "Schränke", meaning: "Wardrobe" },
      { article: "der", word: "Tisch", plural: "Tische", meaning: "Table" },
      { article: "der", word: "Stuhl", plural: "Stühle", meaning: "Chair" },
      { article: "die", word: "Lampe", plural: "Lampen", meaning: "Lamp" },
      { article: "das", word: "Bett", plural: "Betten", meaning: "Bed" },
      { article: "das", word: "Regal", plural: "Regale", meaning: "Shelf" },
      { article: "der", word: "Sessel", plural: "Sessel", meaning: "Armchair" },
      { article: "die", word: "Kommode", plural: "Kommoden", meaning: "Dresser" },
      { article: "die", word: "Vitrine", plural: "Vitrinen", meaning: "Display Cabinet" },
      { article: "der", word: "Schreibtisch", plural: "Schreibtische", meaning: "Desk" },
      { article: "das", word: "Nachttisch", plural: "Nachttische", meaning: "Nightstand" },
      { article: "der", word: "Hocker", plural: "Hocker", meaning: "Stool" },
      { article: "die", word: "Couch", plural: "Couches", meaning: "Couch" },
      { article: "die", word: "Bank", plural: "Bänke", meaning: "Bench" }
    ]
  },
  {
    topic: "👚 Kleidung",
    cards: [
      { article: "die", word: "Jacke", plural: "Jacken", meaning: "Jacket" },
      { article: "das", word: "Hemd", plural: "Hemden", meaning: "Shirt" },
      { article: "die", word: "Hose", plural: "Hosen", meaning: "Pants" },
      { article: "die", word: "Schuhe", plural: "Schuhe", meaning: "Shoes" },
      { article: "die", word: "Mütze", plural: "Mützen", meaning: "Cap" },
      { article: "das", word: "T-Shirt", plural: "T-Shirts", meaning: "T-shirt" },
      { article: "der", word: "Mantel", plural: "Mäntel", meaning: "Coat" },
      { article: "die", word: "Bluse", plural: "Blusen", meaning: "Blouse" },
      { article: "der", word: "Pullover", plural: "Pullover", meaning: "Sweater" },
      { article: "die", word: "Krawatte", plural: "Krawatten", meaning: "Tie" },
      { article: "der", word: "Anzug", plural: "Anzüge", meaning: "Suit" },
      { article: "das", word: "Kleid", plural: "Kleider", meaning: "Dress" },
      { article: "der", word: "Rock", plural: "Röcke", meaning: "Skirt" },
      { article: "die", word: "Socken", plural: "Socken", meaning: "Socks" },
      { article: "die", word: "Handschuhe", plural: "Handschuhe", meaning: "Gloves" }
    ]
  },
  {
    topic: "⚽ Freizeitaktivitäten",
    cards: [
      { article: "das", word: "Spiel", plural: "Spiele", meaning: "Game" },
      { article: "der", word: "Sport", plural: "Sportarten", meaning: "Sport" },
      { article: "das", word: "Schwimmen", plural: "-", meaning: "Swimming" },
      { article: "das", word: "Radfahren", plural: "-", meaning: "Cycling" },
      { article: "der", word: "Tanz", plural: "Tänze", meaning: "Dance" },
      { article: "das", word: "Wandern", plural: "-", meaning: "Hiking" },
      { article: "das", word: "Lesen", plural: "-", meaning: "Reading" },
      { article: "das", word: "Zeichnen", plural: "-", meaning: "Drawing" },
      { article: "das", word: "Reisen", plural: "-", meaning: "Traveling" },
      { article: "das", word: "Musikhören", plural: "-", meaning: "Listening to Music" },
      { article: "das", word: "Fotografieren", plural: "-", meaning: "Photography" },
      { article: "das", word: "Kochen", plural: "-", meaning: "Cooking" },
      { article: "das", word: "Joggen", plural: "-", meaning: "Jogging" },
      { article: "das", word: "Spazierengehen", plural: "-", meaning: "Walking" },
      { article: "das", word: "Gärtnern", plural: "-", meaning: "Gardening" }
    ]
  },
  {
    topic: "🏢 Büro",
    cards: [
      { article: "der", word: "Computer", plural: "Computer", meaning: "Computer" },
      { article: "der", word: "Schreibtisch", plural: "Schreibtische", meaning: "Desk" },
      { article: "der", word: "Stift", plural: "Stifte", meaning: "Pen" },
      { article: "das", word: "Papier", plural: "Papiere", meaning: "Paper" },
      { article: "das", word: "Telefon", plural: "Telefone", meaning: "Telephone" },
      { article: "der", word: "Drucker", plural: "Drucker", meaning: "Printer" },
      { article: "die", word: "Tastatur", plural: "Tastaturen", meaning: "Keyboard" },
      { article: "die", word: "Maus", plural: "Mäuse", meaning: "Mouse" },
      { article: "die", word: "Notiz", plural: "Notizen", meaning: "Note" },
      { article: "der", word: "Ordner", plural: "Ordner", meaning: "Folder" },
      { article: "das", word: "Heft", plural: "Hefte", meaning: "Notebook" },
      { article: "die", word: "Büroklammer", plural: "Büroklammern", meaning: "Paperclip" },
      { article: "die", word: "Schere", plural: "Scheren", meaning: "Scissors" },
      { article: "der", word: "Locher", plural: "Locher", meaning: "Hole Punch" },
      { article: "die", word: "Lampe", plural: "Lampen", meaning: "Lamp" }
    ]
  },
  {
    topic: "💻 Computer",
    cards: [
      { article: "der", word: "Bildschirm", plural: "Bildschirme", meaning: "Monitor" },
      { article: "die", word: "Tastatur", plural: "Tastaturen", meaning: "Keyboard" },
      { article: "die", word: "Maus", plural: "Mäuse", meaning: "Mouse" },
      { article: "das", word: "Programm", plural: "Programme", meaning: "Program" },
      { article: "das", word: "Internet", plural: "-", meaning: "Internet" },
      { article: "der", word: "Laptop", plural: "Laptops", meaning: "Laptop" },
      { article: "das", word: "Kabel", plural: "Kabel", meaning: "Cable" },
      { article: "die", word: "Datei", plural: "Dateien", meaning: "File" },
      { article: "der", word: "Browser", plural: "Browser", meaning: "Browser" },
      { article: "das", word: "Passwort", plural: "Passwörter", meaning: "Password" },
      { article: "der", word: "Server", plural: "Server", meaning: "Server" },
      { article: "die", word: "Software", plural: "Softwares", meaning: "Software" },
      { article: "die", word: "Festplatte", plural: "Festplatten", meaning: "Hard Drive" },
      { article: "das", word: "Tablet", plural: "Tablets", meaning: "Tablet" },
      { article: "das", word: "Handy", plural: "Handys", meaning: "Mobile Phone" }
    ]
  },
  {
    topic: "🚗 Verkehrsmittel",
    cards: [
      { article: "das", word: "Fahrrad", plural: "Fahrräder", meaning: "Bicycle" },
      { article: "der", word: "Bus", plural: "Busse", meaning: "Bus" },
      { article: "das", word: "Auto", plural: "Autos", meaning: "Car" },
      { article: "die", word: "Straße", plural: "Straßen", meaning: "Street" },
      { article: "der", word: "Zug", plural: "Züge", meaning: "Train" },
      { article: "die", word: "U-Bahn", plural: "U-Bahnen", meaning: "Subway" },
      { article: "die", word: "S-Bahn", plural: "S-Bahnen", meaning: "Suburban Train" },
      { article: "das", word: "Motorrad", plural: "Motorräder", meaning: "Motorcycle" },
      { article: "das", word: "Taxi", plural: "Taxis", meaning: "Taxi" },
      { article: "das", word: "Flugzeug", plural: "Flugzeuge", meaning: "Airplane" },
      { article: "das", word: "Schiff", plural: "Schiffe", meaning: "Ship" },
      { article: "die", word: "Haltestelle", plural: "Haltestellen", meaning: "Bus Stop" },
      { article: "der", word: "Fahrer", plural: "Fahrer", meaning: "Driver" }
    ]
  },
  {
    topic: "✈️ Reisen",
    cards: [
      { article: "das", word: "Hotel", plural: "Hotels", meaning: "Hotel" },
      { article: "der", word: "Flughafen", plural: "Flughäfen", meaning: "Airport" },
      { article: "das", word: "Reiseziel", plural: "Reiseziele", meaning: "Destination" },
      { article: "die", word: "Karte", plural: "Karten", meaning: "Ticket / Map / Card" },
      { article: "der", word: "Koffer", plural: "Koffer", meaning: "Suitcase" },
      { article: "das", word: "Reisebüro", plural: "Reisebüros", meaning: "Travel Agency" },
      { article: "der", word: "Pass", plural: "Pässe", meaning: "Passport" },
      { article: "die", word: "Buchung", plural: "Buchungen", meaning: "Booking" },
      { article: "der", word: "Flug", plural: "Flüge", meaning: "Flight" },
      { article: "das", word: "Gepäck", plural: "-", meaning: "Luggage" },
      { article: "die", word: "Abfahrt", plural: "Abfahrten", meaning: "Departure" },
      { article: "die", word: "Ankunft", plural: "Ankünfte", meaning: "Arrival" }
    ]
  },
  {
    topic: "🍏 Lebensmittel und Speisen",
    cards: [
      { article: "das", word: "Brot", plural: "Brote", meaning: "Bread" },
      { article: "die", word: "Milch", plural: "-", meaning: "Milk" },
      { article: "das", word: "Ei", plural: "Eier", meaning: "Egg" },
      { article: "das", word: "Wasser", plural: "-", meaning: "Water" },
      { article: "die", word: "Apfelsine", plural: "Apfelsinen", meaning: "Orange (fruit)" },
      { article: "der", word: "Käse", plural: "-", meaning: "Cheese" },
      { article: "das", word: "Fleisch", plural: "-", meaning: "Meat" },
      { article: "die", word: "Butter", plural: "-", meaning: "Butter" },
      { article: "das", word: "Gemüse", plural: "-", meaning: "Vegetables" },
      { article: "das", word: "Obst", plural: "-", meaning: "Fruit" },
      { article: "die", word: "Suppe", plural: "Suppen", meaning: "Soup" },
      { article: "der", word: "Salat", plural: "Salate", meaning: "Salad" },
      { article: "die", word: "Pizza", plural: "Pizzen", meaning: "Pizza" },
      { article: "das", word: "Wasser", plural: "-", meaning: "Water" },
      { article: "der", word: "Apfel", plural: "Äpfel", meaning: "Apple" }
    ]
  },
  {
    topic: "🦵 Körperteile",
    cards: [
      { article: "der", word: "Arm", plural: "Arme", meaning: "Arm" },
      { article: "das", word: "Bein", plural: "Beine", meaning: "Leg" },
      { article: "der", word: "Kopf", plural: "Köpfe", meaning: "Head" },
      { article: "das", word: "Auge", plural: "Augen", meaning: "Eye" },
      { article: "die", word: "Hand", plural: "Hände", meaning: "Hand" },
      { article: "der", word: "Fuß", plural: "Füße", meaning: "Foot" },
      { article: "die", word: "Nase", plural: "Nasen", meaning: "Nose" },
      { article: "der", word: "Mund", plural: "Münder", meaning: "Mouth" },
      { article: "das", word: "Ohr", plural: "Ohren", meaning: "Ear" },
      { article: "die", word: "Schulter", plural: "Schultern", meaning: "Shoulder" },
      { article: "die", word: "Zunge", plural: "Zungen", meaning: "Tongue" }
    ]
  },
  {
    topic: "👩‍🦰 Aussehen",
    cards: [
      { article: "die", word: "Haarfarbe", plural: "-", meaning: "Hair Color" },
      { article: "das", word: "Gesicht", plural: "Gesichter", meaning: "Face" },
      { article: "die", word: "Größe", plural: "-", meaning: "Height" },
      { article: "die", word: "Augenfarbe", plural: "-", meaning: "Eye Color" },
      { article: "der", word: "Bart", plural: "Bärte", meaning: "Beard" },
      { article: "die", word: "Haut", plural: "-", meaning: "Skin" },
      { article: "das", word: "Lächeln", plural: "-", meaning: "Smile" },
      { article: "die", word: "Nase", plural: "Nasen", meaning: "Nose" },
      { article: "die", word: "Ohren", plural: "-", meaning: "Ears" },
      { article: "die", word: "Farbe", plural: "Farben", meaning: "Color" }
    ]
  },
  {
    topic: "👤 Charakter",
    cards: [
      { article: "der", word: "Freund", plural: "Freunde", meaning: "Friend" },
      { article: "die", word: "Freundlichkeit", plural: "-", meaning: "Kindness" },
      { article: "der", word: "Mut", plural: "-", meaning: "Courage" },
      { article: "die", word: "Geduld", plural: "-", meaning: "Patience" },
      { article: "der", word: "Humor", plural: "-", meaning: "Humor" },
      { article: "die", word: "Ehrlichkeit", plural: "-", meaning: "Honesty" },
      { article: "der", word: "Egoismus", plural: "-", meaning: "Selfishness" },
      { article: "die", word: "Freude", plural: "-", meaning: "Joy" },
      { article: "die", word: "Liebe", plural: "-", meaning: "Love" },
      { article: "der", word: "Zorn", plural: "-", meaning: "Anger" }
    ]
  },
  {
    topic: "🏠 Aktivitäten im Haushalt",
    cards: [
      { article: "das", word: "Putzen", plural: "-", meaning: "Cleaning" },
      { article: "das", word: "Kochen", plural: "-", meaning: "Cooking" },
      { article: "das", word: "Waschen", plural: "-", meaning: "Washing" },
      { article: "der", word: "Staubsauger", plural: "Staubsauger", meaning: "Vacuum Cleaner" },
      { article: "die", word: "Mülltonne", plural: "Mülltonnen", meaning: "Trash Bin" },
      { article: "das", word: "Bügeln", plural: "-", meaning: "Ironing" },
      { article: "die", word: "Spülmaschine", plural: "Spülmaschinen", meaning: "Dishwasher" },
      { article: "der", word: "Mopp", plural: "Mopps", meaning: "Mop" },
      { article: "die", word: "Reinigung", plural: "-", meaning: "Cleaning" },
      { article: "das", word: "Geschirr", plural: "-", meaning: "Dishes" },
      { article: "der", word: "Eimer", plural: "Eimer", meaning: "Bucket" },
      { article: "die", word: "Besen", plural: "-", meaning: "Broom" },
      { article: "das", word: "Lappen", plural: "Lappen", meaning: "Cloth" },
      { article: "der", word: "Handschuh", plural: "Handschuhe", meaning: "Glove" },
      { article: "die", word: "Mülltüte", plural: "Mülltüten", meaning: "Garbage Bag" }
    ]
  },
  {
    topic: "🚦 Regeln in Verkehr und Umwelt",
    cards: [
      { article: "das", word: "Tempo", plural: "-", meaning: "Speed" },
      { article: "die", word: "Ampel", plural: "Ampeln", meaning: "Traffic Light" },
      { article: "das", word: "Verbot", plural: "Verbote", meaning: "Prohibition" },
      { article: "die", word: "Umwelt", plural: "-", meaning: "Environment" },
      { article: "die", word: "Vorschrift", plural: "Vorschriften", meaning: "Regulation" },
      { article: "die", word: "Straßenverkehr", plural: "-", meaning: "Road Traffic" },
      { article: "das", word: "Parkverbot", plural: "Parkverbote", meaning: "No Parking" },
      { article: "der", word: "Blitzer", plural: "Blitzer", meaning: "Speed Camera" },
      { article: "die", word: "Fahrbahn", plural: "Fahrbahnen", meaning: "Carriageway" },
      { article: "das", word: "Abgas", plural: "Abgase", meaning: "Exhaust Gas" },
      { article: "die", word: "Gurt", plural: "Gurte", meaning: "Seatbelt" },
      { article: "der", word: "Unfall", plural: "Unfälle", meaning: "Accident" },
      { article: "die", word: "Fahrradweg", plural: "Fahrradwege", meaning: "Bike Path" },
      { article: "das", word: "Kennzeichen", plural: "Kennzeichen", meaning: "License Plate" },
      { article: "der", word: "Führerschein", plural: "Führerscheine", meaning: "Driver's License" }
    ]
  },
  {
    topic: "🧭 Himmelsrichtungen",
    cards: [
      { article: "der", word: "Norden", plural: "-", meaning: "North" },
      { article: "der", word: "Süden", plural: "-", meaning: "South" },
      { article: "der", word: "Osten", plural: "-", meaning: "East" },
      { article: "der", word: "Westen", plural: "-", meaning: "West" },
      { article: "die", word: "Richtung", plural: "Richtungen", meaning: "Direction" },
      { article: "der", word: "Nordosten", plural: "-", meaning: "Northeast" },
      { article: "der", word: "Nordwesten", plural: "-", meaning: "Northwest" },
      { article: "der", word: "Südosten", plural: "-", meaning: "Southeast" },
      { article: "der", word: "Südwesten", plural: "-", meaning: "Southwest" },
      { article: "die", word: "Himmelsrichtung", plural: "Himmelsrichtungen", meaning: "Cardinal direction" },
      { article: "das", word: "Kompass", plural: "Kompasse", meaning: "Compass" },
      { article: "die", word: "Weltkarte", plural: "Weltkarten", meaning: "World map" }
    ]
  },
  {
    topic: "🎉 Feste",
    cards: [
      { article: "das", word: "Weihnachten", plural: "-", meaning: "Christmas" },
      { article: "das", word: "Geburtstag", plural: "Geburtstage", meaning: "Birthday" },
      { article: "das", word: "Fest", plural: "Feste", meaning: "Festival" },
      { article: "das", word: "Ostern", plural: "-", meaning: "Easter" },
      { article: "das", word: "Silvester", plural: "-", meaning: "New Year's Eve" },
      { article: "das", word: "Neujahr", plural: "-", meaning: "New Year" },
      { article: "das", word: "Karneval", plural: "Karnevale", meaning: "Carnival" },
      { article: "das", word: "Halloween", plural: "-", meaning: "Halloween" },
      { article: "das", word: "Erntedankfest", plural: "-", meaning: "Thanksgiving" },
      { article: "das", word: "Valentinstag", plural: "-", meaning: "Valentine's Day" }
    ]
  }

];

module.exports = flashcardTopics;
