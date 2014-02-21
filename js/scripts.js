var letterScorer = function(letter) {

  letter = letter.toUpperCase();

  var lettersOne = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'];
  var lettersTwo = ['D', 'G'];
  var lettersThree = ['B', 'C', 'M', 'P'];
  var lettersFour = ['F', 'H', 'V', 'W', 'Y'];
  var lettersFive = ['K'];
  var lettersEight = ['J', 'X'];
  var lettersTen = ['Q', 'Z'];
  
  if(lettersOne.indexOf(letter) > -1) {
    return 1;
  } else if(lettersTwo.indexOf(letter) > -1) {
    return 2;
  } else if(lettersThree.indexOf(letter) > -1) {
    return 3;
  } else if(lettersFour.indexOf(letter) > -1) {
    return 4;
  } else if(lettersFive.indexOf(letter) > -1) {
    return 5;
  } else if(lettersEight.indexOf(letter) > -1) {
    return 8;
  } else if(lettersTen.indexOf(letter) > -1) {
    return 10;
  } else {
    return -1;  
  }
};

var wordScorer2 = function(word) {
var totalPoints = 0;
  for(var i = 0; i<word.length; i++){
    if (letterScorer(word[i]) < 0) {
      return 'not a valid scrabble word';
    }
    totalPoints += letterScorer(word[i]);
  }
  return totalPoints;
};

var wordScorer = function(word) {


  var letters = {'A':1,'E':1,'I':1,'O':1,'U':1,'L':1,'N':1,'R':1,'S':1,'T':1,'D':2,'G':2,'B':3,'C':3,'M':3,'P':3,'F':4,'H':4,'V':4,'W':4,'Y':4,'K':5,'J':8,'X':8,'Q':10,'Z':10};


  var totalPoints = 0;

  for(var i = 0; i<word.length; i++){
    totalPoints += letters[word[i]];
  }
  
  return totalPoints;
};




/*var letters = new Object();
  letters.one = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'];
  letters.two = ['D', 'G'];
  letters.three = ['B', 'C', 'M', 'P'];
  letters.four = ['F', 'H', 'V', 'W', 'Y'];
  letters.five = ['K'];
  letters.eight = ['J', 'X'];
  letters.ten = ['Q', 'Z'];
*/











