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

  var upperWord = word.toUpperCase();
  var letters = {'A':1,'E':1,'I':1,'O':1,'U':1,'L':1,'N':1,'R':1,'S':1,'T':1,'D':2,'G':2,'B':3,'C':3,'M':3,'P':3,'F':4,'H':4,'V':4,'W':4,'Y':4,'K':5,'J':8,'X':8,'Q':10,'Z':10};
  var totalPoints = 0;

  for(var i = 0; i<upperWord.length; i++) {
    if(!letters[upperWord[i]]) {
      return 'not a valid scrabble word';
    } else {
      totalPoints += letters[upperWord[i]];
    }
  }
  return totalPoints;
};












