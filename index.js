
const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");
const generate = require('./generateMarkdown');

const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter project title."
},
{
    type: "input",
    name: "description",
    message: "Enter project description."
},
{
    type: "input",
    name: "contents",
    message: "Enter Table of Contents"
},
{
    type: "input",
    name: "intallation",
    message: "Enter installation steps."
},
{
    type: "input",
    name: "usage",
    message: "Enter project usage."
},
{
    type:"input",
    name: "license",
    message:"Enter licensing information"
},
{
    type: "input",
    name: "contributors",
    message: "Enter contributors."
},
{
    type: "input",
    name: "tests",
    message: "Enter tests."
},
{
    type: "input",
    name: "username",
    message: "What is your github user name?"
},
{
    type: "input",
    name: "repo",
    message: "What is your repo link?"
},
];

inquirer
  .prompt(questions)
  .then(function(data){
      const queryUrl = `https://api.github.com/users/${data.username}`;

      axios.get(queryUrl).then(function(res) {
          
          const githubInfo = {
              githubImage: res.data.avatar_url,
              email: res.data.email,
              profile: res.data.html_url,
              name: res.data.name
          };
          
        fs.writeFile("README.md", generate(data, githubInfo), function(err) {
          if (err) {
            throw err;
          };
  
          console.log("Read Me created successfully");
        });
      });

});

function init() {

}

init();