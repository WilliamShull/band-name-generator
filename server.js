  'use strict';

  var express = require('express');
  var app = express();
  var port = process.env.PORT || 3000;

  app.use(express.static(__dirname + '/app/'));

  //adjective constructor function
  var Adjectives = function() {
    this.speedy = true;
    this.slowly = true;
    this.shiny = true;
    this.sleepy = true;
  }
  var adjective = new Adjectives();

  //word retrieval function
  function getRandomWord(object) {
    //get all properties into an array
    var propArray = Object.keys(object);
    //pick random word
    var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
    //return word in an object
    return {word: randomProp};
  };

  app.get('/', function(req, res) {
    res.send({prop: 'Will'});
  });

  app.get('/adjective', function(req, res) {
    res.json(getRandomWord(adjective));
  });

  app.listen(port, function() {
    console.log('Server running on port ' + port);
  });


