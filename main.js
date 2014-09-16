// Write a function to capitalize the first letter of everyword in a string
var letterCapitalize = function(string) {
	var newArray = string.split(" ");
	for (var i = 0; i < newArray.length; i++){
		newArray[i] = newArray[i].charAt(0).toUpperCase() + newArray[i].slice(1);
	}
	var capitalizedString = newArray.join(' ');
	return capitalizedString
};
var string = prompt('Enter a sentence to capitalize');
alert('Your sentence capitalized: ' + letterCapitalize(string));

// Write a function that counts the number of words in a given sentence
var wordCount = function(stringToCount){
	var newArray = stringToCount.split(' ');
	return newArray.length;
}
var stringToCount = prompt('Enter a sentence to perform a word count on.');
alert('There are ' + wordCount(stringToCount) + ' words in your sentence.');

// Create a function to tell whether or not a number is prime
var primeTime = function(x) {
	if(x >= 1 && x <= Math.pow(2,16)){
		var maxNum = Math.sqrt(x);
		var divisibleBy = []
		var i = 0
		while (i < maxNum){
			divisibleBy[i] = i;
			if (x % (+divisibleBy[i]+2) === 0) {
				i = maxNum;
				return false;
			} else if (i < maxNum){
				i++
			} else {
				return true;
			}
		}
	} else {
		return null;
	}
}

var x = prompt('Enter a number to check if it is prime');
if (primeTime(x) === false) {
	alert('The number ' + x + ' is not prime.');
} else if (primeTime(x) === null){
	alert('The number is not within the range of 1 and 2^16');
} else {
	alert('The number ' + x + ' is prime.');
}
