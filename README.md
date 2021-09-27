# Katify 🐱
Developed by Beatriz Maia & Sophie Dilhon

## About the project
Katify is a cat themed Kanban, developed to help users to organize their tasks. 

## Features

- :large_blue_circle: Create kanban board with atribute: name.
- :large_blue_circle: Kanban boards with UUID.
- :large_blue_circle: Kanban columns divided into: "To Do", "In Progress", "Finished" and "Discarded". 
- :large_blue_circle: Cards with atributes: name, tag, description and status.
- :large_blue_circle: Drag and drop cards to change status.


Key: 
- :green_circle: Feature implemented 
- :yellow_circle: Feature being implemented
- :large_blue_circle: Feature still to be implemented

## Setup

This application was made using `MySQL` v.5.7.31,  `Node.JS` v.14.17.6 and `npm` v. 6.14.15. 

### Configuring Database

This application uses a database to save all information related to file. In order to create the initial database, run the following command on your MySQL monitor. 

```sql
CREATE DATABASE katify;
```

### Instalation 

To install all packages used run:

```sh
npm install
```

### Starting backend server

To start backend server, run the following command in the project's root:

```sh
npm start
```

### Starting frontend server

In order to start showcase the frontend onto localhost:port, run the following command, substituting the number `8000` with your desired port.  

```sh
npx http-server -a localhost -p 8000
```
