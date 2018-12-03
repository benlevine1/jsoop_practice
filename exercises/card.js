
class Card{
	constructor(suite, faceValue){
		this.suite = suite;
		this.faceValue = faceValue;
	}
	getSuite(){
		return this.suite;
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
	addCard( suite, faceValue ){
		//adds a card to the deck
		//takes in a string suit and faceValue
		var card = new Card(suite, faceValue);
		this.deck.unshift(card);
		return this.deck.length;
		//makes a new card Object from the Card template
		
		//adds the card object to the storage in the constructor
		//returns the amount of cards currently stored
	}
	shuffle(){
		var shuffledArray = this.deck.slice(0, this.deck.length - 1);
		for(var cardIndex = 0; cardIndex < shuffledArray.length; cardIndex++){
			shuffledArray[cardIndex] = this.deck.splice(Math.floor(Math.random()) * this.deck.length - 1, 1)[0];
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
		var dealtCards;
		if (amount > this.deck.length){
			dealtCards = this.deck.splice(0, this.deck.length-1);
		}else{
			dealtCards = this.deck.splice(0, amount);
		}
		return dealtCards;
		//removes that many cards from the deck
		//returns an array with that many cards in it
		//cannot return more cards than the deck has
	}
}