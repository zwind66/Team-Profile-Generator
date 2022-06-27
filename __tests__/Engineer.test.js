// import the Engineer class
const Engineer = require('../lib/Engineer');

// test the Engineer class
test('creates a engineer object', () => {
    const engineer = new Engineer();

    expect(typeof engineer).toBe('object');
});

// test getGithub()
test(' gets the github of the engineer', () => {
    const engineer = new Engineer('John', 1, 'John@test.com', 'testgithub');

    expect(engineer.getGithub()).toBe('testgithub');
});

// test getRole()
test(' gets the role of the engineer', () => {
    const engineer = new Engineer('John', 1, 'John@test.com', 'testrole');

    expect(engineer.getRole()).toBe('Engineer');
});

