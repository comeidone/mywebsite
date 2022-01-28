const grid = document.querySelector('#grid')
const errorsCounter=document.querySelector('#errors');
const cards = ['alien', 'bug', 'duck', 'rocket', 'spaceship', 'tiktac'];
const deck = [...cards, ...cards];

let pick = [];
let errors = 0;

deck.sort(function () {
    return 0.5 - Math.random();
});

for (let i = 0; i < deck.length; i++) {
    const card = document.createElement('div');
    const cardName = deck[i];
    card.classList.add('card');
    card.setAttribute('data-name', cardName);
    card.addEventListener('click', flipCard);
    grid.appendChild(card);
}

errorsCounter.innerText=errors;

function flipCard(event) {
    const card = event.target;

    if (card.classList.contains('flipped')) return;

    card.classList.add(card.getAttribute('data-name'), 'flipped');

    pick.push(card);

    if (pick.length === 2) {
        checkForMatch();
    }
}

function checkForMatch() {
    const card1 = pick[0];
    const card2 = pick[1];
    const cardName1 = card1.getAttribute('data-name');
    const cardName2 = card2.getAttribute('data-name');

    if (cardName1 === cardName2) {
        checkForWin();
    } else {
        setTimeout(function () {
            card1.classList.remove(cardName1, 'flipped');
            card2.classList.remove(cardName2, 'flipped');
            errors++;
            errorsCounter.innerText=errors;
        }, 500);
    }

    pick = [];
}

function checkForWin() {
    const flippedCards = document.querySelectorAll('.flipped');
    if (flippedCards.length === deck.length) {
        showAlert('Hai vinto!');
    }
}

const restartButton=document.getElementById('restart');

restartButton.addEventListener('click',function(){
    window.location.reload();
})