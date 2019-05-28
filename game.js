
var letterBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s'", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var userWins = 0;
var userLosses = 0;
var guessesLeft = 10;
var usedletters= [];

function reset () {
    guessesLeft = 10; 
    usedLetters = []; 

}

document.onkeyup = function(event) {

    var computerGuess = letterBank[Math.floor(Math.random() * letterBank.length)]; 
    var userGuess = event.key; 
   

    if (userGuess === computerGuess) {
        userWins++; 
        reset (); 
    }else{
            guessesLeft--;
            usedLetters.push("your-guesses"); 
            document.getElementById("your-guesses").innerHTML = usedLetters; 
        }


   if (guessesLeft == 0) {
       userLosses --; 
       reset (); 
   };

   document.getElementById("wins").innerHTML = "Wins: " + userWins; 
   document.getElementById("losses").innerHTML = "Losses: " + userLosses; 
   document.getElementById("guesses-left").innerHTML = "Guesses Left: " + guessesLeft; 


}; 