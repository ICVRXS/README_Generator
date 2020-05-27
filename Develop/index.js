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
    fs.writeFile(fileName, generateMarkdown(data), function(err){
        if(err){
            console.log("ERROR");
        }else{
            console.log("SUCCESS");
        }
    });
}

function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
        writeToFile("README.md", response);
        console.log (generateMarkdown(response));
    });
}

init();
