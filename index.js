// Declaring
const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./utils/generate.js');

teamArry = [];

// function to prompt user for input
const promptUser = data => {

    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your employee name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your employee name!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is your employee id? (Required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter your employee id!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is your employee email? (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your employee email!');
                    return false;
                }
            }
        },
        {
            type: "list",
            name: "jobTitle",
            message: "What is your jobTitle ? (Required)",
            choices: ["Employee", "Manager", "Engineer", "Intern"]
        },
        {
            type: "input",
            name: "office",
            message: "What is your  office number? ",
            when: answers => answers.jobTitle === "Manager"
        },
        {
            type: "input",
            name: "github",
            message: "What is your github username? ",
            when: answers => answers.jobTitle === "Engineer"
        },
        {
            type: "input",
            name: "school",
            message: "What is your school? ",
            when: answers => answers.jobTitle === "Intern"
        },
        {
            type: "confirm",
            name: "confirmAdd",
            message: "Would you like to add another employee?",
            default: true
        }
    ]).then(data => {
        teamArry.push(data);
        if (data.confirmAdd) {
            return promptUser();
        } else {
            return teamArry; // return the array of user input
        }
    });
};

// function to write HTML file using file system 
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there is an error 
            if (err) {
                reject(err);
                return;
            }
            // when the README has been created 
            resolve({
                ok: true,
                message: "Your website has been successfully created!"
            });
        }
        );
    });
};

// function to generate the HTML file 
promptUser()
    .then(teamArry => {
        return generate(teamArry);
    })
    .then(fileContent => {
        return writeFile(fileContent);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });

