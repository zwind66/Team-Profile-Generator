const Employee = require('./Employee'); // import the Employee class

class Intern extends Employee {
    constructor(name, id, email, jobTitle, school) { // create a constructor for the Intern class
        super(name, id, email, jobTitle); // call the Employee constructor and pass the jobTitle property as 'intern'
        this.school = school; // set the school property to the school argument
    }

    getSchool() {
        return this.school; // return the school property of the object
    }
}

module.exports = Intern; // export the Intern class