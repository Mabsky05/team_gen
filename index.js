const inquirer = require('inquirer')
const fs = require('fs')

const promptUser = () => {
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

const create = () => {
    promptUser()
    .then (function (answers) {
        let empys = new Employee(answers.Em_name, answers.id, answers.Email)
        console.log(empys); 
        console.log(answers.Em_name);
    }) 
    .then ()
    .catch ()   
};

create()

class Employee {
    constructor(em_name, id, email) {
      this.em_name = em_name;
      this.id = id;
      this.email = email;
    }
}


//prompt, then store in class, create employees, (prompt if add'l) then build html, test  

// const miguel = new Employee('miguel', 1, 'miguel@icloud.com');
// miguel.getName().then(data => {
//    console.log(data)
// })


/*

const newbie = new Employee()


  class Manager {
    constructor(name, id, email, officeNumber) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.officeNumber = officeNumber
    }
    getname() {
        //function placeholder
    }
    getID() {
        //function placeholder
    }
    getEmail() {
        //function placeholder
    }
    getRole() {
        return Manager
    }
  }

  class Engineer {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.github = github;
    }
    getname() {
        //function placeholder
    }
    getID() {
        //function placeholder
    }
    getEmail() {
        //function placeholder
    }
    getGithub() {
        return github
    }
    getRole() {
        return Engineer
    }
  }


  class Intern {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.school = school;
    }
    getname() {
        //function placeholder
    }
    getID() {
        //function placeholder
    }
    getEmail() {
        //function placeholder
    }
    getRole() {
        return Intern
    }
  }



 CODE SAMPLES FOR RUNNING INQUIRER
const miguel = new Employee('miguel', 1, 'miguel@icloud.com');
miguel.getName().then(data => {
   console.log(data)
})

Employee.prototype.getName().then((value) => {
    console.log(value)
})

*/