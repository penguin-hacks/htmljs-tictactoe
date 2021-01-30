$(document).ready(function() {

  // The Listener -- these functions trigger when users do things
  $('.tic').click(function(e) {
    // This will run whenever anyone clicks on something with a 'tic' class.
    if ($(e.target).html() == '#') {
      $(e.target).html('X');

      // Computer does their turn
      computer_player_turn();
      
      // Determine if someone wins
      
    }
    else {
        alert("Nope you little cheater")
    }
    // This shows the ID of which of the buttons got clicked
  });
  $('#reset').click(function(e) {
      $('.tic').html("#");
  });

});

function computer_player_turn() {
  const available_tics = [];
  $.each($('.tic'), function(index, value) {
      if($(value).html() == '#') {
          available_tics.push(value);
      }
  });

  const computer_choice = Math.floor(Math.random() * available_tics.length);
  $(available_tics[computer_choice]).html('O');
  console.log("computer_choice", computer_choice);
  console.log("available_tics[computer_choice])", available_tics[computer_choice]);
  console.log(available_tics);
};
