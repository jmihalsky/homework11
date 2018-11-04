# homework11
homework 11 - Constructors

Modified the word game from an earlier homework to use the cities, but used constructors to handle and keep track of what the user is selecting and if they win.

* When the user starts the game, it does a random number which is used as the index of the cities array to select the city which they user has to guess.
* Then the city is used to create a new object from word.js.
    * The city is broken down to individul letters to the letter object.
* The user is prompted to pick a letter.
    * Each letter enttered is checked to see if it was already selected.
    * then the letter is validated against what is in the letter object.
        * if it matches, then the letter is revealed.
        * Otherwise the number of chances are reduced and the letter is added to the entered array.
        * if the user guesses al the letters before running out of chnces, they win, otherwise they lose.
        * the user is prompted if they would like to play again. 

