// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')



// TODO: Create an array of questions for user input
const questions = [
        {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is your project\'s name?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please write a short description of your projet:',
      name: 'projectDescription',
    },
    {
      type: 'list',
      message: 'What kind of license should your project have?',
      choices: ['MIT License', 'BSD 2-Clause', "GNU GPLv2"],
      name: 'license',
    },
    {
      type: 'input',
      message: 'What command should be run to install dependencies?',
      name: 'dependencies',
    },
    {
      type: 'input',
      message: 'What command should be run to run tests?',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'What does the user need to know about using the repo?',
      name: 'userInfo',
    },
    {
      type: 'input',
      message: 'What does the user need to know about contributing to the repo?',
      name: 'contributingInfo',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err){
            return console.log(err);
        }
        console.log("README.md file successfully created!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(function(data) {
        writeToFile('./output/README.md', generateMarkdown(data))
    })
}

// Function call to initialize app
init();
