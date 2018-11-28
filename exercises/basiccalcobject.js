
class Calculator{
	constructor(){
		//takes in nothing
		//make storage for the operator and the numbers
		this.numbers = [];
		this.operator;
	}
	loadOperator( operator ){
		//adds the operator to the next calculation
		//takes in the operator
		//checks if it is a valid operation (+-*/)
			//save the op to the constructor storage
			//return true
		if (operator === '+' || operator === '-' || operator === '*' || operator === '/'){
			this.operator = operator;
			return true;
		}else{
			return false;
		}
		//or return false if not the right operator
	}
	loadNumber( num1 ){
		if (isFinite(num1)){
			this.numbers.push(num1);
			if (this.numbers.length <= 2){
				return this.numbers.length;
			}else{
				return false;
			}
		}else{
			return false;
		}
	}
		//takes in a number and stores it as one of the numbers to perform math on
		//takes in 1 number
		//checks if it is actually a number and if we have fewer than 2 numbers
		//if it is a number, and we have 2 or fewer numbers, store it
			//return the number of numbers stored
	
		//otherwise return false (too many numbers stored)
	calculate(){
		switch (this.operator) {
			case '+':
				var answer = this.numbers[0] + this.numbers[1];
				this.numbers = [];
				return answer;
			case '-':
				var answer = this.numbers[0] - this.numbers[1];
				this.numbers = [];
				return answer;
			case '*':
				var answer = this.numbers[0] * this.numbers[1];
				this.numbers = [];
				return answer;
			case '/':
				var answer = this.numbers[0] / this.numbers[1];
				this.numbers = [];
				return answer;
        }
		//calculate the result of the stored numbers and operator
		//takes in nothing
		//calculates with the operator and 2 numbers
		//clears out the stored numbers
		//returns the calculated result
	}
}