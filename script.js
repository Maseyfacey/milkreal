const item = document.getElementById('item');
const sound = document.getElementById('sound');

item.addEventListener('click', () => {
  sound.currentTime = 0;
  sound.play();
});