const myInches = 12;
const myFeet = myInches / 12;
console.log(myFeet);

const dataInches = 144;
const dataFeet = dataInches / 12;
console.log("Data Feet:", dataFeet);

function inchToFeet(inches) {
  const feet = inches / 12;
  return feet;
}

const inches = 144;
const feet = inchToFeet(inches);
console.log(inches, "inches =", feet.toFixed(2), "feet");
