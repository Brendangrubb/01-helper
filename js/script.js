function Player() {
  this.total = 301;
  this.double = false;
  this.triple = false;
  this.throws = 0;
  this.turns = 1;
  this.roundBeginningScore = 301;
}


// D-R-F
$(document).ready(function() {
  // instantiate new player
  var player = new Player;

  // turn on double points
  $("#double").click(function(){
    player.double = true;
  });

  // turn on triple points
  $("#triple").click(function(){
    player.triple = true;
  });

  // resets data
  $("#restart").click(function(){
    player.total = 301;
    player.double = false;
    player.triple = false;
    player.throws = 0;
    player.turns = 1;
    player.roundBeginningScore = 301;
    $("#throws").empty();
    $("#throws").append(player.throws);
    $("#rounds").empty();
    $("#rounds").append(player.turns);
    $("#total-points").empty();
    $("#total-points").append(player.total);
  });


  // calculates new score
  $(".number").click(function(){
    // sets value of throw
    if (player.double === true) {
      var points = this.value * 2;
      player.double = false;
    } else if (player.triple === true) {
      var points = this.value * 3;
      player.triple = false;
    } else {
      var points = this.value;
    }

    // maintains total points at beginning of round
    if (player.throws === 3) {
      player.roundBeginningScore = player.total;
    }

    // adds to throw count
    if (player.throws === 3) {
      player.throws = 1;
      player.turns += 1;
    } else {
      player.throws += 1;
    }
    $("#throws").empty();
    $("#throws").append(player.throws);
    $("#rounds").empty();
    $("#rounds").append(player.turns);

    // deducts points and changes point display
    player.total -= points;
    $("#total-points").empty();
    $("#total-points").append(player.total);

    // win/bust alert
    if (player.total === 0) {
      alert("you win!");
    } else if (player.total < 0 || player.total === 1) {
      player.total = player.roundBeginningScore;
      alert("busted!");
      $("#total-points").empty();
      $("#total-points").append(player.total);
      player.throws = 1;
      player.turns += 1;
      $("#throws").empty();
      $("#throws").append(player.throws);
      $("#rounds").empty();
      $("#rounds").append(player.turns);
    }
  });


})
