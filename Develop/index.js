// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What's the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What's the description?",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "How does your application work?",
  },
  {
    type: "list",
    name: "license",
    message: "What is the license for your application?",
    choices: ["MIT", "Mozilla", "IBM", "Apache", "BSD", "None"],
  },
  {
    type: "input",
    name: "credits",
    message:
      "Any collaborators or tutorials that helped you with completing this project?",
  },
  {
    type: "input",
    name: "contribution",
    message:
      "Any contributing guidelines?",
  },
  {
    type: "input",
    name: "tests",
    message: "What are the test instructions?",
  },
  {
    type: "input",
    name: "github_profile",
    message: "What is your github profile?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// Create a function to write README file
inquirer.prompt(questions).then(answers => {

    let data = generateMarkdown(answers)
    
    fs.writeFile("sample-readme.md", data, () => {
      console.log("Successfully generated a sample README file.");
    });
});