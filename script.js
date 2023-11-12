const container = document.querySelector('.container12')
container.addEventListener('animationend', () => {
  container.classList.remove('active');
});