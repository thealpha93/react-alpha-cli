const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");

const init = () => {
  const fonts = [
    "Star Wars",
    "Standard",
    "Slant",
    "Pagga",
    "Mirror",
    "Impossible",
    "DOS Rebel",
    "Doom",
    "Doh",
    "Bulbhead",
  ];
  console.log(
    chalk.green(
      figlet.textSync("React +", {
        font: "Doh",
        horizontalLayout: "default",
        verticalLayout: "default",
      })
    )
  );
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

module.exports = async () => {
  // show script introduction
  init();
  // ask questions
  const answers = await askQuestions();
  console.log(answers)
  return answers
};
