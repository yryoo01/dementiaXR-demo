document.addEventListener('DOMContentLoaded', () => {
  const playerBubble = document.getElementById('playerBubble');
  const initialScene = document.getElementById('initialScene');

  const fridgeScene = document.getElementById('fridgeScene');
  const fridgeHandle = document.getElementById('fridgeHandle');
  const fridgeImage = document.getElementById('fridgeImage');
  const openElements = document.getElementById('openElements');
  const iceCream = document.getElementById('iceCream');
  const heavyObject = document.getElementById('heavyObject');
  const blackOverlay = document.getElementById('blackOverlay');
  const nextButton = document.getElementById('nextButton');

  setTimeout(() => {
    playerBubble.style.display = 'inline-block';
  }, 2000);

  playerBubble.addEventListener('click', () => {
    initialScene.style.display = 'none';
    fridgeScene.style.display = 'block';
  });

  fridgeHandle.addEventListener('click', () => {
    fridgeImage.src = "/dementiaXR-demo/images/fridge_open.png";
    fridgeImage.classList.add('open');

    fridgeHandle.style.display = 'none';

    openElements.style.display = 'flex';
  });

  iceCream.addEventListener('click', () => {
    heavyObject.style.animation = 'fall 1s forwards';
    setTimeout(() => {
      blackOverlay.style.opacity = '1';
      setTimeout(() => {
        nextButton.style.display = 'block';
      }, 1000);
    }, 500);
  });

  nextButton.addEventListener('click', () => {
    window.location.href = "/dementiaXR-demo/scene2/scene2.html";
  });
});
