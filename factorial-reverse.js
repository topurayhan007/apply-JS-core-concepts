function factorial(number) {
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result *= i;
  }
  return result;
}

const myNumber = 6;
console.log("The factorial of", myNumber, "is", factorial(myNumber));
