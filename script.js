// ================================
// Swiper — mobile only
// ================================
if (window.innerWidth <= 768) {
  new Swiper('.brand-list', {
    slidesPerView: 'auto',
    spaceBetween: 12,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}


// ================================
// Control visible cards by screen
// ================================
function updateVisibleCards() {
  if (window.innerWidth <= 768) return;

  const cards = document.querySelectorAll('.brand-item');
  const isDesktop = window.innerWidth >= 1281;
  const visibleCount = isDesktop ? 8 : 6;

  cards.forEach(function(card, index) {
    if (index >= visibleCount) {
      card.style.display = 'none';
    } else {
      card.style.display = 'flex';
    }
  });
}

updateVisibleCards();


// ================================
// Show All / Hide button
// ================================
const toggleBtn = document.querySelector('.brand-toggle');
const btnText = toggleBtn.querySelector('span');
let isExpanded = false;

toggleBtn.addEventListener('click', function () {
  isExpanded = !isExpanded;

  const cards = document.querySelectorAll('.brand-item');
  const isDesktop = window.innerWidth >= 1281;
  const visibleCount = isDesktop ? 8 : 6;

  cards.forEach(function(card, index) {
    if (isExpanded) {
      card.style.display = 'flex';
    } else {
      if (index >= visibleCount) {
        card.style.display = 'none';
      }
    }
  });

  btnText.textContent = isExpanded ? 'Hide' : 'Show all';
});