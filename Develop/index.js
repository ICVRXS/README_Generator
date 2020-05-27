const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
    type: "input",
    message: "What is the name of your project?",
    name: "projectName"
    }
];

function writeToFile(fileName, data) {
}

function init() {
    inquirer.prompt(questions).then((response) => {
        writeToFile("README.md", response);
    });
}

init();
