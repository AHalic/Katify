# Katify 🐱


Developed by Beatriz Maia & Sophie Dilhon 

## About the project

Katify is a cat themed Kanban, developed to help users to organize their tasks. For now it doesn't have a multi-users system implemented and runs only for one user. The frontend and backend are implemented seperately with frontend realated features in project_katify/frontend and backend in project_katify/backend. 


<p align="center">
    <img src="docs/example_use.gif" width="55%" height="auto" />
</p>

## Features

- :green_circle: Create kanban board with atribute: name.
- :green_circle: Kanban boards with UUID.
- :green_circle: Kanban columns divided into: "To Do", "In Progress", "Done" and "Discarded". 
- :green_circle: Cards with atributes: name, tag, description and status.
- :large_blue_circle: Drag and drop cards to change status.

Key: 
- :green_circle: Feature implemented 
- :yellow_circle: Feature being implemented
- :large_blue_circle: Feature still to be implemented

## Setup

This application was made using `MySQL` v.5.7.31,  `Node.JS` v.14.17.6, `Bootstrap` v.4 and `npm` v.6.14.15. 

### Configuring Database

This application uses a database to save all information related to file. In order to create the initial database, run the following command on your MySQL monitor. 

```sql
CREATE DATABASE katify;
```

In `./backend/infra/connection.js` change the password connection to your user's root password.

### Instalation 

To install all packages used run in the terminal the following commands:

```sh
cd project_katify
cd frontend
npm install

cd project_katify
cd backend
npm install
```

### Starting backend server

To start backend server, run the following command in the backend repository:
```sh
npm start
```
This server runs in the port 3000.

### Starting frontend server

In order to showcase the frontend, run the following command in the frontend repository:  
```sh
npm start
```
This server runs in the port 8000.


### Using Katify

Using your favorite browser enter the link `http://localhost:8000` and now your ready to Katify!

<p align="center">
    <img src="project_katify/frontend/resources/cat-icon.png" width="80px" />
</p>

 ## Resources

Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>.