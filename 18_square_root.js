// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 9;
// Print the square root of a
// Printing more than one output or printing anything other than square root might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let number = 0;
let squareRoot = 0;

while (currentNumber <= a) {
    squareRoot++;
    currentNumber = squareRoot * squareRoot;
}

squareRoot = squareRoot - 1;
console.log(squareRoot);
