module.exports = teamArry => {
           
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
              ${teamArry.map(({ name, jobTitle, id, email, office, github, school}) => {
                if (!office) {
                    office = '';
                } else
                    office = `<li class="list-group-item">Office number: ${office}</li>`;
                if (!github) {
                    github = '';
                } else
                    github = `<li class="list-group-item">Github: <a href="https://github.com/${github}" target="_blank" rel="noopener noreferrer">${github}</a></li>`;
                if (!school) {
                    school = '';
                } else
                    school = `<li class="list-group-item">School: ${school}</li>`;
                return `
                <div class="card employee-card shadow m-2 ">
                    <div class="card-header bg-primary text-light">
                        <h2 class="card-title">${name}</h2>
                        <h3 class=""card-subtitle"><i class="fas fa-mug-hot mr-2"></i>${jobTitle}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${id}</li>
                            <li class="list-group-item">Emial: <a href="mailto:${email}">${email}</a></li>
                            ${office}
                            ${github}
                            ${school}
                        </ul>
                    </div>
                </div>
                `;
                }).join('')}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};
