# Node.js CRUD with Redis

This project is a simple API built with Node.js, Express, and Redis. It uses Redis as a fast in-memory database for storing product information and follows best practices by using environment variables and Docker for containerization.

## Features

- REST API using **Express**
- **Redis** for caching and storing data
- Environment variables using **dotenv**
- Containerized with **Docker** and **Docker Compose**
- ESModules (`import/export`) syntax for modern JavaScript

## Requirements

- [Node.js](https://nodejs.org/) (v14 or later)
- [Docker](https://www.docker.com/)
- [Redis](https://redis.io/)

## Project Structure
    redis-node-example/  
        ├── src/  
        │   ├── controllers/ 
        │   │ └── productController.js  
        │   ├── routes/ 
        │   │ └── productRoutes.js 
        │   └── server.js 
    ├── .env 
    ├── Dockerfile 
    └── docker-compose.yml

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/redis-node-example.git
   cd redis-node-example
2. **Install dependencies**
    ```bash
   npm install
1. **Set up environment variables**
    ```bash
    REDIS_HOST=redis
    REDIS_PORT=6379
    PORT=3000
