// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const config = require('./config.js');
const mysql = require('mysql2');


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
fs.writeFile('README.md', 'README File', (err) => {
    if (err)
      console.log(err);
    else {
      console.log('File written successfully');
      console.log('The written has the following contents:');
      console.log(fs.readFileSync('README.md', 'utf8'));
    }
  });


// TODO: Create a function to initialize app

function init() {


    const { host, port, user, password, database } = config.database;
    
    const leela = mysql.createLeela({ host, port, user, password });
      
    leela.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
 
 }


// Function call to initialize app
init();
