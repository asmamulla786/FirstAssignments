// Do not rename a, use it as input for your program.
// a will be a whole number.
// While testing we will change its value.
const a = 2;
// Print true if a is an armstrong number otherwise print false
// A number is called Armstrong number if it is equal to the sum of the cubes of its own digits.
// For example: 153 is an Armstrong number since 153 = 1^3 + 5^3 + 3^3.
// Printing more than one output or printing anything other than armstrong or not armstrong might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let noOfDigits = 0;
let sum = 0;
let number = a;
let remainder = 0;

while (currentNumber > 0) {
    remainder = currentNumber % 10;
    currentNumber = currentNumber - remainder;
    currentNumber = currentNumber / 10;
    noOfDigits++;
}

currentNumber = a;

while (currentNumber > 0) {
    remainder = currentNumber % 10;
    let product = 1;
    sum = sum + (product ** noOfDigits);
    currentNumber = (currentNumber - remainder) / 10;
}

console.log(sum === a);