// create the team
const generateTeam = team => {

    //create Manager card
    const generateManager = Manager => {
        return `
            <div class="card employee-card shadow m-2">
                <div class="card-header bg-primary text-light">
                    <h2 class="card-title">${Manager.name}</h2>
                    <h3 class="" card-subtitle"><i class="fas fa-mug-hot mr-2"></i>manager</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${Manager.id}</li>
                        <li class="list-group-item">Emial: <a href="mailto:${Manager.email}">${Manager.email}</a></li>
                    <li class="list-group-item">Office Number: ${Manager.officeNumber}</li>
                    </ul>
                </div>
            </div>
        `;
    }

    //create Engineer card
    const generateEngineer = Engineer => {
        return `
            <div class="card employee-card shadow m-2 ">
                <div class="card-header bg-primary text-light">
                    <h2 class="card-title">${Engineer.name}</h2>
                    <h3 class="" card-subtitle"><i class="fas fa-glasses mr-2"></i>engineer</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${Engineer.id}</li>
                        <li class="list-group-item">Emial: <a href="mailto:${Engineer.email}">${Engineer.email}</a></li>
                        <li class="list-group-item">Github: <a href="https://github.com/${Engineer.github}">${Engineer.github}</a></li>
                    </ul>
                </div>
            </div>
        `;
    }

    //create Intern card
    const generateIntern = Intern => {
        return `
            <div class="card employee-card shadow m-2 ">
                <div class="card-header bg-primary text-light">
                    <h2 class="card-title">${Intern.name}</h2>
                    <h3 class="" card-subtitle"><i class="fas fa-user-graduate mr-2"></i>intern</h3>
                </div> <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${Intern.id}</li>
                        <li class="list-group-item">Emial: <a href="mailto:${Intern.email}">${Intern.email}</a></li>
                        <li class="list-group-item">School: ${Intern.school}</li>
                    </ul>
                </div>
            </div>
        `;
    }

    const html = [];

    html.push(team.filter(employee => employee.getRole() === 'Manager').map(generateManager).join(''));
    html.push(team.filter(employee => employee.getRole() === 'Engineer').map(generateEngineer).join(''));
    html.push(team.filter(employee => employee.getRole() === 'Intern').map(generateIntern).join(''));

    return html.join('');
}

// function to generate the team page
module.exports = team => {

    // create the html file
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
        <title>My Team</title>
    </head>

    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron jumbotron-fluid mb-3 team-heading bg-danger">
                    <h1 class="text-center text-white">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
            <div class="row team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
            </div>
        </div>
    </body>
    </html>
        `;
}; 