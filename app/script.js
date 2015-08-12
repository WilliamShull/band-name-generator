'use strict';

$(function() {

  $('#name').click(function() {
    $.get('adjective', function(response) {
      var adjective = response.word;
      $('#adjective').text(adjective);
    });
  });

  $('#name').click(function() {
    $.get('noun', function(response) {
      var noun = response.word;
      $('#noun').text(noun);
    });
  });

  $('#name').click(function() {
    $.get('verb', function(response) {
      var verb = response.word;
      $('#verb').text(verb);
    });
  });

  //Event handler that sends POST request to server
  //when button is pressed
  $('#submitNames').on('submit', function(e) {
    e.preventDefault();
    var adjective = $('input[name=adjective]').val();
    var noun = $('input[name=noun]').val();
    var verb = $('input[name=verb]').val();
    var adjectivePost;
    var nounPost;
    var verbPost;

    if (adjective) {
      adjectivePost = {word: adjective};
      $.post('adjective', adjectivePost, function(response) {
        var adjectiveRes = response.message;
        $('#adjectiveResponse').text(adjectiveRes);
      });
    }

    if (noun) {
      nounPost = {word: noun};
      $.post('noun', nounPost, function(response) {
        var nounRes = response.message;
        $('#nounResponse').text(nounRes);
      });
    }

    if (verb) {
      verbPost = {word: verb};
      $.post('verb', verbPost, function(response) {
        var verbRes = response.message;
        $('#verbResponse').text(verbRes);
      });
    }
  });

});
