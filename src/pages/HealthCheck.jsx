const express = require('express');
const app = express();

// Health check route
app.get('/health', (req, res) => {
  res.status(200).send('Healthy');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});