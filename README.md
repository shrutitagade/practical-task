

# MERN Stack Practical Task

 Overview

This project demonstrates a basic MERN (MongoDB, Express, React, Node.js) stack application where:

- The backend (Node.js + Express) has an endpoint `/api/message` that returns a JSON object with a message.
- The frontend (React) fetches this message from the backend and displays it on the webpage.

 Project Structure

# Backend

- Server File: `server.js` (or `app.js`)
- Port: 8080
- Endpoint: `/api/message`
- Response: Returns a JSON object with a `message` field.

# Frontend

- React Application: Created using Vite
- Main Component: `App.js`
- Displays: The message fetched from the backend

 Setup Instructions

# Backend Setup

1. Navigate to the Backend Directory:
    bash
    cd backend
    

2. Install Dependencies:
    bash
    npm install
    

3. Start the Server:
    bash
    npm start
    

    The server will run on [http://localhost:8080](http://localhost:8080).

# Frontend Setup

1. Navigate to the Frontend Directory:
    bash
    cd frontend
    

2. Install Dependencies:
    bash
    npm install
    

3. Start the React Application:
    bash
    npm run dev
    

    The React application will run on [http://localhost:3000](http://localhost:3000).

 Backend Implementation

File: `server.js`

javascript
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});


 Frontend Implementation

File: `App.js`

javascript
import { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/message')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching message:', error));
  }, []);

  return (
    <>
      <h1>{message}</h1>
    </>
  );
}

export default App;


 Common Issues

1. CORS Errors: Ensure that the backend has CORS enabled. This allows the frontend to make requests to the backend on a different port.
2. API Not Found: Verify that the backend server is running and the endpoint `/api/message` is correctly set up.
3. Network Errors: Check the network tab in the browser’s developer tools for any errors related to fetching the data.

 Conclusion

This project demonstrates a basic integration of a React frontend with a Node.js backend, fetching and displaying data from an API endpoint. 

Feel free to modify and extend this setup as needed for your projects.

