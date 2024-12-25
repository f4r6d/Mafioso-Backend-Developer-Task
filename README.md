# Phone Letter Combinations HTTP Server

This project is a Node.js-based HTTP server that provides an endpoint to generate letter combinations for a given phone number. The application is containerized using Docker for easy deployment.

## Features
- Accepts a phone number (digits 2-9) via a POST request.
- Returns all possible letter combinations based on the standard phone number to letter mapping.
- Fully Dockerized for deployment on any Docker-compatible server.

## Prerequisites
- Docker installed.
- Access to a Docker Ubuntu server (for deployment).

---

## Local Development

### 1. Clone the Repository
```bash
git clone https://github.com/f4r6d/Mafioso-Backend-Developer-Task.git
cd Mafioso-Backend-Developer-Task/backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Server Locally
```bash
node app.js
```
The server will run on `http://localhost:8080`.

### 4. Test the Endpoint
Use cURL or Postman to test the `/combinations` endpoint:
```bash
curl -X POST -H "Content-Type: application/json" \
-d '{"phoneNumber": "23"}' \
http://localhost:8080/combinations
```
Expected response:
```json
{
    "combinations": ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
}
```

---

## Dockerization

### 1. Build the Docker Image
```bash
docker build -t phone-combinations .
```

### 2. Run the Docker Container
```bash
docker run -d -p 8080:8080 --name phone-combinations phone-combinations
```
The application will be accessible at `http://localhost:8080`.

### 3. Verify the Container
Check if the container is running:
```bash
docker ps
```

---

## Deployment on Docker Ubuntu Server

### 1. Transfer Project Files to the Server
Use `scp` to copy the project to the server:
```bash
scp -r phone-combinations user@server-ip:/path/to/deploy
```
Replace `user` with your server username, `server-ip` with the server’s IP address, and `/path/to/deploy` with the desired directory.

### 2. Log into the Server
```bash
ssh user@server-ip
```

### 3. Navigate to the Project Directory
```bash
cd /path/to/deploy/phone-combinations
```

### 4. Build the Docker Image
```bash
docker build -t phone-combinations .
```

### 5. Run the Docker Container
```bash
docker run -d -p 8080:8080 --name phone-combinations --restart unless-stopped phone-combinations
```

### 6. Verify Deployment
Ensure the container is running:
```bash
docker ps
```

### 7. Test the Endpoint
From your local machine, test the endpoint using the server’s IP address:
```bash
curl -X POST -H "Content-Type: application/json" \
-d '{"phoneNumber": "23"}' \
http://server-ip:8080/combinations
```
Replace `server-ip` with the actual IP address of your server.

---

## Troubleshooting

### Check Logs
If the application is not working as expected, view the container logs:
```bash
docker logs phone-combinations
```

### Rebuild the Image
If you make changes to the code, rebuild the Docker image:
```bash
docker build -t phone-combinations .
```




