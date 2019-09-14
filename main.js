let Word = require("./word.js");
let inquirer = require("inquirer");
let letterArray = "abcdefghijklmnopqrstuvwxyz";
let timBurtonFilms = ["edward scissorhands","beetlejuice","corpse bride", "sweeney todd", "alice in wonderland", "the nightmare before christmas","sleepy hollow","charlie and the chocolate factory", "big fish"];
let randomIndex = Math.floor(Math.random() * timBurtonFilms.length);
let randomWord = timBurtonFilms[randomIndex];
computerWord = new Word(randomWord);
let requireNewWord = false;
let incorrectGuess = [];
let correctGuess = [];
let guessesLeft = 10;

function gameLogic() {

//    If the round needs a new word, generate one
    if (requireNewWord) {
        // Selects random timBurtonFilms array
        let randomIndex = Math.floor(Math.random() * timBurtonFilms.length);
        let randomWord = timBurtonFilms[randomIndex];

        // Passes random word through the Word constructor
        computerWord = new Word(randomWord);
        requireNewWord = false;
    }


    // Stores the true/false values of each letter
    let wordComplete = [];
  
    // Checks to see if all the values are true, if true, game is over, else run the prompt if guesses do remain
    computerWord.wordArray.forEach(completeCheck);

    // Checks if all the letters are true, if true, win the game, if not, run the guessing logic
    if (wordComplete.includes(false)) {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Guess a letter between A-Z!",
                    name: "userinput"
                }
            ])
            .then(function (input) {

            //    Validation for input
                if (!letterArray.includes(input.userinput) || input.userinput.length > 1) {
                    console.log("\nPlease enter one valid character!\n");
                    gameLogic();
                } else {

                    // Validation based on what the user has guessed already
                    if (incorrectGuess.includes(input.userinput) || correctGuess.includes(input.userinput) || input.userinput === "") {
                        console.log("\nYou have already guessed or have entered an invalid character!\n");
                        gameLogic();
                    } else {

                        // Checks if guess is correct
                        let wordCheckArray = [];

                        
                        computerWord.userGuess(input.userinput);

                        // Checks if guess is correct
                        computerWord.wordArray.forEach(wordCheck);

                        // If the guess didn't change a false value to true, it means the two arrays are identical and the guess was wrong
                        if (wordCheckArray.join('') === wordComplete.join('')) {
                  
                            console.log("\nWrong :(\n");
                           
                            incorrectGuess.push(input.userinput);
                            guessesLeft--;
                        } else {
                 
                            console.log("\nCorrect :D \n");
                           
                            correctGuess.push(input.userinput);
                        }

                        // Redisplays the word so the user can see what to guess next
                        computerWord.consoleDisplay();

                        // Print guesses left
                        console.log(`Guesses Left:${guessesLeft}\n`);

                        // Print letters guessed already
                        console.log(`Letters Guessed: ${incorrectGuess.join(" ")}\n`);

                        // Guesses left
                        if (guessesLeft > 0) {
                            // Call function 
                            gameLogic();
                        } else {
                            console.log(`Sorry, you lose!`)
                            

                            restartGame();
                        }
                        // Pushes a true or false value
                        function wordCheck(key) {
                            wordCheckArray.push(key.guessed);
                        }
                    }
                }
            })
    } else {
        console.log("YOU WIN!\n");

        restartGame();
    }

    // Pushes a true or false value into the array to see if the word has been completely guessed
    function completeCheck(key) {
        wordComplete.push(key.guessed);
    }

}
// Replay another round
function restartGame() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Would you like to:",
                choices: ["Play Again", "Exit"],
                name: "restart"
            }
        ])
        .then(function (input) {
            if (input.restart === "Play Again") {
                requireNewWord = true;
                incorrectGuess = [];
                correctGuess = [];
                guessesLeft = 10;
                gameLogic();
            } else {
                return
            }
        })
}

gameLogic();