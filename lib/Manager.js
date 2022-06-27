// import the Employee class
const Employee = require('./Employee');

// create a constructor for the Manager class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // call the Employee constructor
        super(name, id, email,);

        // set the officeNumber property of the object
        this.officeNumber = officeNumber;
    }
    // return the officeNumber property of the object
    getOfficeNumber() {
        return this.officeNumber;
    }
    // return the role property of the object
    getRole() {
        return 'Manager';
    }
}

// export the Manager class
module.exports = Manager;

