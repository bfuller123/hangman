function getRandomWord(list) {
  var randomNum = Math.floor(Math.random() * list.length);
  return list[randomNum];
}

function stringToArray(str) {
  return str.split('');
}

function arrayToBlanks(arr) {
  Hangman.board = [];
  arr.forEach(function(element){
    if(element == ' ') {
      Hangman.board.push('\u00A0');
    }
    else if(element == ',' || element == "'" || element == '-') {
      Hangman.board.push(element);
    }
    else {
      Hangman.board.push('_');
    }
  });
  return;
}

function findLettersSpot(arr) {
  while (arr.includes(Hangman.userGuess)) {
    var i = arr.indexOf(Hangman.userGuess);
    arr[i] = '_';
    fillLettersSpot(Hangman.board, i, Hangman.userGuess);
  }
}

function fillLettersSpot(targetArr, index, element){
  targetArr[index] = element;
}

function lowerUserGuessCount(){
  if (Hangman.guessesLeft > 0) {
    Hangman.guessesLeft -= 1;
    guesses_left.textContent = Hangman.guessesLeft;
    if (Hangman.guessesLeft == 0){
      alerts.textContent = 'Game Over! The correct answer was ' + Hangman.fullAnswer;
    }
  }
}

function updateLettersGuessed() {
  Hangman.lettersGuessed.push(Hangman.userGuess);
}

function updateWrongLettersGuessed(){
  alerts.textContent = '';
  updateLettersGuessed();
  Hangman.wrongLettersGuessed.push(Hangman.userGuess);
  letters_guessed.textContent = Hangman.wrongLettersGuessed.join(' ');
  lowerUserGuessCount();
}

function reset(){
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