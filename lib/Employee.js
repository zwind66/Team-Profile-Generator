class Employee { 
    constructor(name, id, email, jobTitle) { // create a constructor for the Employee class
        this.name = name;
        this.id = id;
        this.email = email;
        this.jobTitle = jobTitle;
    }

    getName() {
        return this.name; // return the name property of the object                                                                     
    }

    getId() {
        return this.id; // return the id property of the object                                                                         
    }

    getEmail() {
        return this.email; // return the email property of the object                                                                   
    }

    getRole() {
        return this.jobTitle; // return the jobTitle property of the object                                                             
    }
}

module.exports = Employee; // export the Employee class