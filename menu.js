const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");

const init = () => {
  console.log(
    chalk.cyanBright(
      figlet.textSync("React +", {
        font: "Impossible",
        horizontalLayout: "default",
        verticalLayout: "default",
      })
    )
  );
  console.log(chalk.yellowBright('With contribution from: thealpha93'))
};

const askQuestions = () => {
  const questions = [
    {
      name: "appName",
      type: "input",
      message: "Enter the name of the app: ",
      validate: function (text) {
        if (!text) {
          return 'Must Provide an app name';
        }
        return true;
      },
    },
    {
      type: "list",
      name: "boilerPlate",
      message: "Choose a template",
      choices: ["Default", "Redux Saga"],
      filter: function (val) {
        return val;
      },
    },
  ];
  return inquirer.prompt(questions);
};

module.exports = async (error) => {
  // show script introduction
  init();
  if(error){
    console.log(
      chalk.redBright("Missing required argument 'what'")
    );
    console.log("\nTo generate an app type:")
    console.log(chalk.cyan("\treactgen generate app"))
    process.exit()
  }
  // ask questions
  return await askQuestions();
};
