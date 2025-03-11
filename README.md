```markdown
# MevnTask

## Overview

This project consists of two main parts: the frontend (UI) and the backend. The frontend is built using Vue.js and TypeScript, while the backend is built using Node.js and Express.

## Table of Contents

- [Project Name](#project-name)
  - [Overview](#overview)
  - [Node 18] 
  - [Table of Contents](#table-of-contents)
  - [Frontend](#frontend)
    - [Installation](#installation)
    - [Running the Project](#running-the-project)
    - [Project Structure](#project-structure)
  - [Backend](#backend)
    - [Installation](#installation-1)
    - [Running the Project](#running-the-project-1)
    - [Project Structure](#project-structure-1)
  - [API Endpoints](#api-endpoints)
  - [License](#license)

## Frontend

### Installation

1. Navigate to the `Frontend` directory:
    ```sh
    cd Frontend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

### Running the Project

To start the frontend development server, run:
```sh
npm run dev
docker-compose up -d
```

### Project Structure

- `src/`: Contains the source code for the frontend.
    - `components/`: Vue components.
    - `store/`: Vuex store modules.
    - `pages/`: Vue views.
    - `App.vue`: Main Vue component.

## Backend

### Installation

1. Navigate to the `Backend/v1` directory:
    ```sh
    cd Backend/v1
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

### Running the Project

To start the backend server, run:
```sh
npm run dev
```

### Project Structure

- `src/`: Contains the source code for the backend.
    - `controllers/`: Request handlers.
    - `models/`: Mongoose models.
    - `services/`: Business logic.
    - `routes/`: API routes.
    - `app.js`: Main application file.

## API Endpoints

- `GET /api/appointments`: Fetch all appointments.
- `POST /api/appointments`: Create a new appointment.
- `PUT /api/appointments/:id`: Update an appointment.
- `GET /api/appointments/slots`: Fetch available slots.
- `POST /api/appointments/search`: Search for appointments.
- `GET /api/appointments/myAppointments`: My appointments list.
- `POST /api/users/login`: Login user and generate JWT.
- `POST /api/users/register`: Register a new user.
- `POST /api/users/resetPassword`: reset password.
- `POSTMAN Collection`: [Download](https://github.com/Tannyll/MevnTask/blob/main/Mevn%20Test%20Case.postman_collection.json
## License

This project is licensed under the MIT License.
```