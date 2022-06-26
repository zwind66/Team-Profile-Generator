const Intern = require('../lib/Intern'); // <-- this is the file we're testing

test ('creates a intern object', () => {
    const intern = new Intern('John', '1', 'test@test.com', 'intern', 'school');    // create a new intern object

    expect(intern.name).toBe('John'); // expect the name property to be 'John'
    expect(intern.id).toBe('1'); // expect the id property to be '1'
    expect(intern.email).toBe('test@test.com'); // expect the email property to be '
    expect(intern.jobTitle).toBe('intern'); // expect the jobTitle property to be 'intern'
    expect(intern.school).toBe('school'); // expect the school property to be 'school'
}); // end of test