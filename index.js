const blankhtml = "<!DOCTYPE html>"
const inquirer = require('inquirer')
const fs = require('fs')

class Employee {
    constructor(em_name, id, email) {
      this.em_name = em_name;
      this.id = id;
      this.email = email;
    }
}

class Manager extends Employee {
    constructor(em_name, id, email, OfficeNumber) {
        super(em_name, id, email,);
        this.OfficeNumber = OfficeNumber
    }
}

class Engineer extends Employee {
    constructor(em_name, id, email, Github) {
        super(em_name, id, email);
        this.Github = Github
    }
}

class Intern extends Employee {
    constructor(em_name, id, email, school) {
        super(em_name, id, email);
        this.school = school
    }
}

const promptEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Em_name',
            message: "Input Employee Name:",
        },
        {
            type: 'input',
            name: 'id',
            message: "Input Employee ID:",
        },
        {
            type: 'input',
            name: 'Email',
            message: "Input Employee Email:",
        },
    ])
}

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Em_name',
            message: "Input Manager Name:",
        },
        {
            type: 'input',
            name: 'id',
            message: "Input Manager ID:",
        },
        {
            type: 'input',
            name: 'Email',
            message: "Input Manager Email:",
        },
        {
            type: 'input',
            name: 'OfficeNumber',
            message: "Input Manager Office Number:",
        },
    ])
}


const promptAddEng = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'Option1',
            message: "Add Engineer?",
            choices: [ "Yes", "No" ],
        },
    ]).then(function (answers) {
        if (answers.Option1 === "Yes") {
            return promptEngineer();
        }
    });
}

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Em_name',
            message: "Input Engineer Name:",
        },
        {
            type: 'input',
            name: 'id',
            message: "Input Engineer ID:",
        },
        {
            type: 'input',
            name: 'Email',
            message: "Input Engineer Email:",
        },
        {
            type: 'input',
            name: 'Github',
            message: "Input Engineer Github:",
        },
    ]).then (function (answers) {
        let  = new Engineer (answers.Em_name, answers.id, answers.Email, answers.Github);
        (fs.appendFileSync("sample.html",         
        `<div class="col-sm 2nd_column">
        <div class="card" style="width: 18rem;">
        <h5 class="list-group list-group-flush">&nbsp The Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><h6>Name</h6>${answers.Em_name}</li>
                <li class="list-group-item"><h6>ID</h6>${answers.id}</li>
                <li class="list-group-item"><h6>Email</h6>${answers.Email}</li>
                <li class="list-group-item"><h6>Git</h6><a href="github.com/${answers.Github}" target=_blank>${answers.Github}</a>
                </li>
            </ul>
        </div>
    </div>`
        ))
    }); 
}

const promptAddInt = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'Option1',
            message: "Add Intern?",
            choices: [ "Yes", "No" ],
        },
    ]).then(function (answers) {
        if (answers.Option1 === "Yes") {
            return promptIntern();
        }
    });
}

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Em_name',
            message: "Input Intern Name:",
        },
        {
            type: 'input',
            name: 'id',
            message: "Input Intern ID:",
        },
        {
            type: 'input',
            name: 'Email',
            message: "Input Intern Email:",
        },
        {
            type: 'input',
            name: 'school',
            message: "Input Intern School:",
        },
    ]).then (function (answers) {
        let  = new Intern(answers.Em_name, answers.id, answers.Email, answers.school);
        (fs.appendFileSync("sample.html",         
        `<div class="col-sm 2nd_column">
        <div class="card" style="width: 18rem;">
        <h5 class="list-group list-group-flush">&nbsp The Intern</h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><h6>Name</h6>${answers.Em_name}</li>
            <li class="list-group-item"><h6>ID</h6>${answers.id}</li>
            <li class="list-group-item"><h6>Email</h6>${answers.Email}</li>
            <li class="list-group-item"><h6>School</h6>${answers.school}</li>
          </ul>
        </div>
      </div>
    </div>`
        ))
    }); 
}

const createEmployee = () => {
    promptManager()
    .then (function (answers) {
        let  = new Manager(answers.Em_name, answers.id, answers.Email, answers.OfficeNumber)
        fs.writeFileSync("sample.html", 
`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link
        href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
        rel="stylesheet"
        />
        <link rel="stylesheet" href="./assets/style.css" />
        <title>Build Your Team!</title>
    </head>
        <div class="jumbotron jumbotron-fluid">
            <div class="container text-center">
                <h1 class="display-4">The Team</h1>
                <p class="lead">Manager + Engineer and / or Intern</p>
            </div>
        </div>

        <div class="container-fluid">
        <div class="row">
        
        <div class="col-sm 1st_column">
            <div class="card" style="width: 18rem;">
                <h5 class="list-group list-group-flush">&nbsp The Manager</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><h6>Name</h6>${answers.Em_name}</li>
                        <li class="list-group-item"><h6>ID</h6>${answers.id}</li>
                        <li class="list-group-item"><h6>Email</h6>${answers.Email}</li>
                        <li class="list-group-item"><h6>Office Number</h6>${answers.OfficeNumber}</li>
                    </ul>
            </div>
        </div>`      
        )    
    }) 
    .then (promptAddEng)
    .then (promptAddInt)
    .catch ()   
}


createEmployee()



