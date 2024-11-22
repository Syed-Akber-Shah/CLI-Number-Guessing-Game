#! /usr/bin/env node
import inquirer from "inquirer";
// 1. computer will generate a random number.
// 2. user input for guessing number.
// 3. compare user input with computer generated number and show result.
const randomNumber = Math.floor(Math.random() * 6 + 1);
//floor function used to round off numbers guessesd by Math.random(). Math.random function guessed numbers b/w 0to1. e.g 0.23556 so we use Math.floor()
// to round off it and now it will become 0. so finally we use * 6 and our answer will be b/w 0 to 5 e.g 2 or 4 etc.
// to avoid 0 in our answer we used + 1 after *6
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Guess a number between 1 to 5"
    },
]);
console.log(answers);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed the correct number.");
}
else {
    console.log("Better luck next time!");
}
