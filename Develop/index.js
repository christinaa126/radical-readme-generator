// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: import the generateMarkdown function from utils/generateMarkdown.js
const generateMarkdown = require("./util/generateMarkdown");
// TODO: Write code to get user input, generate markdown, and save it to a file.


const init = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What was your motivation for the project, what problem does it solve, what did you learn?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps to installing your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for usage. Provide screenshots here as needed:',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Enter information of contributors , if any:',
      },
      {
        type: 'list',
        name: 'license',
        choices: ['HTML', 'CSS', 'Javascripts', 'Node'],
      },
      {
        type: 'input',
        name: 'bagdes',
        message: 'Enter any badges:',
      },
      {
        type: 'input',
        name: 'features',
        message: 'Enter any features:',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Enter any contribution guidelines:',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Enter any test instructions:',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
      },
    ])
    .then((answers) => {
      const readMeContent = generateMarkdown(answers);
  
      fs.writeFile('README.md', readMeContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
      );
    });
};

init();

// readme sections Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions