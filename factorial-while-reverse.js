function factorial(number) {
  let i = number;
  let result = 1;
  while (i >= 1) {
    result *= i;
    i--;
  }
  return result;
}

const myNumber = 6;
console.log("The factorial of", myNumber, "is", factorial(myNumber));
