
class Card{
	constructor(suit, faceValue){
		this.suit = suit;
		this.faceValue = faceValue;
	}
	getSuit(){
		return this.suit;
	}
	getFaceValue(){
		return this.faceValue;
	}
}

class Deck{
	constructor(){
		//takes in nothing
		this.deck = [];
		//make storage for your card objects
	}
	addCard( suit, faceValue ){
		//adds a card to the deck
		//takes in a string suit and faceValue
		var card = new Card(suit, faceValue);
		this.deck.push(card);
		return this.deck.length;
		//makes a new card Object from the Card template
		
		//adds the card object to the storage in the constructor
		//returns the amount of cards currently stored
	}
	shuffle(){
		for(cardIndex = 0; cardIndex < this.deck.length; cardIndex++){
			var shuffledArray = this.deck.splice(Math.floor(Math.random()) * this.deck.length - 1, 1);
		}
		this.deck = shuffledArray;

		//reorders the cards in the storage array in a random order
		//takes in nothing
		//returns nothing
	}
	getCardCount(){
		var cardAmount = this.deck.length;
		return cardAmount
		//gets the current amount of cards stored
		//takes in nothing
		//returns the amount of cards stored in the array in the constructor
	}
	dealCards( amount ){
		//deals out a number of cards
		//takes in the number of cards to deal
		
		//removes that many cards from the deck
		//returns an array with that many cards in it
		//cannot return more cards than the deck has
	}
}