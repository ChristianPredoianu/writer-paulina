const videoPlayBtn = document.querySelector('.video-controls__icon--play');
const videoPauseBtn = document.querySelector('.video-controls__icon--pause');
const videoMute = document.querySelector('.video-controls__icon--pause');
const videoUnMute = document.querySelector('.video-controls__icon--sound');

videoPlayBtn.addEventListener('click', playVideo);
videoPauseBtn.addEventListener('click', pauseVideo);
videoMute.addEventListener('click', muteVideo);
videoUnMute.addEventListener('click', unMuteVideo);

function playVideo() {
  console.log('video played');
}

function pauseVideo() {
  console.log('video paused');
}

function muteVideo() {
  console.log('video muted');
}

function unMuteVideo() {
  console.log('video unmuted');
}

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
