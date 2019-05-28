
var letterBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s'", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var userWins = 0;
var userLosses = 0;
var guessesLeft = 10;
var usedLetters= [];

function reset () {
    guessesLeft = 10; 
    usedLetters = []; 

}


var computerGuess = letterBank[Math.floor(Math.random() * letterBank.length)];
console.log(computerGuess);  

document.onkeyup = function(event) {

    
    var userGuess = event.key; 
   

    if (userGuess === computerGuess) {
        userWins++; 
        alert("You won!"); 
        alert("Resetting game"); 
        reset (); 
    }else{
            guessesLeft--;
            usedLetters.push(userGuess); 
            document.getElementById("your-guesses").innerHTML = "Your Guesses So Far: " + usedLetters; 
        }


   if (guessesLeft == 0) {
       userLosses ++; 
       alert("You lose!"); 
       alert("Resetting game"); 
       reset (); 
   };

   document.getElementById("wins").innerHTML = "Wins: " + userWins; 
   document.getElementById("losses").innerHTML = "Losses: " + userLosses; 
   document.getElementById("guesses-left").innerHTML = "Guesses Left: " + guessesLeft; 


}; 