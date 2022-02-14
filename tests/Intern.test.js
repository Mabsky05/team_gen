const Employee = require('../lib/Employee.js')
const Intern = require('../lib/Intern.js');

describe('Intern', () => {
    describe('New Intern', () => {
        it('should match name, ID, email and school', () => {
            const intern = new Intern("Employee_name", "ID", "email", 'school') //(em_name, id, email)
            expect(intern.em_name).toEqual("Employee_name");
            expect(intern.id).toEqual("ID");
            expect(intern.email).toEqual("email");
            expect(intern.getSchool()).toEqual('school');
            expect(intern.getRole()).toBe('Intern');

        });
    });
});