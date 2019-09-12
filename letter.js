class Letter {
    constructor(val){
        this.letter = val;
        this.guessed = false;
    }

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

    letterCheck(guess){
        if(guess == this.letter){
            this.guessed = true;
        }
    }
}

module.exports = Letter