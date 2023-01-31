function getSum(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += number[i];
  }
  return sum;
}

function getOddNumberOfAnArray(numbers) {
  let oddArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
      oddArray.push(numbers[i]);
    }
  }
  return oddArray;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
console.log("The array:", myNumbers);
console.log("The sum of the array:", getSum(myNumbers));

const oddArray = getOddNumberOfAnArray(myNumbers);
console.log("All odd numbers of the array:", oddArray);
console.log("The sum of odd numbers in the array:", getSum(oddArray));
