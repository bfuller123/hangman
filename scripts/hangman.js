var Hangman = {
  userGuess: undefined,
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
    if(element == ' ' || element == ',' || element == "'") {
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

document.onkeyup = function(event) {
  if (event.key === 'Enter') {
    console.log('getting random word');
    var randomWord = getRandomWord(wordlist);
    console.log(randomWord);
    console.log('changing to an array');
    Hangman.answer = stringToArray(randomWord.toLowerCase());
    console.log('writing it to the board');
    arrayToBlanks(Hangman.answer);
    answer.textContent = Hangman.board.join(' ');
  }
  else {
    Hangman.userGuess = event.key;
    console.log(Hangman.userGuess);
    findLettersSpot(Hangman.answer);
    answer.textContent = '';
    answer.textContent = Hangman.board.join(' ');
  }
}








var wordlist = ['Apple',
'Adzuki',
'Bakeable custard',
'Baked potato',
'Banana',
'Beni imo',
'Blueberry cheesecake',
'Brown sugar syrup',
'Cafe au lait',
'Cantaloupe',
'Cappuccino',
'Caramel macchiato McFlurry',
'Cherry',
'Chestnut',
'Chocobanana',
'Cinnamon cookie',
'Citrus golden blend',
'Corn',
'Creme brulee',
'Double cookie',
'Edamame',
'European cheese',
'Exotic Tokyo',
'Fruit parfait',
'Ginger ale',
'Golden citrus',
'Green bean',
'Hojicha',
'Hokkaido cheese and chocolate',
'Hokkaido Melon with Mascarpone Cheese',
'Hokkaido roasted corn',
'Hot Japanese chili',
'Kinako',
'Kobe pudding',
'Koucha',
'Kuchidoke Kakao',
'Lemon cheesecake',
'Maple',
'Matcha',
'Miso soup',
'Muscat of Alexandria',
'Okinawa sweet potato',
'Passion fruit',
'Pear',
'Ramune',
'Raspberry passionfruit',
'Red potato',
'Rilakkuma hotcake',
'Rock salt',
'Royal Milk Tea',
'Sake',
'Sakura',
'Sakura matcha latte',
'Salt and caramel',
'Shikuwasa',
'Shinshu apple',
'Soy flour',
'Soy sauce',
'Strawberry',
'Strawberry cheesecake',
'Sweet pudding',
'Triple berry swirl',
'Vegetable juice',
'Wasabi',
'Watermelon',
'Yokohama cheesecake',
'Yubari melon',
'Yuzu']
