const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Import data
const { userInfo } = require('./data/user');
const { experiences } = require('./data/experience');

// Define routes
app.get('/', (req, res) => {
  res.render('index', { userInfo, experiences });
});

// Serve static files (including images)
app.use(express.static(path.join(__dirname, 'public')));  // Existing line for other static assets
app.use('/images', express.static(path.join(__dirname, 'images'))); // New line to serve images

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

