const inquirer = require('inquirer')
const fs = require('fs')

class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
    getname() {
        return inquirer.prompt([ {type: 'input',
        name: 'Title',
        message: "Input Project Title:",}])
    
    }
    getID() {
        //function placeholder
    }
    getEmail() {
        //function placeholder
    }
    getRole() {
        return Employee
    }
  }

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


Employee.getname()
