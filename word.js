let letter = require("./letter");

function Word(word_cmp){
    this.word = word_cmp;
    this.word_length = word_cmp.length;
    this.guesses = 10;
    this.word_ltr_arry = [];
    this.wrd_ltr_dsp_arry = [];
    this.ltr_guesses = [];
    this.letter_array = function(){
        for (var i = 0; i < this.word_length; i++)
        {
            var Letter = new letter(this.word[i]);
            if (Letter.value === " ")
            {
                Letter.hidden = false;
            }
            this.word_ltr_arry.push(Letter);
        }
    console.log(this.word_ltr_arry);
    };
    this.wrd_dsp_arry = function(){
        this.wrd_ltr_dsp_arry = [];
        for(var i = 0; i < this.word_ltr_arry.length; i++)
        {
            var LetterObj = this.word_ltr_arry[i];
            if(LetterObj.hidden === true && LetterObj.value != " ")
            {
                this.wrd_ltr_dsp_arry.push("_");
            }
            else if (LetterObj.hidden === false && LetterObj.value == " ")
            {
                this.wrd_ltr_dsp_arry.push(" ");
            }
            else
            {
                this.wrd_ltr_dsp_arry.push(LetterObj.value);
            }
        }
        console.log(this.wrd_ltr_dsp_arry.join(" "));
    };
    this.letterCheck = function(guess_ltr){
        console.log(guess_ltr);
        if(this.ltr_guesses.indexOf(guess_ltr) < 0)
        {
            var hid_ltrs = 0;
            for(var i = 0; i < this.word_ltr_arry.length; i++)
            {
                if(this.word_ltr_arry[i].value == guess_ltr)
                {
                    this.word_ltr_arry[i].updateDisplay(guess_ltr);
                }
                else if (this.word_ltr_arry[i].hidden)
                {   
                    hid_ltrs++;
                }
            }
            if (hid_ltrs == 0)
            {
                console.log("You Win!");
                return 1;
            }
            else
            {   
                this.ltr_guesses.push(guess_ltr);
                this.guesses--;
                console.log("You have guessed an incorrect letter");
                if (this.guesses <= 0 )
                {
                    console.log("You are out of guesses, you lose.");
                    return 1;
                }
                else
                {
                    console.log("These are the letters you have already guessed: " + this.ltr_guesses.join(', '));
                    console.log("Number of guesses remaining: " + this.guesses);
                    return 0;
                }
            }
        }

    };
}

module.exports = Word;