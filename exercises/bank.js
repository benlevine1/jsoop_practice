

class Bank{
	constructor(name){
		//takes in the name of the bank.
		this.name = name;
		//makes an object to store all accounts into
		this.accounts = {};
	}
	makeAccount(acctNumber){
		//makes an account
		//takes in the account number of an account
		if(this.accounts[acctNumber] === undefined){
			var newAcct = new Account();
			this.accounts[acctNumber] = newAcct;
			return newAcct;
		}else{
			return false;
		}
		//checks if the account number already exists in the account storage object in the constructor
			//if already exists, returns false
		//otherwise makes an new Account object
		//returns the Account object that was constructed
	}
	checkForAccount(acctNumber){
		//checks if an account exists or not
		//takes in the account number of an account
		if(this.accounts[acctNumber] === undefined){
			return false;
		}else{
			return true;
		}
		//returns false if the account does not exist in the accounts object from the constructor
		//returns true if the account does exist
	}
	removeAccount( acctNumber ){
		//removes an account
		//takes in an account number
		if(this.accounts[acctNumber] === undefined){
			return `account ${acctNumber} does not exist`
		}else if (this.accounts[acctNumber].money !== 0){
			return 'account is not empty'
		}else{
			delete this.accounts[acctNumber];
			return `account ${acctNumber} deleted`;
		}
		//if the account doesn't exist, returns
			//"account <accountNumber> does not exist" where accountNumber is the account number
		//if the account is not empty, returns
			//'account is not empty'
		//otherwise deletes the account from the constructor storage
		//returns 
			'account <accountNumber> deleted'

	}
	deposit(acctNumber, amount){
		//deposits money into an account
		//takes in an account number and a numeric amount
		if(this.accounts[acctNumber] === undefined){
			return 'account does not exist'
		}else{
			this.accounts[acctNumber].add(amount);
			return `account ${acctNumber} now has ${this.accounts[acctNumber].money}`
		}
		//if the account doesn't exist, returns
			//'account does not exist'
		//otherwise uses the account's add method and adds to the account
			//returns
			//"account <accountNumber> now has <new account amount>
	}
	withdraw( accountNumber, amount ){
		//removes money from an account
		//takes in an account number and an amount
		if(this.accounts[accountNumber] === undefined){
			return 'account does not exist'
		}else{
			var removedAmount = this.accounts[accountNumber].remove(amount);
			return "removed " + removedAmount + ' from account ' + accountNumber + '. It now has ' + this.accounts[accountNumber].money
		}
		//checks if the account exists, if not
			//return 'account does not exist'
		//uses the Account's remove method to withdraw funds from the account
		//returns "removed <amount withdrawn> from account <account number>. It now has <remaining amount in account>"
	}
}