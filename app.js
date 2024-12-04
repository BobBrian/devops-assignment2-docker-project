const express = require('express');
const app = express();
const router = express.Router();
const path = require('path'); // Import the path module for safe file handling.

const staticPath = path.join(__dirname, 'src/static'); // Correct path to your static files.
const port = 8080;

// Middleware for logging requests
router.use(function (req, res, next) {
  console.log('/' + req.method);
  next();
});

// Define routes
router.get('/', function (req, res) {
  res.sendFile(path.join(staticPath, 'index.html')); // Use the correct path for index.html.
});

router.get('/sharks', function (req, res) {
  res.sendFile(path.join(staticPath, 'sharks.html')); // Use the correct path for sharks.html.
});

// Serve static files
app.use(express.static(staticPath)); // Serve all files in /src/static.
app.use('/', router);

// Start the server
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
