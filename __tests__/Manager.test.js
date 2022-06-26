const Manager = require('../lib/Manager');

test ('creates a manager object', () => {
    const manager = new Manager('John', '1', 'test@test.com', 'manager', '12345'); // create a new manager object

    expect(manager.name).toBe('John'); // expect the name property to be 'John'
    expect(manager.id).toBe('1'); // expect the id property to be '1'
    expect(manager.email).toBe('test@test.com'); // expect the email property to be 'test@test.com'
    expect(manager.jobTitle).toBe('manager'); // expect the jobTitle property to be 'manager'
    expect(manager.officeNumber).toBe('12345'); // expect the officeNumber property to be '12345'
}); // end of test

