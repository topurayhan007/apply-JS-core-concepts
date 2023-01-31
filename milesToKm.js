function milesToKilometer(miles) {
  const kilometer = miles * 1.609;
  return kilometer;
}

const miles = 14;
const kilo = milesToKilometer(miles);
console.log(miles, "miles =", kilo.toFixed(2), "km");
