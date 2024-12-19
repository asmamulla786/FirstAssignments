// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 0;
// Print the binary representation of a
// If a = 12, then the output should be
// 0
// 0
// 1
// 1
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let decimal = a
if (decimal === 0) {
    console.log(0)
}
while (decimal > 0) {
    let remainder = decimal % 2
    console.log(remainder)
    decimal = decimal - remainder
    decimal = decimal / 2
}


