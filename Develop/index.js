// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'name',
    message: 'What is the name of your project?',
},
{
    type: 'checkbox',
    message: 'Added sections?',
    name: 'sections',
    choices: ['Description', 'Installation', 'Usage', 'Contributing', 'Tests'],
},
{
    type: 'list',
    message: 'what is the license for your application?',
    name: 'license',
    choices: ['None', 'MIT', 'GNU', 'Mozilla Public'],
},
{
    type: 'input',
    name: 'github',
    message: 'Please enter GitHub username.'
},
{
    type: 'input',
    name: 'email',
    message: 'Please enter email address.'
}];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
// init();
