const express = require('express');
const app = express();

// Define a health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).send('OK'); // Respond with a status code of 200 and 'OK'
});

// Define other endpoints if needed
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// Start the server on a specific port (e.g., 3000)
const port = process.env.PORT || 3000; // You can use an environment variable for the port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
