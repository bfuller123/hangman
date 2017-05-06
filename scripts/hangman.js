var Hangman = {
  userGuess: document.keyup,
  answer: [],
  lettersGuessed: [],
  guessesLeft: 6,
  board: [],
};

function getRandomWord(list) {
  var randomNum = Math.floor(Math.random() * list.length);
  return list[randomNum];
};

function stringToArray(str) {
  return str.split('');
};

function arrayToBlanks(arr) {
  arr.forEach(function(element){
    if(element == ' ' || element == ',' || element == "'") {
      Hangman.board.push(element);
    }
    else {
      Hangman.board.push('_');
    }
  });
};
