function factorial(number) {
  let i = 1;
  let result = 1;
  while (i <= number) {
    result *= i;
    i++;
  }
  return result;
}

const myNumber = 6;
console.log("The factorial of", myNumber, "is", factorial(myNumber));
