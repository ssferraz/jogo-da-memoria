var button_start = document.getElementById('start-button');
var cards = document.querySelectorAll('.card');

var images = ['./assets/images/abacaxi.png', './assets/images/abacaxi.png',
    './assets/images/banana.png', './assets/images/banana.png',
    './assets/images/coco.png', './assets/images/coco.png',
    './assets/images/laranja.png', './assets/images/laranja.png',
    './assets/images/limao.png', './assets/images/limao.png',
    './assets/images/melancia.png', './assets/images/melancia.png',
    './assets/images/morango.png', './assets/images/morango.png',
    './assets/images/uva.png', './assets/images/uva.png'];

var images_embaralhadas = [];

var array2 = [
    { pos: '1a', img: '' }, { pos: '1b', img: '' }, { pos: '1c', img: '' }, { pos: '1d', img: '' },
    { pos: '2a', img: '' }, { pos: '2b', img: '' }, { pos: '2c', img: '' }, { pos: '2d', img: '' },
    { pos: '3a', img: '' }, { pos: '3b', img: '' }, { pos: '3c', img: '' }, { pos: '3d', img: '' },
    { pos: '4a', img: '' }, { pos: '4b', img: '' }, { pos: '4c', img: '' }, { pos: '4d', img: '' }
];

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    for (let i = 0; i < arr.length; i++) {
        array2[i].img = arr[i];
    }
    return arr;
}

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let progress = 0.0;
let tentativas = 0;

function flipCard(ref) {
    if (lockBoard) return;
    if (ref === firstCard) return;

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = ref;
        return firstCard;
    }

    secondCard = ref;
    checkForMatch();
}

function checkForMatch() {
    tentativas += 1;
    document.getElementById('tentativas').textContent = tentativas;
    if (firstCard.getAttribute('style') === secondCard.getAttribute('style')) {
        disableCards();
    } else {
        unflipCards();
    }

    checkIfFinished();

}

function checkIfFinished() {
    if (progress === 100) {
        setTimeout(function () {
            var response = window.confirm("Parabéns! Você venceu.");
            if (response) {
                location.reload();
            }
        }, 1005);
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    progress += 12.5;
    document.getElementById('progress').textContent = progress;

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.style.removeProperty("background-image");
        firstCard.classList.replace('flipped', 'back');
        secondCard.style.removeProperty("background-image");
        secondCard.classList.replace('flipped', 'back');
        resetBoard();
    }, 1000);

}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

button_start.addEventListener('click', function (e) {
    button_start.disabled = true;

    cards.forEach(card => {
        card.classList.replace('empty', 'back');
    });

    images = shuffleArray(images);

    button_start.removeEventListener("click", e);

    button_start.style.display = 'none';
});



cards.forEach(card => {
    card.addEventListener('click', () => {
        if (card.classList.contains('flipped') || card.classList.contains('empty') || lockBoard) {
            return;
        };

        var ref = document.getElementById(card.getAttribute('id'));
        card.classList.replace('back', 'flipped');

        for (let i = 0; i < array2.length; i++) {

            if (array2[i].pos === ref.id) {
                ref.style.backgroundImage = `url(${array2[i].img})`;
                break;
            }
        }
        flipCard(ref);
    });
});
