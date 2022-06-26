const Employee = require('./Employee');// import the Employee class

class Engineer extends Employee {
    constructor(name, id, email, jobTitle, github,) { // create a constructor for the Engineer class
        super(name, id, email, jobTitle); // call the Employee constructor and pass the jobTitle property as 'engineer'

        this.github = github; // set the github property to the github argument
    }

    getGithub() {
        return this.github; // return the github property of the object
    }
}

module.exports = Engineer; // export the Engineer class