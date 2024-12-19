// Do not rename p, r or t, use them as input for your program.
// While testing we will change their values.
const p = 100;
const r = 3;
const t = 20;
// Print the compound interest.
// Do not use compound interest formula to calculate the compound interest.
// Use simple interest formula and a loop to calculate the compound interest.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let sum = p;
let interest = 0;

for (let years = 0; years < t; years++) {
    interest = (sum * 1 * r) / 100
    sum = sum + interest
}

interest = sum - p
console.log(interest)