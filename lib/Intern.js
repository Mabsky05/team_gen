const Employee = require('./Employee.js')
class Intern extends Employee {
    constructor(em_name, id, email, school) {
        super(em_name, id, email);
        this.school = school
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

    getSchool() {
        return this.school
    }

    getRole() {
        return 'Intern'
    }
}

module.exports = Intern;
