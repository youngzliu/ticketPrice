function Ticket(movie, time, age){
  this.myMovie = movie,
  this.myTime = time,
  this.myAge = age
}

Ticket.prototype.calculatePrice = function(){
  var value = this.myMovie + this.myTime + this.myAge;
  if (value >= 18){
    return 15;
  }
  else if (value >= 9){
    return 10;
  }
  else {
    return 5;
  }
}

$(document).ready(function() {
  $("form#movieQuiz").submit(function(event) {
    event.preventDefault();
    var movieInput = parseInt($("select#movie").val());
    var timeInput = parseInt($("select#time").val());
    var ageInput = parseInt($("select#age").val());
    var ticket = new Ticket(movieInput, timeInput, ageInput);
    $(".results").text("The price of the movie is $" + ticket.calculatePrice() + ".");
  });
});
