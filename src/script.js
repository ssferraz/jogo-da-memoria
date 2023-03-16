const cards = document.querySelectorAll('.card');

let flippedCard = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.add('flipped');

  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;
  } else {
    flippedCard = false;
    secondCard = this;
    checkForMatch();
  }
}

function checkForMatch() {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    disableCards();
  } else {
    unflipCards();
  }
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flipped');
    secondCard.classList.remove('flipped');
  }, 1000);
}

cards.forEach(card => card.addEventListener('click', flipCard));

var matriz = [
  ['1a', '1b', '1c', '1d'],
  ['2a', '2b', '2c', '2d'],
  ['3a', '3b', '3c', '3d'],
  ['4a', '4b', '4c', '4d']
];

var icones = ['../assets/images/abacaxi.png', '../assets/images/abacaxi.png', 
              '../assets/images/banana.png', '../assets/images/banana.png', 
              '../assets/images/coco.png', '../assets/images/coco.png', 
              '../assets/images/laranja.png', '../assets/images/laranja.png',  
              '../assets/images/limao.png', '../assets/images/limao.png', 
              '../assets/images/melancia.png', '../assets/images/melancia.png', 
              '../assets/images/morango.png', '../assets/images/morango.png', 
              '../assets/images/uva.png', '../assets/images/uva.png'];

var button_start = document.getElementById('start-button');
button_start.addEventListener('click', function (e) {
  setImagens();
})

function shuffleArray(arr) {
  // Loop em todos os elementos
  for (let i = arr.length - 1; i > 0; i--) {
      // Escolhendo elemento aleatório
      const j = Math.floor(Math.random() * (i + 1));
      // Reposicionando elemento
      [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  // Retornando array com aleatoriedade
  return arr;
}

function setImagens() {
  //<img src="../assets/images/card.png">

  var icones = ['../assets/images/abacaxi.png', '../assets/images/abacaxi.png', 
              '../assets/images/banana.png', '../assets/images/banana.png', 
              '../assets/images/coco.png', '../assets/images/coco.png', 
              '../assets/images/laranja.png', '../assets/images/laranja.png',  
              '../assets/images/limao.png', '../assets/images/limao.png', 
              '../assets/images/melancia.png', '../assets/images/melancia.png', 
              '../assets/images/morango.png', '../assets/images/morango.png', 
              '../assets/images/uva.png', '../assets/images/uva.png'];

  icones = shuffleArray(icones);
  for (var linha = 0; linha < 4; linha++) {
      for (var coluna = 0; coluna < 4; coluna++) {
          var ref = document.getElementById(matriz[linha][coluna]);

          ref.innerHTML = `<img src=${icones.pop()}></img>`;
      }
  } 

}

function capturaClick(element, pos) {
  element.style.display = 'none';
  var card = document.getElementById(pos);
  card.style.backfaceVisibility = 'visible';
  // document.querySelectorAll(`[data-name*="funnel-chart-percent"]`)
}