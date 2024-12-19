// Do not rename a and b, use them as input for your program.
// a and b will be whole numbers.
// While testing we will change their values.
const a = 0;
const b = 34;
// Print the lcm of a and b
// Printing more than one output or printing anything other than lcm might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let lcm = 0;
let min = a;

if (a > b) {
    min = b;
}
let divident = min;

if (min !== 0) {
    while (divident >= min) {
        if (divident % a + divident % b === 0) {
            lcm = divident;
            break;
        }
        divident++;
    }
}

console.log(lcm);