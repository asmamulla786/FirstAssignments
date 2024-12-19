// Do not rename a and b, use them as input for your program.
// a and b will be whole numbers.
// While testing we will change their values.
const a = 5;
const b = 5;

// Print the HCF of a and b
// Printing more than one output or printing anything other than HCF might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let min = a;
let currentNumber = b;

if (a > b) {
    min = b;
    currentNumber = a;
}

for (let divisor = 1; divisor <= min; divisor++) {
    if(a % divisor + b % divisor == 0) {
        currentNumber = divisor;
    }
}

console.log(currentNumber);








