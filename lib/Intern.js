// import the Employee class
const Employee = require('./Employee');

// create a constructor for the Intern class

class Intern extends Employee {
    constructor(name, id, email, school) {
        // call the Employee constructor 
        super(name, id, email,);

        // set the school property of the object
        this.school = school;
    }
    // return the school property of the object
    getSchool() {
        return this.school;
    }
    // return the role property of the object
    getRole() {
        return 'Intern';
    }
}

// export the Intern class
module.exports = Intern; 