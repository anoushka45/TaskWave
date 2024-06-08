const express = require('express');
const app = express();
const auth = require('./routes/auth');

// Middleware to parse JSON bodies
app.use(express.json());

// Database connection
require("./conn/conn");

// Root route
app.get('/', (req, res) => {
  res.send('Hello!');
});

// Auth routes
app.use("/api/v1", auth);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
