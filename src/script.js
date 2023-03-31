var button_start = document.getElementById('start-button');
var cards = document.querySelectorAll('.card');

button_start.addEventListener('click', function (e) {
    button_start.disabled = true;

    cards.forEach(card => {
        card.classList.add('back');
    });

    // Remove o ouvinte de evento
    button_start.removeEventListener("click", e);

    // Remove o botão do DOM
    button_start.parentNode.removeChild(button_start);

});

cards.forEach(card => {
    card.addEventListener('click', () => {
        /*if (card.classList.contains('flipped') || matchedCards.includes(card)) {
            return;
        };*/
        card.classList.replace('back', 'flipped');
    });
});