//need to have letters guessed and wrong letters guessed
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
    console.log('getting random word');
    var randomWord = getRandomWord(wordlist);
    Hangman.fullAnswer = randomWord;
    console.log(randomWord);
    console.log('changing to an array');
    Hangman.answer = stringToArray(randomWord.toLowerCase());
    console.log('writing it to the board');
    arrayToBlanks(Hangman.answer);
    guesses_left.textContent = Hangman.guessesLeft;
    answer.textContent = Hangman.board.join(' ');
  }
  else {
    Hangman.userGuess = event.key;
    console.log(Hangman.userGuess);
    if (Hangman.lettersGuessed.includes(Hangman.userGuess)) {
      alerts.textContent = 'You have already guessed ' + Hangman.userGuess;
    }
    else if (Hangman.answer.includes(Hangman.userGuess)){
      findLettersSpot(Hangman.answer);
      alerts.textContent = '';
    }
    else {
      updateLettersGuessed();
    }
    answer.textContent = Hangman.board.join(' ');
  }
}
