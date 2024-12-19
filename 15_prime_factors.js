// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 97;
// Print the prime factors of a
// For example, if a = 12, then the output should be
// 2
// 2
// 3
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let number = a;
let prime = 2;

while (currentNumber != 1) {
    let remainder = currentNumber % prime;
    if (remainder === 0) {
        currentNumber = currentNumber / prime;
        console.log(prime);
        continue;
    } 
    prime++;
}
