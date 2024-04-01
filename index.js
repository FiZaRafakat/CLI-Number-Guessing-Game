#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import clear from "clear";
clear();
console.log(chalk.bold.italic.magentaBright("\n \t Welcome To The Fiza's Number Guessing game \n"));
const randomNumber = Math.floor(Math.random() * 10 + 1);
let userLife = 3;
while (true) {
    console.log(chalk.underline.green(userLife + " Lives Remaining \n"));
    if (userLife !== 0) {
        const answers = await inquirer.prompt([
            {
                name: "userGuessedNumber",
                type: "number",
                message: "Please Guess a Number between 1-10 : ",
            },
        ]);
        if (answers.userGuessedNumber > 0 && answers.userGuessedNumber <= 10) {
            const difference = Math.abs(randomNumber - answers.userGuessedNumber);
            if (difference === 0) {
                console.log(chalk.italic.yellowBright("\n \tCONGRATULATIONS! You guess right number.\n"));
                break;
            }
            else if (difference < 2) {
                console.log(chalk.bold.black.italic("\n \tSo close! Just one number away\n"));
                userLife--;
            }
            else if (difference <= 2) {
                console.log(chalk.bold.italic.black("\n \t You are close Keep going!\n"));
                userLife--;
            }
            else {
                console.log(chalk.bold.italic.black("\n \t You are far away.Try Again\n"));
                userLife--;
            }
        }
        else {
            console.log(chalk.red.bold("\n Please Enter a valid number within the given range\n"));
        }
    }
    else {
        console.log(chalk.italic.red("\n \t Awwww! Game over... The number was " + randomNumber + "\n"));
        break;
    }
}
