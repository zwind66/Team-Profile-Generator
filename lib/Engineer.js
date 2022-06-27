// import the Employee class
const Employee = require('./Employee');

// create a constructor for the Engineer class
class Engineer extends Employee {
    constructor(name, id, email, github,) {
        // call the Employee constructor and pass the jobTitle property as 'engineer'
        super(name, id, email,);

        // set the github property of the object
        this.github = github;
    }
    // return the github property of the object
    getGithub() {
        return this.github;
    }
    // return the role property of the object
    getRole() {
        return 'Engineer';
    }
}

// export the Engineer class
module.exports = Engineer; 