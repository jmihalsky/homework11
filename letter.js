function letter(value){
    this.value = value;
    this.hidden = true;
    this.updateDisplay = function(guess){
        if (guess === this.value) {
            this.hidden = false;
        }
    };
};

module.exports = letter;