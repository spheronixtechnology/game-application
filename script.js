let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    let userGuess = document.getElementById("guess").value;
    let result = document.getElementById("result");

    if (userGuess == randomNumber) {
        result.innerHTML = "🎉 Correct! You guessed it!";
    } else {
        result.innerHTML = "❌ Wrong! Try again.";
    }
}