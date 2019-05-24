
var letterBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s'", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var userWins = 0;
var userLosses = 0;
var guessesLeft = 10;
var usedletters= [];

var wins = document.getElementById("wins"); 
var losses = document.getElementById("losses"); 
var guesses = document.getElementById("guesses-left"); 
var yourGuesses = doucment.getElementById("your-guesses"); 

function reset () {
    guessesLeft = 10; 
    usedLetters = []; 

}

document.onkeyup = function(event) {

    var computerGuess = Math.floor(Math.random() * letterBank.length); 
    var userGuess = event.key; 
    userGuess.push(usedLetters); 

    if (userGuess === computerGuess) {
        userWins++; 
        guessesLeft = 10; 
        usedLetters = []; 
        reset (); 
    };



   if (userGuess !== computerGuess) {
       userLosses--;
       gussesLeft--; 
   };

   if (guessesLeft == 0) {
       reset (); 
   };

   document.getElementById("#wins").innerHTML = "Wins: " + userWins; 
   document.getElementById("#losses").innerHTML = "Losses: " + userLosses; 
   document.getElementById("#guesses-left").innerHTML = "Guesses Left: " = guessesLeft; 
   document.getElementById("#your-guesses").innerHTML= "Your Gusses so Far: " = usedLetters; 


}; 