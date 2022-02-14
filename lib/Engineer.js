const Employee = require('./Employee.js')
class Engineer extends Employee {
    constructor(em_name, id, email, Github) {
        super(em_name, id, email,);
        this.Github = Github
    }
    getName() {
        return this.em_name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getGit() {
        return this.Github
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;