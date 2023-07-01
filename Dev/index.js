// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Project Name"
  },

  {
    type: "input",
    name: "description",
    message: "Enter Project Description"
  },

  {
    type: "input",
    name: "usage",
    message: "Enter Usage Info"
  },

  {
    type: "input",
    name: "installation",
    message: "Enter Installation Info"
  },

  {
    type: "checkbox",
    name: "license",
    message: "Select License:",
    choices: [
    "MIT",
    "GNU AGPLv3",
    "GNU GPLv3",
    "GNU LGPLv3",
    "Apache 2.0",
    "Boost Software 1.0",
    "Mozilla",
    "None"
]
  },

  {
    type: "input",
    name: "contribution",
    message: "Enter the Contribution Info",
    
  },

  {
    type: "input",
    name: "creator",
    message: "Provide Your GitHub Username",
  },
  {
    type: "input",
    name: "email",
    message: "Provide Your Email Address",
  },

  {
    type: "input",
    name: "test",
    message: "Enter the Test Info",
   
  },
  {
    type: "input",
    name: "question",
    message: "Enter any Questions",
   
  }
]

function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), function (err) {
      if (err) {
          return console.log(err);
      }
  });
}



function init() {
  inquirer.prompt(questions).then((data) => {
     // console.log(JSON.stringify(data, null, " "))
      writeToFile("./Fin/README.md", data);
  });
}

init();