const Employee = require('./Employee.js')
class Manager extends Employee {
    constructor(em_name, id, email, OfficeNumber) {
        super(em_name, id, email,);
        this.OfficeNumber = OfficeNumber
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

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;

