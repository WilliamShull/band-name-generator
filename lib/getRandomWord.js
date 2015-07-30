'use strict';

module.exports = function(object) {
  //Put properties into an array, then return a random one
  var propArray = Object.keys(object);
  var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
  return {word: randomProp};
};
