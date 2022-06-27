// import the Intern Class
const Intern = require('../lib/Intern'); 

// test the Intern class
test ('creates a intern object', () => {
    const intern = new Intern();

    expect(typeof intern).toBe('object');
});

// test getSchool()
test (' gets the school of the intern', () => {
    const intern = new Intern('John', 1, 'John@test.com', 'testschool');

    expect(intern.getSchool()).toBe('testschool');
});

// test getRole()
test (' gets the role of the intern', () => {
    const intern = new Intern('John', 1, 'John@test.com', 'testschool');

    expect(intern.getRole()).toBe('Intern');
});

