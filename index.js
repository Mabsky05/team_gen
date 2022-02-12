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
        super()
      this.Github = Github
    }
}

class Intern extends Employee {
    constructor(em_name, id, email, school) {
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

const promptAddEng = (answer) => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'Option1',
            message: "Add Engineer?",
            choices: ["Yes", "No"],
            validate: selected => {
                if (selected == "Yes" ) {
                    promptEngineer()
                }

            }
        },
    ])
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
            name: 'OfficeNumber',
            message: "Input Engineer Office Number:",
        },
    ])
}


const createEmployee = () => {
    promptManager()
    .then (function (answers) {
        let  = new Manager(answers.Em_name, answers.id, answers.Email)
        let coco = blankhtml + answers.Em_name
        fs.writeFileSync("sample.md", coco)    
    }) 
    .then (promptAddEng)
 
    .then ()
    .catch ()   
}


createEmployee()



//access data as string, make html file
// const tohtml = () => {
//     create()
//     .then((data) => console.log(data)
//     )}


//     create()

// tohtml()


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