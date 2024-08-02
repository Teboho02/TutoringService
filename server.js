const express = require('express');
const { json } = require('body-parser');

const app = express();
app.use(json());

// Example endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the custom server!' });
});

// You can add more routes here

module.exports = app;
