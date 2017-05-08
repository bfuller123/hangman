//create start button
//create restart button

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
  if (event.key === 'Enter') {
    Hangman.guessesLeft = 6;
    Hangman.lettersGuessed = [];
    Hangman.wrongLettersGuessed = [];
    var randomWord = getRandomWord(wordlist);
    Hangman.fullAnswer = randomWord;
    Hangman.answer = stringToArray(randomWord.toLowerCase());
    arrayToBlanks(Hangman.answer);
    guesses_left.textContent = Hangman.guessesLeft;
    letters_guessed.textContent = Hangman.wrongLettersGuessed;
    answer.textContent = Hangman.board.join(' ');
  }
  else if (guessableLetters.includes(event.key)) {
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
    answer.textContent = Hangman.board.join(' ');
  }
}
