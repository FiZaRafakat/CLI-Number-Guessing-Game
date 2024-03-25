#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.italic.blue("Welcome To The Fiza's Number Guessing game"));
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess a Number between 1-10 : ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log(chalk.bold.yellowBright("CONGRATULATIONS! You guess right number."));
    process.exit();
}
else {
    console.log(chalk.bold.red(" SORRY! You guess wrong number. TRY AGAIN "));
}
