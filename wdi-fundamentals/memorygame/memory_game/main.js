var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];
var score = 0;
var resetButton = document.getElementById('reset');
var statusMessage = document.getElementById('status-message');
var flipCount = 0;

var checkForMatch = function () {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			statusMessage.textContent = "You Found a Match!"
			cardsInPlay.length = 0;
			updateScore();
		} else {
			statusMessage.textContent = "Bummer, Try Again!"
			cardsInPlay.length = 0;
			resetButton.style.visibility = "visible";
		};
	};
};

var flipCard = function () {
	if (flipCount > 4) {
		statusMessage.textContent = alert("Stop Cheating!!!");
	}
	else {
		var cardId = this.getAttribute('data-id');
		this.setAttribute('src', cards[cardId].cardImage);
		console.log('User Flipped ' + cards[cardId].rank);
		console.log(cards[cardId].suit);
		console.log(cards[cardId].cardImage);
		cardsInPlay.push(cards[cardId].rank);
		checkForMatch();
		flipCount++;
	}
};

var updateScore = function () {
	if (score < 2) {
		score++;
		console.log('Score is ' + score);
		document.getElementById('score').textContent = "Score: " + score;
		if (score === 2) {
			statusMessage.textContent = alert("You Win!");
		}
	}
};

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();