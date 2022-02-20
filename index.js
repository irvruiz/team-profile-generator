const inqurier = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const { messageParent } = require("jest-worker");
const { data } = require("browserslist");
const { array } = require("yargs");
var engineerarr = [];
var managerArray = [];
var internArray = [];
var employeeArray = [];
var engineerArray = [];
var htmlCode;
var endofHTML;

promptManager();

function promptManager() {
  inqurier
    .prompt([
      {
        type: "input",
        message: "what is your name",
        name: "name",
      },
      {
        type: "input",
        message: "what is your id",
        name: "id",
      },
      {
        type: "input",
        message: "what is your email",
        name: "email",
      },
      {
        type: "input",
        message: "what is your office number",
        name: "officeNumber",
      },
    ])
    .then((data) => {
      console.log("here");
      managerArray.push(
        new Manager(data.name, data.id, data.email, data.officeNumber)
      );
      selectRole();
    });
}
function promptIntern() {
  inqurier
    .prompt([
      {
        type: "input",
        message: "what is your name",
        name: "name",
      },
      {
        type: "input",
        message: "what is your id",
        name: "id",
      },
      {
        type: "input",
        message: "what is your email",
        name: "email",
      },
      {
        type: "input",
        message: "what is your school",
        name: "school",
      },
    ])
    .then((data) => {
      console.log("here3");
      internArray.push(new Intern(data.name, data.id, data.email, data.school));
      selectRole();
    });
}
function promptEngineer() {
  inqurier
    .prompt([
      {
        type: "input",
        message: "what is your name",
        name: "name",
      },
      {
        type: "input",
        message: "what is your id",
        name: "id",
      },
      {
        type: "input",
        message: "what is your email",
        name: "email",
      },
      {
        type: "input",
        message: "what is your github",
        name: "github",
      },
    ])
    .then((data) => {
      engineerArray.push(
        new Engineer(data.name, data.id, data.email, data.github)
      );
      selectRole();
    });
}
