
/*
Problem 1:

Write a program that uses a loop to print out (using console.log()) the multiplication table (12 levels) of a provided number

Variables Required (feel free to add your own variables if needed):
baseNumber (number)

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. Given the following:
    baseNumber = 2

   Result:
    0
    2
    4
    6
    8
    10
    12
    14
    16
    18
    20
    22
    24
************/
//
// Add your code below this line

console.log('Problem 1:')

let result = 0;
let baseNumber = 2;

for(i =0; i <13;i++) {
  result = baseNumber*i;
  console.log(result);
}

// Add your code above this line

console.log('')
console.log('-----------------')

/***********

Problem 2:

Write a program that prints (using console.log()) the largest number in a given array

Variables Required (feel free to add your own variables if needed):
numbers (array)
currentLargestNumber (number)

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. Given the following:
    values = [57, 13, 4, 38]

   Result: 57

2. Given the following:
    values = [3, 48, 29, 12, 18]

   Result: 48

************/
console.log('Problem 2:')
2-1
//for loop

values = [57, 13, 4, 38]


for( let i = 0; i < array.length; i++){
if(largest < values[i]) {
largest = array[i];
}}
console.log(largest);

console.log(biggest);


//
2-2
values = [3, 48, 29, 12, 18]


for( let i = 0; i < array.length; i++){
if(largest < values[i]) {
largest = array[i];
}}
console.log(largest);

console.log(biggest);


//Add your code above this line

console.log('')
console.log('-----------------')

/***********
//
// Problem 3:

// Write a program that prints out (using console.log()) the winner of a rock paper scissors game between two players
//
// - if the playerA chooses scissors and playerB chooses rock, playerB wins
// - if the playerA chooses scissors and playerB chooses scissors, game is a tie
// - if the playerA chooses paper and playerB chooses rock, playerA wins
// - if the playerA chooses rock and playerB chooses paper, playerB wins
// - etc (program should account for all available scenarios)
//
// Variables Required (feel free to add your own variables if needed):
// playerAChoice (string)
// playerBChoice (string)
//
// Test Cases:
// Use the following test cases to confirm your program meets the success criteria
// use && write again

// 1. Given the following:
//     playerAChoice = "rock"
//     playerBChoice = "paper"
//
//    Result: "playerB wins"
//
// 2. Given the following:
//     playerAChoice = "scissors"
//     playerBChoice = "scissors"
//
//    Result: "tie"
//
// 3. Given the following:
//     playerAChoice = "scissors"
//     playerBChoice = "paper"
//
//    Result: "playerA wins"
// ************/

console.log('Problem 3:')

// Add your code below this line

//() is optional

const getUserChoice = () => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
   return userInput;
   } else {
    console.log('error, please type : rock paper or scissors')
  }
}

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0 :
      return 'rock'
    break;

    case 1 :
      return 'paper'
    break

    case 2 :
      return 'scissors'
    break

  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'This game is a tie!'
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return "sorry, computer won"
    } else {
      return 'you won'
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return "Sorry, computer won!"
    } else {
      return "congratulations, you won!"
    }
  }

const playGame = () => {
  const playerA = getUserChoice('paper');
  const playerB = getComputerChoice();
  console.log(determineWinner(playerA,playerB))
};

playGame


// Add your code above this line

console.log('')
console.log('-----------------')
