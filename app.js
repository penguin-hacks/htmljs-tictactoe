$(document).ready(function(){
  
  
    // LISTENERS -- these functions trigger when users do things
    $('.tic').click(function(e) {
      // This will run whenever anyone clicks on something with a 'tic' class.
      if ($(e.target).html() == '#') {
        $(e.target).html('X');

        // Computer does their turn
        
        
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
