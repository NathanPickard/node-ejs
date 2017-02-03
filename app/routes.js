var express = require('express');
var path = require('path');
var router = express.Router();
module.exports = router;

// route our home page
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// route for our about page
router.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname, '../about.html'));
});

router.get('/contact');
router.post('/contact');