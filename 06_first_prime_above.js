// Do not rename a, use it as input for your program.
// a will be a whole number.
// While testing we will change its value.
const a = 13;
// Print the first prime number above a
// Printing more than one output or printing anything other than the first prime number above a might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
for (let number = a+1  ;number > a ;number++) {
    let divisor = 1;
    let noOfFactors = 0;

    while (divisor <= number) {
        let remainder = number % divisor;
        if (remainder == 0) {
            noOfFactors++;
        }
        divisor++;
    }
 
    if (noOfFactors == 2) {
        console.log(number);
        break;
    }
}
