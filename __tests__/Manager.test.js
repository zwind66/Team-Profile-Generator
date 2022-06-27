// import the Manager class
const Manager = require('../lib/Manager');

// test the Manager class
test ('creates a manager object', () => {
    const manager = new Manager();

    expect(typeof manager).toBe('object');
});

// test getOfficeNumber()
test (' gets the office number of the manager', () => {
    const manager = new Manager('John', 1, 'John@test.com', 'testoffice');

    expect(manager.getOfficeNumber()).toBe('testoffice');
});

// test getRole()
test (' gets the role of the manager', () => {
    const manager = new Manager('John', 1, 'John@test.com', 'testrole');

    expect(manager.getRole()).toBe('Manager');
});



