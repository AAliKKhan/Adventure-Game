import inquirer from "inquirer";
import chalk from "chalk";
const randomNumber = Math.floor(Math.random() * 3 + 1);
const startGame = async () => {
    const question1 = await inquirer.prompt([{
            type: "list",
            name: "action",
            message: chalk.blue("Select one option"),
            choices: ["Start Game", "Exit"]
        }]);
    if (question1.action === "Start Game") {
        const question2 = await inquirer.prompt([{
                type: "list",
                name: "direction",
                message: chalk.green("Select one direction"),
                choices: ["North", "South"]
            }]);
        if (question2.direction === "North") {
            const questionNorth1 = await inquirer.prompt([{
                    type: "list",
                    name: "action",
                    message: chalk.red("There is a monster 🐲, you are in trouble!"),
                    choices: ["Run", "Fight"]
                }]);
            if (questionNorth1.action === "Run") {
                console.log(chalk.yellow("The monster is attacking! Run fast"));
                setTimeout(() => {
                    console.log(chalk.yellow("Your health is lowering"));
                    setTimeout(() => {
                        console.log(chalk.red("The monster killed you 😔"));
                    }, 2000);
                }, 2000);
            }
            else if (questionNorth1.action === "Fight") {
                const questionNorth5 = await inquirer.prompt([{
                        type: "list",
                        name: "Fight1",
                        message: chalk.red("Select one weapon to fight"),
                        choices: ["Gun", "Bow"]
                    }]);
                await inquirer.prompt([{ type: "input", name: "Fight2", message: chalk.yellow("Shoot") }]);
                console.log(chalk.yellow("Monster's health is getting low"));
                await inquirer.prompt([{ type: "input", name: "Fight4", message: chalk.yellow("Shoot") }]);
                console.log(chalk.yellow("Monster's health is getting low"));
                console.log(chalk.green("Monster died, you are safe"));
            }
        }
        else if (question2.direction === "South") {
            const questionSouth1 = await inquirer.prompt([{
                    type: "list",
                    name: "action",
                    message: chalk.red("There is a trap on this path, step on the correct block to survive"),
                    choices: [1, 2, 3, 4]
                }]);
            if (parseInt(questionSouth1.action) === randomNumber) {
                console.log(chalk.green("Congratulations! You stepped on the correct block and survived."));
            }
            else {
                console.log(chalk.red("Oops! You stepped on the wrong block and fell into the trap, Game Over."));
            }
        }
    }
    else {
        console.log(chalk.blue("Game exited. Goodbye!"));
    }
};
startGame();
