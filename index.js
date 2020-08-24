
const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");
const generateHTML = require("./generateHTML");

const questions = [
  {
      type: "input",
      name: "title",
      message: "What is your project title?"
  },
  {
      type: "input",
      name: "description",
      message: "Please provide your project's description"
  },
  {
      type: "input",
      name: "licence",
      message: "Please provide the project licence or your badge link"
  },
  {
      type: "input",
      name: "test",
      message: "Please provide the project tests"
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