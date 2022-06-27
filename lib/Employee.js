// create a constructor for the Employee class
class Employee {
    constructor(name, id, email,) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // return the name property of the object     
    getName() {
        return this.name;
    }
    // return the id property of the object   
    getId() {
        return this.id;
    }
    // return the email property of the object  
    getEmail() {
        return this.email;
    }
    // return the role property of the object  
    getRole() {
        return 'Employee';
    }
}

// export the Employee class
module.exports = Employee; 