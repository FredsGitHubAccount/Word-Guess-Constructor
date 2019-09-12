let Letter = require("./letter.js");

class Word {
    constructor(answer){
        this.wordArray = [];
        for(let i = 0; i<answer.length; i++){
            let letter = new Letter(answer[i])
            this.wordArray.push(letter)
        }
    }

    consoleDisplay(){
        let logData = ""
        for(let i = 0; i<this.wordArray.length; i++){
            logData += `${this.wordArray[i]} `
        }
        console.log(`${logData}`)
    }

    userGuess(guess){
        for(let i = 0; i<this.wordArray.length; i++){
            this.wordArray[i].letterCheck(guess)
        }
    }


}

module.exports = Word