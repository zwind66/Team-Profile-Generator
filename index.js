// node module to generate HTML file
const fs = require('fs');
const inquirer = require('inquirer');

// link to generate HTML file
const generate = require('./utils/generate.js');

// link to team profile
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// team array to store user input
teamArry = [];

//
const addManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Who is the manager of this team? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the manager name');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "please enter the employee ID. (Required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('please enter the employee ID ');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the manager's email.(Required)",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log('Please enter an email!')
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "office",
            message: "Please enter the manager's office number.(Required)",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log('Please enter the manager office number!');
                    return false;
                }
            }
        },
    ]).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
        teamArry.push(manager);
        console.log(teamArry);
        addTeamMember();
    });
}

// function to add team member
const addTeamMember = () => {
    
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "What type of employee would you like to add to your team?",
            choices: ["Manager", "Engineer", "Intern", "Finish building my team"]
        }
    ]).then(answers => {
        switch (answers.role) { 
        case "Manager": console.log(`
        ================   ==================
        Adding an new team member to the team 
        ================   ==================
        `); addManager(); break; 

        case "Engineer": console.log(`
        ================   ==================
        Adding an new team member to the team 
        ================   ==================
        `);addEngineer(); break;

        case "Intern": console.log(`
        ================   ==================
        Adding an new team member to the team 
        ================   ==================
        `); addIntern(); break;
        
        case "Finish building my team": buildHtml(teamArry); break;
        }
    });
}

// function to add engineer
const addEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Who is the engineer of this team? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the engineer name');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "please enter the employee ID. (Required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('please enter the employee ID ');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the engineer's email.(Required)",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log('Please enter an email!')
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "Please enter the engineer's github username.(Required)",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter the engineer github username!');
                    return false;
                }
            }
        },
    ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamArry.push(engineer);
        console.log(teamArry);
        addTeamMember();
    });
}

// function to add intern
const addIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Who is the intern of this team? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the intern name');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "please enter the employee ID. (Required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('please enter the employee ID ');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the intern's email.(Required)",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log('Please enter an email!')
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "Please enter the intern's school.(Required)",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter the intern school!');
                    return false;
                }
            }
        },
    ]).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamArry.push(intern);
        console.log(teamArry);
        addTeamMember();
    });
}


// function to generate the html file
const buildHtml = () => {
    console.log(`
    =================================================
    Your team is ready !!! Check your dist folder!!!!
    =================================================
    `);

    fs.writeFileSync('./dist/index.html', generate(teamArry), (err) => {
        if (err) {
            console.log(err);
        }
    });
}

// function to start the program
addManager();

