// Do not rename a, use it as input for your program.
// a will be a whole number.
// While testing we will change its value.
const a = 0;
// Print true if a is a perfect number otherwise print false
// A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself.
// For example, 6 is a perfect number because its proper divisors are 1, 2, and 3, and 1 + 2 + 3 = 6.
// Printing more than one output or printing anything other than perfect or not perfect might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
// let sum = 0;
// if ( a >= 6) {
//     for (let divisor = 1 ; divisor < a ; divisor++ ) {
//         if (a % divisor === 0){
//             sum = sum + divisor
//         }
//     }
//     console.log(sum === a);

// } else {
//     console.log(false);
// }

let sum = 0
let number = 1;
for(currentNumber; currentNumber < a; currentNumber++) {
    if(a % currentNumber === 0) {
        sum = sum + currentNumber
    }
}
console.log(currentNumber == sum);