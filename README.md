# Compounds Display

This project provides an full-stack solution for displaying various chemical compounds using Express and Angular.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Configuration](#configuration)
- [Running Application](#running-the-application)

## Tech Stack

- **ExpressJS** - Programming language used for the backend logic.
- **AngularJS** - Programming language used for the frontend logic.
- **MySQL** - Relational database for storing compounds data.
- **Docker & Docker Compose** - Containerization and orchestration of services.
- **Sequelize** - ORM library for interacting with the database.


## Prerequisites

### Clone the Repository

```bash
git clone https://github.com/Garg-Shashwat/Express-Compounds-Display.git
```

### Backend

- Docker and Docker Compose

### Frontend

- AngularJS
- ng package

## Configuration

### Backend

.env file included

Change DUMP_DATA to true to store all the csv data in MYSQL volume
Note: This adds new data from csv and does not remove existing data, so change DUMP_DATA back again after storing the data.

### Frontend

No additional config needed

## Running the Application

### Backend

```bash
docker-compose up

docker-compose down
```

### Frontend

```bash
ng serve
```

Application runs at `http://localhost:4200/`