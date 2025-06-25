document.addEventListener('DOMContentLoaded', () => {
  const bgMusic = document.getElementById('bgMusic');
  bgMusic.play().catch(e => {
    console.log("Music autoplay blocked:", e);
  });
  
  window.addEventListener('click', () => {
    if (bgMusic.paused) {
      bgMusic.play().catch(e => console.log("Play on user interaction failed:", e));
    }
  });


  const playerBubble = document.getElementById('playerBubble');
  const characterContainer = document.getElementById('characterContainer');
  const bubble1 = document.getElementById('bubble1');
  const bubble2 = document.getElementById('bubble2');
  const bubble3 = document.getElementById('bubble3');
  const nextButton = document.getElementById('nextButton');

  bubble1.style.display = 'none';
  bubble2.style.display = 'none';
  bubble3.style.display = 'none';
  nextButton.style.display = 'none';

  const initialBubbleDuration = 6000;
  const dialogueInterval = 1800;

  setTimeout(() => {
    playerBubble.style.display = 'none';
    characterContainer.style.display = 'block';

    bubble1.style.display = 'block';

    setTimeout(() => {
      bubble2.style.display = 'block';

      setTimeout(() => {
        bubble3.style.display = 'block';

        setTimeout(() => {
          nextButton.style.display = 'block';
        }, dialogueInterval);
      }, dialogueInterval);
    }, dialogueInterval);
  }, initialBubbleDuration);

nextButton.addEventListener('click', () => {
  window.location.href = "/dementiaXR-demo/index.html";
});
});
