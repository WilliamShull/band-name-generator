'use strict';

var express = require('express');
var bodyparser = require('body-parser');
var getRandomWord = require('./lib/getRandomWord.js');
var postRandomWord = require('./lib/postRandomWord');
var app = express();
var port = process.env.PORT || 3000;

var adjectivesModule = require('./lib/adjectives.js');
var nounsModule = require('./lib/nouns.js');
var verbsModule = require('./lib/verbs.js');
var adjectives = adjectivesModule();
var nouns = nounsModule();
var verbs = verbsModule();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/app/'));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.get('/adjective', function(req, res) {
  res.json(getRandomWord(adjectives));
});
app.post('/adjective', function(req, res) {
  console.log(req.body);
  res.json(postRandomWord(req.body.word, adjectives));
});

app.get('/noun', function(req, res) {
  res.json(getRandomWord(nouns));
});

app.get('/verb', function(req, res) {
  res.json(getRandomWord(verbs));
});

app.listen(port, function() {
  console.log('Server running on port ' + port);
});

// //adjective constructor function
// var Adjectives = function() {
//   this.speedy = true;
//   this.slowly = true;
//   this.shiny = true;
//   this.sleepy = true;
//   this.fabulous = true;
//   this.grandoise = true;
//   this.husky = true;
//   this.mediocre = true;
//   this.nutty = true;
// };

// //noun constructor function
// var Nouns = function() {
//   this.washington = true;
//   this.laptop = true;
//   this.coffee = true;
//   this.platypus = true;
//   this.seattle = true;
// };

// //verb constructor function
// var Verbs = function() {
//   this.run = true;
//   this.jump = true;
//   this.swim = true;
//   this.type = true;
//   this.yawn = true;
// };

// var adjective = new Adjectives();
// var noun = new Nouns();
// var verb = new Verbs();
