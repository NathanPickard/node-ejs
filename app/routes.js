var express = require('express');
var path = require('path');
var router = express.Router();
module.exports = router;

// route our home page
router.get('/', function(req, res) {
  res.render('pages/home');
});

// route for our about page
router.get('/about', function(req, res) {
  var users = [
    { name: 'Nathan', email: 'nathan@email.com', avatar: 'https://placekitten.com/g/200/200'},
    { name: 'Cameron', email: 'cameron@email.com', avatar: 'https://placekitten.com/g/400/400'},
    { name: 'Trevor', email: 'trevor@email.com', avatar: 'https://placekitten.com/g/500/500'},
    { name: 'Allen', email: 'allen@email.com', avatar: 'https://placekitten.com/g/300/300'},
  ];

  res.render('pages/about', { users: users });
});

router.get('/contact', function(req, res) {
  res.render('pages/contact');
});

router.post('/contact', function(req, res) {
  res.send('Thanks for contacting us, ' + req.body.name + '! We will respond shortly!'); 
});