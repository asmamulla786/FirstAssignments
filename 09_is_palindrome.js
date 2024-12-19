// Do not rename a, use it as input for your program.
// a will be a whole number.
// While testing we will change its value.
const a = 123;
// Print true if a is palindrome otherwise print false
// Printing more than one output or printing anything other than palindrome or not palindrome might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let sum = 0;
let remainder = 0;
let number = a;

while (currentNumber > 0) {
    remainder = currentNumber % 10;
    currentNumber = currentNumber - remainder;
    sum = sum * 10 + remainder;
    currentNumber = currentNumber / 10;
}

let palindrome = (sum === a);
console.log(palindrome);