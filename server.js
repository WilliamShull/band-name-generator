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
  res.json(postRandomWord(req.body.word, adjectives));
});


app.get('/noun', function(req, res) {
  res.json(getRandomWord(nouns));
});

app.post('/noun', function(req, res) {
  res.json(postRandomWord(req.body.word, nouns));
});


app.get('/verb', function(req, res) {
  res.json(getRandomWord(verbs));
});

app.post('/verb', function(req, res) {
  res.json(postRandomWord(req.body.word, verbs));
});

app.listen(port, function() {
  console.log('Server running on port ' + port);
});
