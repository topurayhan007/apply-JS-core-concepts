// 1. Variable
var myName = "Topu";

// Math Operations: +, -, *, /
// shorthand: +=, --, *=, /=, ++

// 2. Array
var friends = ["abul", "babul", "cabul", "dabul", "ebul"];
// Index         0        1        2        3       4

var thirdFriend = friends[2];
friends[3] = "dambool";

// 3. conditionals
// >, <, >=, <=, ==, ===, !=, !==

if (friends.length < 2) {
  console.log("You don't have any friend");
} else {
}

// 4. Loop
var number = 0;
while (number <= 6) {
  console.log(number);
  number++;
}

for (var i = 0; i <= 10; i++) {}

// 5. Function
function isMoonUp(time) {
  if (time > 7) {
    return true;
  }
}

// 6. Object
var jantus = {
  height: 60,
  romanticism: "heavy",
  fathersMoney: "rich",
};
