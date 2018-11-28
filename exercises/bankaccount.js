

class Account{
	constructor(){
		//store the amount of money in the account
		this.money = null;
	}
	add(moneyToAdd){
		//add money to the amount stored in the account
		//takes in an amount
		this.money += moneyToAdd;
		//adds it to the existing amount
		return this.money;
		//returns the new amount in the account
	}
	remove( amount ){
		//removes funds from an account
		//check if the amount to withdraw is more than the account
		if (amount > this.money) {
			amount = this.money;
			this.money = 0;
		} else{
			this.money -= amount;
		}
		return amount;
		//if more, only withdraw the amount in the account, not more
		//if less, withdraw the amount specified
		//return the amount actually withdrawn
	}
	getAmount(){
		//returns the amount in the account
		return this.money;
	}
}