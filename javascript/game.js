$(document).ready(function() {

//define variables
var wins = 0;
var losses = 0;

var minNumber = 19;
var maxNumber = 112;

var jewelNumber = [];
var currentValue;

var score = 0;

//generate random target number

var randomNumber = randomNumberFromRange(19, 112);

function randomNumberFromRange(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
};

//assign random values to jewel buttons

  while(jewelNumber.length < 4) {
    currentValue = Math.floor(Math.random() * 12) + 1;

    if(jewelNumber.indexOf(currentValue) < 0) {
      jewelNumber.push(currentValue);
    }
  };

console.log(jewelNumber);

var buttonRed = jewelNumber[0];
var buttonBlue = jewelNumber[1];
var buttonGreen = jewelNumber[2];
var buttonYellow = jewelNumber[3];

console.log(buttonRed);
console.log(buttonBlue);
console.log(buttonGreen);
console.log(buttonYellow);

//write random computer number to html

$("#random-number").html(randomNumber);
console.log(randomNumber);

//write score to html

$("#score").html("Total Score: " + score);

//on click, score increases - one event per button

$("#red-button").click(function(event) {
score += parseInt(buttonRed);
$("#score").html("Total Score: " + score);
winOrLose();
});
    
$("#blue-button").click(function(event) {
score += parseInt(buttonBlue);
$("#score").html("Total Score: " + score);
winOrLose();
});

$("#green-button").click(function(event) {
score += parseInt(buttonGreen);
$("#score").html("Total Score: " + score);
winOrLose();
});

$("#yellow-button").click(function(event) {
score += parseInt(buttonYellow);
$("#score").html("Total Score: " + score);
winOrLose();
});

//function to reset game after win/lose events

function reset() {
  score=0;
  randomNumberFromRange();
  $("#random-number").html(randomNumber);
console.log(randomNumber);
$("#score").html("Total Score: " + score);
}

//function to define win or lose actions

function winOrLose(){
  if (score===randomNumber) {
    alert("You Win!");
    wins++;
    reset();
  }

else if (score > randomNumber) {
  alert("Sorry, try again!");
  losses++;
  reset();
}

//write win/lose values to html

$("#win-count").html(wins);
$("#loss-count").html(losses);

};
});


