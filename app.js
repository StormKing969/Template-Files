// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res) {
    res.send("Hello")
});

app.listen(3000, function() {
    console.log("Server is connected to port 3000")
});

// EJS
app.set('view engine', 'ejs');

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
  });
  
  // about page
  app.get('/about', function(req, res) {
    res.render('pages/about');
  });