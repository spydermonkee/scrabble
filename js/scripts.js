var letterScorer = function(letter) {
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
  } else {
    return 10;
  }
};
