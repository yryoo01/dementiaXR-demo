document.addEventListener('DOMContentLoaded', () => {
  const choiceContainer = document.getElementById('choiceContainer');
  const characterScene = document.getElementById('characterScene');
  const characterImage = document.getElementById('characterImage');
  const characterBubble = document.getElementById('characterBubble');
  const nextCharButton = document.getElementById('nextCharButton');
  const festivalButton = document.getElementById('festivalButton');

  const hospitalButton = document.getElementById('hospitalButton');
  const restaurantButton = document.getElementById('restaurantButton');
  const parkButton = document.getElementById('parkButton');

  const visited = {
    hospital: false,
    restaurant: false,
    park: false,
  };

  function checkAllVisited() {
    if (visited.hospital && visited.restaurant && visited.park) {
      festivalButton.style.display = 'block';
    }
  }

  function showCharacterScene(imageSrc, optionKey) {
    visited[optionKey] = true;
    characterImage.src = imageSrc;
    
    if (optionKey === "park") {
      characterBubble.textContent = "See you at the festival tomorrow!";
      characterBubble.className = "orange-bubble";
      characterBubble.style.display = 'block';
    } else {
      characterBubble.style.display = 'none';
    }
    
    choiceContainer.style.display = 'none';
    characterScene.style.display = 'flex';
    checkAllVisited();
  }

  hospitalButton.addEventListener('click', () => {
    showCharacterScene("/dementiaXR-demo/images/family1.svg", "hospital");
  });
  restaurantButton.addEventListener('click', () => {
    showCharacterScene("/dementiaXR-demo/images/family2.svg", "restaurant");
  });
  parkButton.addEventListener('click', () => {
    showCharacterScene("/dementiaXR-demo/images/friend1.svg", "park");
  });

  nextCharButton.addEventListener('click', () => {
    characterScene.style.display = 'none';
    choiceContainer.style.display = 'flex';
  });

  festivalButton.addEventListener('click', () => {
    window.location.href = "/dementiaXR-demo/ending/festival.html";
  });
});
