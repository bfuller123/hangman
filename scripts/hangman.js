//need to have letters guessed and wrong letters guessed
//create start button
//create restart button

var Hangman = {
  userGuess: undefined,
  fullAnswer: undefined,
  answer: [],
  lettersGuessed: [],
  guessesLeft: 6,
  board: [],
};

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

function updateLettersGuessed(){
  alerts.textContent = '';
  Hangman.lettersGuessed.push(Hangman.userGuess);
  letters_guessed.textContent = Hangman.lettersGuessed.join(' ');
  lowerUserGuessCount();
}

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
