let Letter = require("./letter.js");

// Constructor for the word which will hold each individual letter as on object.
class Word {
    // The answer holds individual letters as objects
    constructor(answer){
        this.wordArray = [];
        for(let i = 0; i<answer.length; i++){
            let letter = new Letter(answer[i])
            this.wordArray.push(letter)
        }
    }

    // Displays the word in the console
    consoleDisplay(){
        let logData = ""
        for(let i = 0; i<this.wordArray.length; i++){
            logData += `${this.wordArray[i]} `
        }
        console.log(`${logData}`)
    }
    // Checks the userguess as a true or false value
    userGuess(guess){
        for(let i = 0; i<this.wordArray.length; i++){
            this.wordArray[i].letterCheck(guess)
        }
    }


}

module.exports = Word