// let firstCard = getRandomCard()
// let secondCard = getRandomCard()

// Array - ordered list
let cards = [];
let sum = 0;
let hasBlackJack = false;
// create another variable
let isAlive = false;
let message = '';
let messageEl = document.getElementById('message-el');
// console.log(messageEl)
let sumEl = document.getElementById('sum-el');
// let sumEl = document.querySelector("#sum-el")
// console.log(sumEl)
let cardsEl = document.getElementById('cards-el');

let player = {
	name: 'jenny',
	chips: 200,
};

let playerEl = document.getElementById('player-el');

playerEl.textContent = player.name + ': $' + player.chips;

function getRandomCard() {
	let randomNumber = Math.floor(Math.random() * 13) + 1;

	if (randomNumber > 10) {
		return 10;
	} else if (randomNumber === 1) {
		return 11;
	} else {
		return randomNumber;
	}
}
function startGame() {
	isAlive = true;

	let firstCard = getRandomCard();
	let secondCard = getRandomCard();
	cards = [firstCard, secondCard];
	sum = firstCard + secondCard;
	renderGame();
}

function renderGame() {
	//    render out first card and secondCard
	cardsEl.textContent = 'Cards: ';
	// + cards[0] + " " + cards[1]

	for (let i = 0; i < cards.length; i++) {
		cardsEl.textContent += cards[i] + ' ';
	}

	sumEl.textContent = 'Sum: ' + sum;

	if (sum <= 20) {
		message = 'Do you want to draw a new card?';
	} else if (sum === 21) {
		message = "You've got Blackjack!";
		hasBlackJack = true;
	} else {
		message = "You're out of the game!";
		isAlive = false;
	}

	messageEl.textContent = message;
	// console.log(message)
}
function newCard() {
	// console.log("Drawing a new card from the deck")
	if (isAlive === true && hasBlackJack === false) {
		let card = getRandomCard();

		sum += card;

		cards.push(card);

		// console.log(cards)
		renderGame();
	}
}
