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

});
