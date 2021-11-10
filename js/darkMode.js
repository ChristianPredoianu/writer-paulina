const darkModeIcon = document.querySelector('.dark-mode-icon__icon'),
  body = document.querySelector('body');
let darkMode = localStorage.getItem('darkMode');

window.addEventListener('load', () => {
  darkMode = localStorage.getItem('darkmode');
  if (darkMode === 'true') {
    enableDarkMode();
  }
});

function enableDarkMode() {
  body.classList.add('darkmode');
  darkModeIcon.style.color = '#ffff00';
  darkModeIcon.classList.add('dark-mode-enabled');
  localStorage.setItem('darkmode', true);
}

function disableDarkMode() {
  body.classList.remove('darkmode');
  darkModeIcon.style.color = '#fff';
  darkModeIcon.classList.remove('dark-mode-enabled');
  localStorage.setItem('darkmode', false);
}

darkModeIcon.addEventListener('click', () => {
  !darkModeIcon.classList.contains('dark-mode-enabled')
    ? enableDarkMode()
    : disableDarkMode();
});
