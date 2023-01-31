function findFactorial(number) {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

let myNumber = 5;
console.log("The factorial of", myNumber, "is", findFactorial(myNumber));
