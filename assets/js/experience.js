

/*
  experience.js
  --------------
  This script adds interactive enhancements to the Experience page,
  particularly for mobile devices where :hover does not behave naturally.

  Features:
  - Tap-to-flip cards on mobile (hover-to-flip still works on desktop)
  - Tap outside cards to reset any flipped ones
  - Smooth scroll support for future "View details" expansion
*/

// Detect if the user is likely on a touch device
const isTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;

// Select all experience cards
const expCards = document.querySelectorAll('.exp-card-inner');

if (isTouch && expCards.length > 0) {
  expCards.forEach(card => {
    // Add a tap listener
    card.addEventListener('click', function (e) {
      e.stopPropagation();

      // If card is already flipped, unflip it
      if (card.classList.contains('flip-mobile')) {
        card.classList.remove('flip-mobile');
        return;
      }

      // Unflip other cards
      expCards.forEach(c => c.classList.remove('flip-mobile'));

      // Flip this one
      card.classList.add('flip-mobile');
    });
  });

  // Tap anywhere outside the cards to reset
  document.addEventListener('click', () => {
    expCards.forEach(card => card.classList.remove('flip-mobile'));
  });
}

// Optional: Smooth scrolling helper for future detail linking
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (!section) return;
  window.scrollTo({
    top: section.offsetTop - 60,
    behavior: 'smooth'
  });
}