const heroVideo = document.querySelector('.hero-container__video');

//Closure for play-pause video
const playPauseVideo = () => {
  const videoPlayBtn = document.querySelector('.video-controls__icon--play');
  const videoPauseBtn = document.querySelector('.video-controls__icon--pause');
  let isHeroVideoPlaying = true;

  return (togglePlayVideo = () => {
    if (isHeroVideoPlaying) {
      videoPauseBtn.addEventListener('click', () => {
        heroVideo.pause();
        isHeroVideoPlaying = false;
        videoPauseBtn.style.display = 'none';
        videoPlayBtn.style.display = 'inline-block';
      });
    }
    videoPlayBtn.addEventListener('click', () => {
      heroVideo.play();
      isHeroVideoPlaying = true;
      videoPauseBtn.style.display = 'inline-block';
      videoPlayBtn.style.display = 'none';
    });
  });
};

//Closure for mute-unmute video sound
const playMuteSound = () => {
  const videoMute = document.querySelector('.video-controls__icon--mute');
  const videoUnMute = document.querySelector('.video-controls__icon--sound');
  let isVideoMuted = true;

  return (toggleVideoSound = () => {
    if (isVideoMuted) {
      videoMute.addEventListener('click', () => {
        heroVideo.muted = false;
        videoMute.style.display = 'none';
        videoUnMute.style.display = 'inline-block';
      });
    }
    videoUnMute.addEventListener('click', () => {
      heroVideo.muted = true;
      isVideoMuted = true;
      videoUnMute.style.display = 'none';
      videoMute.style.display = 'inline-block';
    });
  });
};

const toggleVideoPlay = playPauseVideo();
const toggleSoundVideo = playMuteSound();

toggleVideoPlay();
toggleSoundVideo();

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
