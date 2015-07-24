'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app/'));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.get('/adjective', function(req, res) {
  res.json(getRandomWord(adjective));
});

app.get('/noun', function(req, res) {
  res.json(getRandomWord(noun));
});

app.get('/verb', function(req, res) {
  res.json(getRandomWord(verb));
});

app.listen(port, function() {
  console.log('Server running on port ' + port);
});

//adjective constructor function
var Adjectives = function() {
  this.speedy = true;
  this.slowly = true;
  this.shiny = true;
  this.sleepy = true;
  this.fabulous = true;
  this.grandoise = true;
  this.husky = true;
  this.mediocre = true;
  this.nutty = true;
};

//noun constructor function
var Nouns = function() {
  this.washington = true;
  this.laptop = true;
  this.coffee = true;
  this.platypus = true;
  this.seattle = true;
};

//verb constructor function
var Verbs = function() {
  this.run = true;
  this.jump = true;
  this.swim = true;
  this.type = true;
  this.yawn = true;
};

//word retrieval function
function getRandomWord(object) {
  //Put properties into an array, then return a random one
  var propArray = Object.keys(object);
  var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
  return {word: randomProp};
};

var adjective = new Adjectives();
var noun = new Nouns();
var verb = new Verbs();
