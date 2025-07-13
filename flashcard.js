const flashcards = [
  { article: "die", word: "Schule", plural: "Schulen", meaning: "School" },
  { article: "die", word: "Blume", plural: "Blumen", meaning: "Flower" },
  { article: "der", word: "Tisch", plural: "Tische", meaning: "Table" },
  { article: "der", word: "Stuhl", plural: "Stühle", meaning: "Chair" },
  { article: "die", word: "Katze", plural: "Katzen", meaning: "Cat" },
  { article: "der", word: "Hund", plural: "Hunde", meaning: "Dog" },
  { article: "das", word: "Auto", plural: "Autos", meaning: "Car" },
  { article: "der", word: "Baum", plural: "Bäume", meaning: "Tree" },
  { article: "die", word: "Uhr", plural: "Uhren", meaning: "Clock" },
  { article: "das", word: "Fenster", plural: "Fenster", meaning: "Window" },
  { article: "die", word: "Tür", plural: "Türen", meaning: "Door" },
  { article: "der", word: "Computer", plural: "Computer", meaning: "Computer" },
  { article: "die", word: "Straße", plural: "Straßen", meaning: "Street" },
  { article: "das", word: "Kind", plural: "Kinder", meaning: "Child" },
  { article: "die", word: "Frau", plural: "Frauen", meaning: "Woman" },
  { article: "der", word: "Mann", plural: "Männer", meaning: "Man" },
  { article: "das", word: "Bett", plural: "Betten", meaning: "Bed" },
  { article: "die", word: "Lampe", plural: "Lampen", meaning: "Lamp" },
  { article: "das", word: "Bild", plural: "Bilder", meaning: "Picture" },
  { article: "der", word: "Teller", plural: "Teller", meaning: "Plate" },
  { article: "die", word: "Gabel", plural: "Gabeln", meaning: "Fork" },
  { article: "das", word: "Messer", plural: "Messer", meaning: "Knife" },
  { article: "der", word: "Löffel", plural: "Löffel", meaning: "Spoon" },
  { article: "die", word: "Tasse", plural: "Tassen", meaning: "Cup" },
  { article: "das", word: "Glas", plural: "Gläser", meaning: "Glass" },
  { article: "der", word: "Stift", plural: "Stifte", meaning: "Pen" },
  { article: "der", word: "Bleistift", plural: "Bleistifte", meaning: "Pencil" },
  { article: "das", word: "Heft", plural: "Hefte", meaning: "Notebook" },
  { article: "das", word: "Papier", plural: "Papiere", meaning: "Paper" },
  { article: "die", word: "Tafel", plural: "Tafeln", meaning: "Blackboard" },
  { article: "der", word: "Lehrer", plural: "Lehrer", meaning: "Teacher (male)" },
  { article: "die", word: "Lehrerin", plural: "Lehrerinnen", meaning: "Teacher (female)" },
  { article: "der", word: "Schüler", plural: "Schüler", meaning: "Student (male)" },
  { article: "die", word: "Schülerin", plural: "Schülerinnen", meaning: "Student (female)" },
  { article: "die", word: "Familie", plural: "Familien", meaning: "Family" },
  { article: "der", word: "Vater", plural: "Väter", meaning: "Father" },
  { article: "die", word: "Mutter", plural: "Mütter", meaning: "Mother" },
  { article: "der", word: "Bruder", plural: "Brüder", meaning: "Brother" },
  { article: "die", word: "Schwester", plural: "Schwestern", meaning: "Sister" },
  { article: "der", word: "Onkel", plural: "Onkel", meaning: "Uncle" },
  { article: "die", word: "Tante", plural: "Tanten", meaning: "Aunt" },
  { article: "der", word: "Opa", plural: "Opas", meaning: "Grandpa" },
  { article: "die", word: "Oma", plural: "Omas", meaning: "Grandma" },
  { article: "das", word: "Spiel", plural: "Spiele", meaning: "Game" },
  { article: "die", word: "Frage", plural: "Fragen", meaning: "Question" },
  { article: "die", word: "Antwort", plural: "Antworten", meaning: "Answer" },
  { article: "der", word: "Freund", plural: "Freunde", meaning: "Friend (male)" },
  { article: "die", word: "Freundin", plural: "Freundinnen", meaning: "Friend (female)" },
  { article: "das", word: "Wasser", plural: "Wässer", meaning: "Water" },
  { article: "das", word: "Brot", plural: "Brote", meaning: "Bread" },
  { article: "die", word: "Milch", plural: "Milch", meaning: "Milk" },
  { article: "der", word: "Apfel", plural: "Äpfel", meaning: "Apple" },
  { article: "die", word: "Banane", plural: "Bananen", meaning: "Banana" },
  { article: "das", word: "Ei", plural: "Eier", meaning: "Egg" },
  { article: "der", word: "Käse", plural: "Käse", meaning: "Cheese" },
  { article: "das", word: "Fleisch", plural: "Fleisch", meaning: "Meat" },
  { article: "die", word: "Kartoffel", plural: "Kartoffeln", meaning: "Potato" },
  { article: "die", word: "Tomate", plural: "Tomaten", meaning: "Tomato" },
  { article: "die", word: "Zwiebel", plural: "Zwiebeln", meaning: "Onion" },
  { article: "der", word: "Salat", plural: "Salate", meaning: "Salad" },
  { article: "das", word: "Obst", plural: "Obst", meaning: "Fruit" },
  { article: "die", word: "Suppe", plural: "Suppen", meaning: "Soup" },
  { article: "der", word: "Kaffee", plural: "Kaffees", meaning: "Coffee" },
  { article: "der", word: "Tee", plural: "Tees", meaning: "Tea" },
  { article: "das", word: "Bier", plural: "Biere", meaning: "Beer" },
  { article: "der", word: "Saft", plural: "Säfte", meaning: "Juice" },
  { article: "die", word: "Freizeit", plural: "Freizeit", meaning: "Free time" },
  { article: "die", word: "Arbeit", plural: "Arbeiten", meaning: "Work" },
  { article: "der", word: "Tag", plural: "Tage", meaning: "Day" },
  { article: "die", word: "Woche", plural: "Wochen", meaning: "Week" },
  { article: "der", word: "Monat", plural: "Monate", meaning: "Month" },
  { article: "das", word: "Jahr", plural: "Jahre", meaning: "Year" },
  { article: "der", word: "Frühling", plural: "Frühlinge", meaning: "Spring" },
  { article: "der", word: "Sommer", plural: "Sommer", meaning: "Summer" },
  { article: "der", word: "Herbst", plural: "Herbste", meaning: "Autumn" },
  { article: "der", word: "Winter", plural: "Winter", meaning: "Winter" },
  { article: "das", word: "Wetter", plural: "Wetter", meaning: "Weather" },
  { article: "die", word: "Regen", plural: "Regen", meaning: "Rain" },
  { article: "der", word: "Schnee", plural: "Schnee", meaning: "Snow" },
  { article: "der", word: "Wind", plural: "Winde", meaning: "Wind" },
  { article: "die", word: "Sonne", plural: "Sonnen", meaning: "Sun" },
  { article: "der", word: "Mond", plural: "Monde", meaning: "Moon" },
  { article: "die", word: "Sterne", plural: "Sterne", meaning: "Stars" },
  { article: "das", word: "Meer", plural: "Meere", meaning: "Sea" },
  { article: "der", word: "Fluss", plural: "Flüsse", meaning: "River" },
  { article: "der", word: "See", plural: "Seen", meaning: "Lake" },
  { article: "die", word: "Insel", plural: "Inseln", meaning: "Island" },
  { article: "der", word: "Berg", plural: "Berge", meaning: "Mountain" },
  { article: "das", word: "Tal", plural: "Täler", meaning: "Valley" },
  { article: "der", word: "Wald", plural: "Wälder", meaning: "Forest" },
  { article: "das", word: "Tier", plural: "Tiere", meaning: "Animal" },
  { article: "der", word: "Vogel", plural: "Vögel", meaning: "Bird" },
  { article: "die", word: "Fisch", plural: "Fische", meaning: "Fish" },
  { article: "der", word: "Schrank", plural: "Schränke", meaning: "Wardrobe" },
  { article: "das", word: "Telefon", plural: "Telefone", meaning: "Telephone" },
  { article: "der", word: "Kühlschrank", plural: "Kühlschränke", meaning: "Refrigerator" },
  { article: "die", word: "Wand", plural: "Wände", meaning: "Wall" },
  { article: "die", word: "Tasche", plural: "Taschen", meaning: "Bag" },
  { article: "der", word: "Schlüssel", plural: "Schlüssel", meaning: "Key" },
  { article: "der", word: "Bus", plural: "Busse", meaning: "Bus" },
  { article: "der", word: "Zug", plural: "Züge", meaning: "Train" },
  { article: "das", word: "Fahrrad", plural: "Fahrräder", meaning: "Bicycle" },
  { article: "der", word: "Flughafen", plural: "Flughäfen", meaning: "Airport" },
  { article: "die", word: "Stadt", plural: "Städte", meaning: "City" },
  { article: "das", word: "Dorf", plural: "Dörfer", meaning: "Village" },
  { article: "der", word: "Park", plural: "Parks", meaning: "Park" },
  { article: "die", word: "Brücke", plural: "Brücken", meaning: "Bridge" },
  { article: "das", word: "Hotel", plural: "Hotels", meaning: "Hotel" },
  { article: "die", word: "Bank", plural: "Banken", meaning: "Bank" },
  { article: "das", word: "Kino", plural: "Kinos", meaning: "Cinema" },
  { article: "die", word: "Bibliothek", plural: "Bibliotheken", meaning: "Library" },
  { article: "das", word: "Museum", plural: "Museen", meaning: "Museum" },
  { article: "der", word: "Markt", plural: "Märkte", meaning: "Market" },
  { article: "die", word: "Kirche", plural: "Kirchen", meaning: "Church" },
  { article: "das", word: "Schloss", plural: "Schlösser", meaning: "Castle" },
  { article: "der", word: "Turm", plural: "Türme", meaning: "Tower" },
  { article: "die", word: "Wiese", plural: "Wiesen", meaning: "Meadow" },
  { article: "der", word: "Himmel", plural: "Himmel", meaning: "Sky" },
  { article: "die", word: "Erde", plural: "Erden", meaning: "Earth" },
  { article: "das", word: "Feuer", plural: "Feuer", meaning: "Fire" },
  { article: "das", word: "Licht", plural: "Lichter", meaning: "Light" },
  { article: "der", word: "Stein", plural: "Steine", meaning: "Stone" },
  { article: "die", word: "Wolke", plural: "Wolken", meaning: "Cloud" },
  { article: "der", word: "Stern", plural: "Sterne", meaning: "Star" },
  { article: "die", word: "Luft", plural: "Lüfte", meaning: "Air" },
  { article: "das", word: "Gemüse", plural: "Gemüse", meaning: "Vegetables" },
  { article: "die", word: "Orange", plural: "Orangen", meaning: "Orange" },
  { article: "das", word: "Eis", plural: "Eise", meaning: "Ice cream" },
  { article: "der", word: "Kuchen", plural: "Kuchen", meaning: "Cake" },
  { article: "die", word: "Torte", plural: "Torten", meaning: "Tart" },
  { article: "das", word: "Wurst", plural: "Würste", meaning: "Sausage" },
  { article: "die", word: "Butter", plural: "Butter", meaning: "Butter" },
  { article: "der", word: "Zucker", plural: "Zucker", meaning: "Sugar" },
  { article: "das", word: "Salz", plural: "Salze", meaning: "Salt" },
  { article: "das", word: "Pfeffer", plural: "Pfeffer", meaning: "Pepper" },
  { article: "die", word: "Flasche", plural: "Flaschen", meaning: "Bottle" },
  { article: "der", word: "Wein", plural: "Weine", meaning: "Wine" },
  { article: "das", word: "Frühstück", plural: "Frühstücke", meaning: "Breakfast" },
  { article: "das", word: "Mittagessen", plural: "Mittagessen", meaning: "Lunch" },
  { article: "das", word: "Abendessen", plural: "Abendessen", meaning: "Dinner" },
  { article: "die", word: "Decke", plural: "Decken", meaning: "Blanket, ceiling" },
  { article: "der", word: "Boden", plural: "Böden", meaning: "Floor" },
  { article: "das", word: "Haus", plural: "Häuser", meaning: "House" },
  { article: "die", word: "Wohnung", plural: "Wohnungen", meaning: "Apartment" },
  { article: "der", word: "Garten", plural: "Gärten", meaning: "Garden" },
  { article: "das", word: "Flugzeug", plural: "Flugzeuge", meaning: "Airplane" },
  { article: "das", word: "Taxi", plural: "Taxis", meaning: "Taxi" },
  { article: "der", word: "Bahnhof", plural: "Bahnhöfe", meaning: "Train station" },
  { article: "die", word: "Haltestelle", plural: "Haltestellen", meaning: "Bus stop" },
  { article: "das", word: "Restaurant", plural: "Restaurants", meaning: "Restaurant" },
  { article: "das", word: "Cafe", plural: "Cafes", meaning: "Cafe" },
  { article: "die", word: "Küche", plural: "Küchen", meaning: "Kitchen" },
  { article: "das", word: "Bad", plural: "Bäder", meaning: "Bathroom" },
  { article: "das", word: "Zimmer", plural: "Zimmer", meaning: "Room" },
  { article: "die", word: "Wohnzimmer", plural: "Wohnzimmer", meaning: "Living room" },
  { article: "das", word: "Kinderzimmer", plural: "Kinderzimmer", meaning: "Children’s room" },
  { article: "die", word: "Treppe", plural: "Treppen", meaning: "Stairs" },
  { article: "der", word: "Aufzug", plural: "Aufzüge", meaning: "Elevator" },
  { article: "das", word: "Fensterbrett", plural: "Fensterbretter", meaning: "Windowsill" },
  { article: "das", word: "Buch", plural: "Bücher", meaning: "Book" },
  { article: "das", word: "Handy", plural: "Handys", meaning: "Mobile phone" },
  { article: "der", word: "Bildschirm", plural: "Bildschirme", meaning: "Screen" },
  { article: "die", word: "Tastatur", plural: "Tastaturen", meaning: "Keyboard" },
  { article: "die", word: "Maus", plural: "Mäuse", meaning: "Mouse" },
  { article: "der", word: "Drucker", plural: "Drucker", meaning: "Printer" },
  { article: "die", word: "Zeitung", plural: "Zeitungen", meaning: "Newspaper" },
  { article: "das", word: "Magazin", plural: "Magazine", meaning: "Magazine" },
  { article: "die", word: "Mikrowelle", plural: "Mikrowellen", meaning: "Microwave" },
  { article: "die", word: "Spüle", plural: "Spülen", meaning: "Sink" },
  { article: "der", word: "Herd", plural: "Herde", meaning: "Stove" },
  { article: "die", word: "Pfanne", plural: "Pfannen", meaning: "Pan" },
  { article: "der", word: "Topf", plural: "Töpfe", meaning: "Pot" },
  { article: "die", word: "Speisekarte", plural: "Speisekarten", meaning: "Menu" },
  { article: "die", word: "Rechnung", plural: "Rechnungen", meaning: "Bill / Check" },
  { article: "der", word: "Kellner", plural: "Kellner", meaning: "Waiter" },
  { article: "die", word: "Kellnerin", plural: "Kellnerinnen", meaning: "Waitress" },
  { article: "der", word: "Motor", plural: "Motoren", meaning: "Motor" },
  { article: "das", word: "Rad", plural: "Räder", meaning: "Wheel" },
  { article: "das", word: "Benzin", plural: "Benzine", meaning: "Gasoline" },
];
// ========== 1. Global State ==========
let current = 0;
let revealed = false;
// ========== 2. DOM References ==========
const card = document.getElementById('card');
const cardFront = document.getElementById('card-front');
const cardBack = document.getElementById('card-back');
const searchInput = document.getElementById('search-input');

// ========== 3. Initialization ==========
window.addEventListener('message', (event) => {
  if (event.data?.type === 'theme-change' && (event.data.theme === 'dark' || event.data.theme === 'light')) {
    document.documentElement.setAttribute('data-theme', event.data.theme);
  }
});

// Set up default values for each flashcard
flashcards.forEach(card => {
  if (card.timesShown === undefined) card.timesShown = 0;
  if (card.isDifficult === undefined) card.isDifficult = false;
});

// Load progress from localStorage
function loadProgress() {
  const saved = JSON.parse(localStorage.getItem('flashcardProgress') || '{}');
  flashcards.forEach(card => {
    if (saved[card.word]) {
      card.timesShown = saved[card.word].timesShown || 0;
      card.isDifficult = saved[card.word].isDifficult || false;
    }
  });
}
loadProgress();

// Save progress to localStorage
function saveProgress() {
  const progress = {};
  flashcards.forEach(card => {
    progress[card.word] = {
      timesShown: card.timesShown,
      isDifficult: card.isDifficult,
    };
  });
  localStorage.setItem('flashcardProgress', JSON.stringify(progress));
}



// Shuffle flashcards 
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffle(flashcards);

// ========== 4. Search Feature ==========
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const query = searchInput.value.trim().toLowerCase();

    const index = flashcards.findIndex(word =>
      (word.article + ' ' + word.word).toLowerCase() === query ||
      word.word.toLowerCase() === query
    );

    // Clear and blur input
    searchInput.value = '';
    searchInput.blur();

    if (index !== -1) {
      const searchedCard = flashcards[index];
      
      // Remove it from deck
      flashcards.splice(index, 1);
      
      // Shuffle remaining
      shuffle(flashcards);
      
      // Put searched card at the front
      flashcards.unshift(searchedCard);

      // Reset to show the searched card
      current = 0;
      revealed = false;
      showFront();
    } else {
      const notFoundCard = {
        article: '❌',
        word: 'Not Found',
        plural: '',
        meaning: 'Please contact Anurodh',
        isNotFound: true,
      };
        // Shuffle real cards and prepend this one
      shuffle(flashcards);
      flashcards.unshift(notFoundCard);
      current = 0;
      revealed = true; // show already revealed
      showBack();
    }

    //card.focus(); // ensure keyboard/tap works again
  }
});

// ========== 5. Difficult Toggle Feature ==========
function updateDifficultButton() {
  const card = flashcards[current];
  const toggle = document.getElementById('difficult-toggle');
  if (toggle && card) {
    toggle.checked = card.isDifficult;
  }
}

document.getElementById('reset-icon').addEventListener('click', () => {
  // Clear all marked words
  flashcards.forEach(card => {
    card.isDifficult = false;
  });

  saveProgress();
  updateDifficultButton();

  // Animate the reset icon
  const icon = document.getElementById('reset-icon');
  icon.classList.add('rotate');

  // Remove the animation class after it's done
  setTimeout(() => {
    icon.classList.remove('rotate');
  }, 1000);
});



document.getElementById('difficult-toggle').addEventListener('change', () => {
  const word = flashcards[current];
  const toggle = document.getElementById('difficult-toggle');
  if (word && toggle) {
    word.isDifficult = toggle.checked;
    saveProgress();
  }
});

// ========== 6. Flashcard Display Logic ==========
function applyCardColor(article) {
  card.classList.remove('card-color-der', 'card-color-die', 'card-color-das');
  if (article === 'der') {
    card.classList.add('card-color-der');
  } else if (article === 'die') {
    card.classList.add('card-color-die');
  } else if (article === 'das') {
    card.classList.add('card-color-das');
  }
}


function showFront() {
  const word = flashcards[current];
  cardFront.textContent = `${word.article} ${word.word}`;
  card.setAttribute('aria-pressed', 'false');
  card.classList.remove('revealed');
  applyCardColor(word.article);
  updateDifficultButton();
}

function showBack() {
  const word = flashcards[current];
  let backText;

  if (word.isNotFound) {
    // Clean message without "Plural:" or "Meaning:"
    backText = `${word.article} ${word.word}\n${word.meaning}`;
  } else {
    // Normal flashcard formatting
    backText = `${word.article} ${word.word}`;
    backText = `${word.meaning}\n${word.article} ${word.word}`;

    if (word.plural) {
      backText += `\nPlural: ${word.plural}`;
    }
  }
  cardBack.textContent = backText.trim();
  card.setAttribute('aria-pressed', 'true');
  card.classList.add('revealed');
  applyCardColor(word.article);
  updateDifficultButton();
}

// === 1. Tap / Click / Keyboard Handling ===
function handleTap() {
  if (!revealed) {
    showBack();
    revealed = true;
  } else {
    
    let nextIndex;

    if (Math.random() < 0.3) { // ~30% chance show a difficult card
      nextIndex = flashcards.findIndex((c, i) => c.isDifficult && i !== current);
      if (nextIndex === -1) nextIndex = (current + 1) % flashcards.length;
    } else {
      nextIndex = (current + 1) % flashcards.length;
    }

    if (nextIndex <= current) {
      // Shuffle the deck again on new round start
      shuffle(flashcards);
      console.log('Deck reshuffled!');
    }

    current = nextIndex;
    revealed = false;
    showFront();
  }
}

// Mouse click on card
card.addEventListener('click', handleTap);
// Keyboard accessibility (Enter / Space)
card.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    handleTap();
  }
});

// Swipe support for mobile
let startX = null;
document.addEventListener("touchstart", function (e) {
  startX = e.touches[0].clientX;
});
document.addEventListener("touchend", function (e) {
  if (startX === null) return;
  const deltaX = e.changedTouches[0].clientX - startX;
  if (Math.abs(deltaX) > 50) {
    current = (current + 1) % flashcards.length;
    revealed = false;
    showFront();
  }
  startX = null;
});

// Show first card front on load
document.addEventListener('DOMContentLoaded', () => {
  showFront();
});

