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
    var adjectivePost;
    if (adjective) {
      adjectivePost = {word: adjective};
      $.post('adjective', adjectivePost, function(response) {
        console.log(response);
        var adjectiveRes = response.message;
        $('#adjectiveResponse').text(adjectiveRes);
      });
    }
  });

});
