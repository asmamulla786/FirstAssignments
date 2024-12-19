// Do not rename a, use it as input for your program.
// a will be a whole number.
// While testing we will change its value.
const a = 3;
// Print true if a is prime otherwise print false
// Printing more than one output or printing anything other than prime or not prime might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let divisor = 1;
let noOfFactors = 0;
let remainder;

while (divisor <= a) {
    remainder = a % divisor;
    if (remainder === 0) {
        noOfFactors++;
    }
    divisor++;
}

let isPrime = noOfFactors === 2;
console.log(isPrime);