const Employee = require('../lib/Employee.js')
const Engineer = require('../lib/Engineer.js');

describe('Engineer', () => {
    describe('New Engineer', () => {
        it('should match name, ID, email and Github', () => {
            const engineer = new Engineer("Employee_name", "ID", "email", 'Github') //(em_name, id, email)
            expect(engineer.em_name).toEqual("Employee_name");
            expect(engineer.id).toEqual("ID");
            expect(engineer.email).toEqual("email");
            expect(engineer.getGit()).toBe('Github');
            expect(engineer.getRole()).toBe('Engineer');

        });
    });
});