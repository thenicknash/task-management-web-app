# Bambee Task Web Application

## Project setup
1. `cd` into the root folder (where you see `/server`, `/ui-client`, etc.)
1. Run `npm install`
1. `cd server`
1. Serve up the back-end/API by running `node server.js`
1. Open `http://localhost:3000` to see the API. You should see `It works!`.
1. Open ``http://localhost:3000/api/tasks` to see a pre-built list of tasks
1. Open a new terminal
1. Navigate to the `/ui-client` directory
1. Run `npm install`
1. Serve up the front-end/client by running `npm run serve`
1. Open `http://localhost:8080` to see the front-end Vue application
1. Though it is unfinished, enter `http://localhost:8080/task/<uuid>` to see the details page (was in the process of implementing vue-router)

## What Could Have Been
The time flew by during this project! If I were to have more time on this project, I would have:
* Completed the individual task details page
* Modularized the Vue components more
* Implemented Jest/supertest for testing on the API
* Added other features such updating a task to complete from the main page, add user functionality, added login/registration