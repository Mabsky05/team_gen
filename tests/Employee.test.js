const Employee = require('../lib/Employee.js')

describe('Employee', () => {
    describe('New Employee', () => {
        it('should match name, ID, and email', () => {
            const employee = new Employee("Employee_name", "ID", "email") //(em_name, id, email)
            expect(employee.getName()).toEqual('Employee_name')
            expect(employee.getId()).toEqual('ID')
            expect(employee.getEmail()).toEqual('email')
            expect(employee.getRole()).toBe('Employee')

        });
    });
});