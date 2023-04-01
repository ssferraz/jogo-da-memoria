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


var matriz = [
    ['1a', '1b', '1c', '1d'],
    ['2a', '2b', '2c', '2d'],
    ['3a', '3b', '3c', '3d'],
    ['4a', '4b', '4c', '4d']
];

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

button_start.addEventListener('click', function (e) {
    button_start.disabled = true;

    cards.forEach(card => {
        card.classList.add('back');
    });

    images = shuffleArray(images);
    console.log(images);


    // Remove o ouvinte de evento
    button_start.removeEventListener("click", e);

    // Remove o botão do DOM
    button_start.parentNode.removeChild(button_start);

});

cards.forEach(card => {
    card.addEventListener('click', () => {
        if (card.classList.contains('flipped')) {
            return;
        };
        card.classList.replace('back', 'flipped');
        var ref = document.getElementById(card.getAttribute('id'));
        ref.style.backgroundImage = `url(${images.pop()})`;
    });
});
