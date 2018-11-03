var fs = require("fs");
var inquirer = require("inquirer");
var word = require("./word");

var inquirer = require("inquirer");

var LTRS = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"]
var words = ['PITTSBURGH','SACRAMENTO','SEATTLE','LOS ANGLES','CHICAGO','AUSTIN','PHOENIX','RENO','OAKLAND','SAN FRANCISCO','BALTIMORE','SALT LAKE CITY','ALBUQUERQUE','DENVER','HOUSTON','ATLANTA','NEW YORK CITY','BOSTON','MINNEAPOLIS'];

function start_game(){
    inquirer.prompt([
        {
            type: "confirm",
            message: "Do you want to play a word game?",
            name: "str_game",
            default: true
        }
    ]).then(function(StrGame){
        if(StrGame.str_game)
        {
            console.log("Start Game");
            game_play();
        }
    })
}

start_game();

function word_sel(){
    var cmp_rnd = Math.floor((Math.random()* words.length)+ 1);
    word_cmp = words[cmp_rnd];
}

function game_play(){
    word_sel();
    var newWord = new word(word_cmp);
    newWord.letter_array();
    game_loop();
}

function game_loop(){
    newWord.wrd_dsp_arry();
    inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter in the city name.",
            name: "ltr_guess"
        }
    ]).then(function(guess){
        var guess_ltr = guess.ltr_guess.toUpperCase();
    });
}

function ltr_valid(){
    
}