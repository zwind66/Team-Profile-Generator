const Employee = require('../lib/Employee'); // import the Employee class

test('creates a employee object', () => {
  const employee = new Employee('John', '1', 'test@test.com', 'employee'); // create a new employee object

    expect(employee.name).toBe('John'); // expect the name property to be 'John'
    expect(employee.id).toBe('1');  // expect the id property to be '1'
    expect(employee.email).toBe('test@test.com');   // expect the email property to be 'test@test.com'
    expect(employee.jobTitle).toBe('employee'); // expect the jobTitle property to be 'employee'
}); // end of test


