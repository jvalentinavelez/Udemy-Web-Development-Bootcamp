let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

//Executes the nextSequence function when a keyboard key is pressed
$(document).keydown(function() {
  if (!started) {
    nextSequence();
    started = true;
  }
})

//Detects the colors introduced by the user and stores it in userClickedPattern
$(".btn").click(function(e) {
  let userChosenColour = $(this).attr("id"); //Another way of doing it: let userChosenColour = e.target.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.lastIndexOf(userChosenColour)); //Checks if the user pattern is the same as the pattern generated
})

//Generates a random color, plays the corresponding sound to that color and stores it in gamePattern
function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

//Function that plays the respective sound stored in sounds folder
function playSound(name) {
  let audioColour = new Audio("sounds/" + name + ".mp3");
  audioColour.play();
}

//Adds the pressed css class
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

//Compares everytime the user introduces a color if it coincides with the value in the respective position of the generated pattern
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    //If the user enters the right pattern, the level can be incremented
    if (gamePattern.length === userClickedPattern.length) {
      userClickedPattern = [];
      setTimeout(function() {
        nextSequence()
      }, 1000);
    }
  } else {
    //If the user enters the wrong color, the game will be over
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  started = false;
}
