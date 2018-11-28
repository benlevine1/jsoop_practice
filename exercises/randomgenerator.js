

class RandomGenerator{
	constructor(minValue, maxValue){
		//takes in the minimum and maximum values
		this.minValue = minValue;
		this.maxValue = maxValue;
		//if they are not defined, it sets the minimum to 1, and the max to 10
		if (minValue === undefined && maxValue === undefined){
			minValue = 1;
			maxValue = 10;
		}
		var randomNumber = this.randomNumber
	}
	generate(){
		//make a random value between the minimum and maximum values
		this.randomNumber = Math.random() * (this.maxValue) + this.minValue
		//and store the number into the storage from the constructor
	}
	getRange(){
		//return an object with min and max, min being the minimum value for the generator, max being the maximum value
		var range = {
			min: this.minValue,
			max: this.maxValue
		};
		//returns a basic object literal
		return range;
	}
	getNum(){
		//return the random number that was generated by generate()
		return this.randomNumber;
	}
}