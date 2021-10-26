const heroVideo = document.querySelector('.hero__video');

// ===================VIDEO CONTROLS===========================
function togglePlayVideo() {
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
}

function toggleVideoSound() {
  const soundControl = document.querySelector('.video-controls__icon--sound');
  soundControl.addEventListener('click', () => {
    if (heroVideo.muted) {
      heroVideo.muted = false;
      soundControl.classList.remove('fas', 'fa-volume-mute');
      soundControl.classList.add('fas', 'fa-volume-up');
    } else {
      heroVideo.muted = true;
      soundControl.classList.remove('fas', 'fa-volume-up');
      soundControl.classList.add('fas', 'fa-volume-mute');
    }
  });
}

togglePlayVideo();
toggleVideoSound();

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
