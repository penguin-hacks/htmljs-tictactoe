$(document).ready(function() {
  computer_player_turn();
  // The Listener -- these functions trigger when users do things
  $('.tic').click(function(e) {
    // This will run whenever anyone clicks on something with a 'tic' class.
    if ($(e.target).html() == '#') {
      $(e.target).html('X');

      // Computer does their turn
      computer_player_turn();

      // Determine if someone wins
      check_for_winner();
      check_for_tie_game();
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
  const winning_combos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  $.each(winning_combos, function(index, value){
    
    let first = $('#'+value[0]).html();    // $('#3').html()
    let second = $('#'+value[1]).html();    // $('#4').html()
    let computerTurn = $('#'+value[2]).html();		 // $('#5').html()
    if(first == second) {
      if (computerTurn === '#') {
       $(available_tics[computerTurn]).html('O');
      } else {
        const dumb_computer_choice = Math.floor(Math.random() * available_tics.length);
        $(available_tics[dumb_computer_choice]).html('O');
      };
    };
  });
  
};

function check_for_winner() {
  const winning_combos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  let who_won = '';
  $.each(winning_combos, function(index, value){
    let first = $('#'+value[0]).html();    // $('#3').html()
    let second = $('#'+value[1]).html();    // $('#4').html()
    let third = $('#'+value[2]).html();		 // $('#5').html()
    if(first == second && second == third) {
      who_won = first;
    }
    if(who_won == 'X') {
      alert("Congrats, You destroyed this completely random-moving computer!");
      $('.tic').html("#");
      location.reload();
      
    } else if(who_won == 'O') {
      prompt("You lost to a random computer, how do you feel?","Terrible");
      alert("noob");
      $('.tic').html("#");
      location.reload();    
    }
  });
}
function check_for_tie_game(){
  const tics = [0,1,2,3,4,5,6,7,8];
  let is_tie = true;

  $.each(tics, function(index, value){
    if ($('#'+value).html() == '#') {
      is_tie = false;
      return;
    }
  });
  
  if(is_tie) {
    alert("it's a tie"); 
    $('.tic').html("#");
    location.reload();
  }
}