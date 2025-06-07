let swiper = new Swiper('.swiper', {
  initialSlide: 1,
  spaceBetween: getSpaceBetween(),
  slidesPerView: getSlidesPerView(),
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next-custom',
    prevEl: '.swiper-button-prev-custom',
  },
  on: {
    init: togglePagination,
    resize: togglePagination,
  }
});

function getSpaceBetween() {
  if (window.innerWidth >= 820) return 50;
  return 18;
}

function getSlidesPerView() {
  if (window.innerWidth >= 1280) {
    return 3;
  } else if (window.innerWidth >= 820) {
    return 2;
  } else {
    return 1;
  }
}

function togglePagination() {
  const slidesView = getSlidesPerView();
  const paginationEl = document.querySelector('.swiper-pagination');
  if (paginationEl) {
    paginationEl.style.display = slidesView < 3 ? 'block' : 'none';
  }
}

window.addEventListener('resize', () => {
  swiper.params.spaceBetween = getSpaceBetween();
  swiper.params.slidesPerView = getSlidesPerView();
  swiper.update();
  togglePagination();
});

