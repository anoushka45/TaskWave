const express = require('express');
const app = express();
const auth = require('./routes/auth');
const list = require('./routes/list');

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
app.use("/api/v2", list);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on  the port ${PORT}`);
});
