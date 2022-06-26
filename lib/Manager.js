const Employee = require('./Employee'); // import the Employee class

class Manager extends Employee {
    constructor(name, id, email, jobTitle, officeNumber) { // create a constructor for the Manager class
        super(name, id, email, jobTitle); // call the Employee constructor and pass the jobTitle property as 'manager'
        this.officeNumber = officeNumber; // set the officeNumber property to the officeNumber argument
    }

    getOfficeNumber() {
        return this.officeNumber; // return the officeNumber property of the object
    }
}

module.exports = Manager; // export the Manager class

