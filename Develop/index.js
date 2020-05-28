const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
    type: "input",
    message: "What is the name of your project?",
    name: "projectName"
    },
    {
    type: "input",
    message: "Write a description for your project",
    name: "projectDesc"
    },
    {
    type: "input",
    message: "How is your project installed?",
    name: "projectInstall"
    },
    {
    type: "input",
    message: "What are the practical uses for this project?",
    name: "projectUsage"
    },
    {
    type: "input",
    message: "Are there any licenses associated with this project?",
    name: "projectLicense"
    },
    {
    type: "input",
    message: "List all contributors here",
    name: "projectContribute"
    },
    {
    type: "input",
    message: "What testing was done on this project?",
    name: "projectTest"
    },
{
    type: "input",
    message: "What are some FAQs about your project?",
    name: "projectFaq"
    },
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
