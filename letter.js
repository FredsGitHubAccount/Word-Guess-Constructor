// Constructor for each individual letter that will print out the letter, space, underscore, & hold a true/false value
class Letter {
    constructor(val){
        this.letter = val;
        this.guessed = false;
    }
    // Converts the letter to the correct character based if it was guessed or has a space
    toString(){
        if(this.letter == " "){
            this.guessed = true;
            return " "
        }
        else {
            if(this.guessed == false){
                return "_"
            }
            else {
                return this.letter
            }
        }
    }
    // Checks if the guess was true or false in for each index in the word object
    letterCheck(guess){
        if(guess == this.letter){
            this.guessed = true;
        }
    }
}

module.exports = Letter