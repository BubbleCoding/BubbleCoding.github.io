document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const inner = card.querySelector('.card-inner');
      // Remove animation if present
      inner.style.animation = 'none';
      // Force reflow to reset animation state
      void inner.offsetWidth;
      inner.style.animation = '';
      // Now toggle the flip
      card.classList.toggle('flipped');
    });

    // Only allow the tilt animation once, immediately on first hover
    function handleTiltOnce() {
      if (!card.classList.contains('tilted')) {
        card.classList.add('tilted');
        // Remove this event listener after first trigger
        card.removeEventListener('mouseenter', handleTiltOnce);
      }
    }
    card.addEventListener('mouseenter', handleTiltOnce);
  });
});
