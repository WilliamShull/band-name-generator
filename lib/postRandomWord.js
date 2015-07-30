'use strict';

module.exports = function(word, wordObject) {
  //Check if word is on object
  if (!wordObject.hasOwnProperty(word)) {
    //If not on object, add and send message
    wordObject[word] = true;
    return {message: word + " has been added!"};
  }
  //If it is, send a message saying so
  return {message: word + " is already in the list!"};
};
