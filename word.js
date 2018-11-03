let letter = require("./letter");

function Word(word_cmp){
    this.word = word_cmp;
    this.word_length = word_cmp.length;
    this.guesses = 10;
    this.word_ltr_arry = [];
    this.wrd_ltr_dsp_arry = [];
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
}

module.exports = Word;