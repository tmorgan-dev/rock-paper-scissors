//create variable to store wins, losses and ties
var wins = 0;
var losses = 0;
var ties = 0;

//create an array for the computer to choose from
var options = ["R", "P", "S"];

//create a function to run the game
var playGame = function () {

    //prompt the user to input R, P or S
    var userInput = window.prompt("Choose rock (R), paper (P) or scissors (S).");

    //ends game if user selects cancel
    if (!userInput) {
        return
    }

    //sets user input to uppercase to make comparison easier
    userInput = userInput.toUpperCase()

    //randomly generate R, P, or S
    var index = Math.floor(Math.random() * options.length);
    var computerChoice = options[index];

    window.alert("The computer chose " + computerChoice);

    //compare the results
    if (userInput === computerChoice) {
        ties++
        window.alert("It's a Tie!")
    } else if (
        (userInput === "R" && computerChoice === "S") ||
        (userInput === "P" && computerChoice === "R") ||
        (userInput === "S" && computerChoice === "P")
    ) {
        wins++;
        window.alert("You win!");
    } else {
        losses++
        window.alert("You lose! You get NOTHING!")
    }
    //Display the results, stats and prompt for additional play
    window.alert(
        "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
    );

    // Ask user to play again
    var playAgain = window.confirm("Play again?");

    // If user pressed OK, run the function again
    if (playAgain) {
        playGame();
    }
}
//call the function
playGame();