const Engineer = require('../lib/Engineer'); // import the Engineer class

test('creates a engineer object', () => {
    const engineer = new Engineer('John', '1', 'test@test.com', 'engineer', 'github'); // create a new engineer object

    expect(engineer.name).toBe('John'); // expect the name property to be 'John'
    expect(engineer.id).toBe('1'); // expect the id property to be '1'
    expect(engineer.email).toBe('test@test.com'); // expect the email property to be 'test@test.com'
    expect(engineer.jobTitle).toBe('engineer'); // expect the jobTitle property to be 'engineer'
    expect(engineer.github).toBe('github'); // expect the github property to be 'github'
}); // end of test