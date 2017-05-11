var Hangman = {
  userGuess: undefined,
  fullAnswer: undefined,
  answer: [],
  lettersGuessed: [],
  wrongLettersGuessed: [],
  guessesLeft: 6,
  board: [],
};

document.onkeyup = function(event) {
  if (guessableLetters.includes(event.key)) {
    Hangman.userGuess = event.key;
    if (Hangman.lettersGuessed.includes(Hangman.userGuess)) {
      alerts.textContent = 'You have already guessed ' + Hangman.userGuess;
    }
    else if (Hangman.answer.includes(Hangman.userGuess)){
      updateLettersGuessed();
      findLettersSpot(Hangman.answer);
      alerts.textContent = '';
    }
    else {
      updateWrongLettersGuessed();
    }
    game_board.textContent = Hangman.board.join(' ');
    if(Hangman.board.includes("_")){
      //just act normal. Can't do continue because it is an illegal option here.
    }
    else{
      alerts.textContent = 'You Win!';
    }
  }
}

reset();
