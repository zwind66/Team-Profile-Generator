 // import the Employee class
 const Employee = require('../lib/Employee');

// test the Employee class
test('creates a employee object', () => {
  const employee = new Employee(); 

  expect(typeof employee).toBe('object');
});

// test getName()
test(' gets the name of the employee', () => {
  const employee = new Employee('John', 1, 'John@test.com');

  expect(employee.getName()).toBe('John');
});

  // test getId()
test(' gets the id of the employee', () => {
  const employee = new Employee('John', 1, 'John@test.com');

  expect(employee.getId()).toBe(1);
});

  // test getEmail()
test(' gets the email of the employee', () => {
  const employee = new Employee('John', 1, 'John@test.com');

  expect(employee.getEmail()).toBe('John@test.com');
});

  // test getRole()
test(' gets the role of the employee', () => {
  const employee = new Employee('John', 1, 'John@test.com');

  expect(employee.getRole()).toBe('Employee');
});





