const heroVideo = document.querySelector('.hero-container__video');
const playControl = document.querySelector('.video-controls__icon--play');

playControl.addEventListener('click', () => {
  if (!heroVideo.paused) {
    heroVideo.pause();
    playControl.classList.remove('far', 'fa-pause-circle');
    playControl.classList.add('far', 'fa-play-circle');
  } else {
    heroVideo.play();
    playControl.classList.remove('far', 'fa-play-circle');
    playControl.classList.add('far', 'fa-pause-circle');
  }
});

// ===================Swiper.js===========================
const swiper = new Swiper('.mySwiper', {
  effect: 'cards',
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
