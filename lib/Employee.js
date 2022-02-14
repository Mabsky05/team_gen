class Employee {
    constructor(em_name, id, email) {
      this.em_name = em_name;
      this.id = id;
      this.email = email;
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return 'Employee'
    }
}

module.exports = Employee;