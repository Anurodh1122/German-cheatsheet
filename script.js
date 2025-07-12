document.addEventListener('DOMContentLoaded', () => {
  // ===== Navigation Cards =====
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const targetId = card.getAttribute('data-target');

      // Hide overview
      const overview = document.getElementById('section-overview');
      if (overview) overview.classList.add('hidden');

      // Hide all content sections
      document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('hidden');
      });

      // Show target section
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  // ===== Back Buttons =====
  document.querySelectorAll('.back-btn').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('hidden');
      });

      const overview = document.getElementById('section-overview');
      if (overview) overview.classList.remove('hidden');

      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // ===== Dark/Light Mode Toggle =====
  const themeToggle = document.getElementById('theme-toggle');
  const iframe = document.querySelector('#flashcard-section iframe');  // Select your iframe here

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (themeToggle) {
      themeToggle.textContent = theme === 'dark' ? '🌞 Hellmodus' : '🌙 Dunkelmodus';
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);

      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage({ type: 'theme-change', theme: newTheme }, '*');
      }
    });
  }

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }

  // Send current theme to iframe as soon as it's ready
  iframe?.addEventListener('load', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (iframe.contentWindow) {
      iframe.contentWindow.postMessage({ type: 'theme-change', theme: currentTheme }, '*');
    }
});

});
// Handle flashcard button
const flashcardBtn = document.getElementById('flashcard-toggle');
if (flashcardBtn) {
  flashcardBtn.addEventListener('click', () => {
    // Hide overview and all content sections
    const overview = document.getElementById('section-overview');
    if (overview) overview.classList.add('hidden');

    document.querySelectorAll('.content-section').forEach(section => {
      section.classList.add('hidden');
    });

    // Show flashcard section
    const flashcardSection = document.getElementById('flashcard-section');
    if (flashcardSection) flashcardSection.classList.remove('hidden');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
