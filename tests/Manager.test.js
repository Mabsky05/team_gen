const Employee = require('../lib/Employee.js')
const Manager = require('../lib/Manager.js');

describe('Manager', () => {
    describe('New Manager', () => {
        it('should match name, ID, email and OfficeNumber', () => {
            const manager = new Manager("Employee_name", "ID", "email", 'OfficeNumber') //(em_name, id, email)
            expect(manager.em_name).toEqual("Employee_name");
            expect(manager.id).toEqual("ID");
            expect(manager.email).toEqual("email");
            expect(manager.getRole()).toBe('Manager')

        });
    });
});
