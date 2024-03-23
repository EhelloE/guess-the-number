var y=Math.floor(Math.random()*10+1);
var x=document.getElementById("guessField").value;
if(x==y) {
    alert("Congratulations " +playername+ "! You guessed the number write in "+ guess +" guesses!");
    guess=1;
}
else if(x>y) {
    guess++;
    alert("Oops! Try a smaller number.");
}
else {
    guess++;
    alert("Oops! Try a bigger number.");
}
function playAgain() {
    y=Math.floor(Math.random() * 10 + 1);
}