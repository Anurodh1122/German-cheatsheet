// ========== 1. Global State ==========
let current = 0;
let revealed = false;
const allFlashcards = flashcardTopics.flatMap(group => group.cards);
let flashcards = [...allFlashcards]; // start with full deck by default


// ========== 2. DOM References ==========
const card = document.getElementById('card');
const cardFront = document.getElementById('card-front');
const cardBack = document.getElementById('card-back');
const searchInput = document.getElementById('search-input');

const filterToggleBtn = document.getElementById('filter-toggle');
const topicFilterDiv = document.getElementById('topic-filter');
const clearAllBtn = document.getElementById('clear-all-btn');
const topicCheckboxes = topicFilterDiv.querySelectorAll('.checkbox-list input[type="checkbox"]');

function updateFlashcardsByTopic() {
  const selectedTopics = Array.from(document.querySelectorAll('#topic-filter input:checked'))
    .map(cb => cb.value);

  if (selectedTopics.length === 0) {
    flashcards = [...allFlashcards]; // no filter, use all
  } else {
    // Filter cards whose topic matches any selected topic
    flashcards = allFlashcards.filter(card => {
      // find the topic group containing this card and check if topic matches
      return selectedTopics.some(topic =>
        flashcardTopics.find(group => group.topic === topic).cards.includes(card)
      );
    });
  }

  shuffle(flashcards);
  current = 0;
  revealed = false;
  showFront();
  updateDifficultButton();
}

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
  allFlashcards.forEach(card => {
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
  allFlashcards.forEach(card => {
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



document.getElementById('difficult-toggle').addEventListener('change', (event) => {
  const currentCard = flashcards[current];
  if (!currentCard) return;

  currentCard.isDifficult = event.target.checked;

  // Sync with allFlashcards
  const globalCard = allFlashcards.find(c => c.word === currentCard.word);
  if (globalCard) {
    globalCard.isDifficult = currentCard.isDifficult;
  }

  saveProgress();
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
  // Your existing init code, e.g.:
  flashcards = [...allFlashcards];
  loadProgress();
  shuffle(flashcards);
  current = 0;
  revealed = false;
  showFront();

  // NEW: Filter toggle button click
  filterToggleBtn.addEventListener('click', () => {
    const isCollapsed = topicFilterDiv.classList.toggle('collapsed');
    filterToggleBtn.setAttribute('aria-expanded', !isCollapsed);
    filterToggleBtn.textContent = (isCollapsed ? '🔽' : '🔼') + ' Filter by Topic';
  });

  // NEW: close filter if clicking outside filter area or button
  document.addEventListener('click', (event) => {
    const isClickInsideFilter = topicFilterDiv.contains(event.target);
    const isClickOnButton = filterToggleBtn.contains(event.target);

    if (!isClickInsideFilter && !isClickOnButton && !topicFilterDiv.classList.contains('collapsed')) {
      // Close the dropdown
      topicFilterDiv.classList.add('collapsed');
      filterToggleBtn.setAttribute('aria-expanded', false);
      filterToggleBtn.textContent = '🔽 Filter by Topic';
    }
  });

  // Clear All button click: uncheck all and update
  clearAllBtn.addEventListener('click', () => {
    topicCheckboxes.forEach(cb => cb.checked = false);
    updateFlashcardsByTopic();
  });

  // NEW: Individual topic checkbox changes
  topicCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      updateFlashcardsByTopic();
    });
  });


  // Initialize selectAll checkbox state on load
  const allChecked = Array.from(topicCheckboxes).every(cb => cb.checked);
  selectAllCheckbox.checked = allChecked;
});


