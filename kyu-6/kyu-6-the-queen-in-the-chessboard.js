// The queen can be moved any number of unoccupied squares in a straight line vertically, horizontally, or diagonally, thus combining the moves of the rook and bishop. The queen captures by occupying the square on which an enemy piece sits. (wikipedia: https://en.wikipedia.org/wiki/Queen_(chess)).
// Task:
// Write a function availableMoves(position) which returns possibly moves of chess queen. Returned value should be an array with possible moves sorted alphabetically, exluded starting position.
// For example when input position is A1 return value should be:
// ["A2", "A3", "A4", "A5", "A6", "A7", "A8", "B1", "B2", "C1", "C3", "D1", "D4", "E1", "E5", "F1", "F6", "G1", "G7", "H1", "H8"]
//
//      A   B   C   D   E   F   G   H
//    + - + - + - + - + - + - + - + - +
// 1  | Q | x | x | x | x | x | x | x |
//    + - + - + - + - + - + - + - + - +
// 2  | x | x |   |   |   |   |   |   |
//    + - + - + - + - + - + - + - + - +
// 3  | x |   | x |   |   |   |   |   |
//    + - + - + - + - + - + - + - + - +
// 4  | x |   |   | x |   |   |   |   |
//    + - + - + - + - + - + - + - + - +
// 5  | x |   |   |   | x |   |   |   |
//    + - + - + - + - + - + - + - + - +
// 6  | x |   |   |   |   | x |   |   |
//    + - + - + - + - + - + - + - + - +
// 7  | x |   |   |   |   |   | x |   |
//    + - + - + - + - + - + - + - + - +
// 8  | x |   |   |   |   |   |   | x |
//    + - + - + - + - + - + - + - + - +
//
// Q = queen
// x = available move
// Input:
// input position can be any type (array, number, string and so on). If input position is not a string then return empty array.
// valid input position is one letter from A to H with number from 1 to 8, for example A1, C8, B3. If input is invalid (for example A10 or H0) then return empty array.

function availableMoves(position) {
  //check that the argument is a string
  if (typeof position !== "string") {
    return [];
  };
  if (position.length > 2) {
    return [];
  };

  var letterArray = ['A','B','C','D','E','F','G','H'];
  var numberArray = [1,2,3,4,5,6,7,8];
  var letter = position[0];
  var number = position[1];
  var finalArray = [];
  //check if the function's arguments are valid
  var letterIndex = letterArray.indexOf(letter);
  var y = numberArray.map((e) => e.toString());
  var numberIndex = y.indexOf(number);
  if (letterIndex < 0 || numberIndex < 0) {
    return [];
  };

  // build vertical move
  for (var i = 0; i < numberArray.length; i++) {
    finalArray.push(letter + numberArray[i]);
  };
  //build vertical move
  for (var j = 0; j < letterArray.length; j++) {
    finalArray.push(letterArray[j] + number);
  };

  // build diagonal moves
  var tempLetterIndex = letterIndex;
  var tempNumberIndex = numberIndex;
  while(tempLetterIndex <= 7 && tempNumberIndex <= 7) {
    finalArray.push(letterArray[tempLetterIndex] + numberArray[tempNumberIndex]);
    tempLetterIndex++;
    tempNumberIndex++;
  };

  var tempLetterIndex = letterIndex;
  var tempNumberIndex = numberIndex;
  while(tempLetterIndex <= 7 && tempNumberIndex > -1) {
    finalArray.push(letterArray[tempLetterIndex] + numberArray[tempNumberIndex]);
    tempLetterIndex++;
    tempNumberIndex--;
  };

  var tempLetterIndex = letterIndex;
  var tempNumberIndex = numberIndex;
  while(tempLetterIndex > -1 && tempNumberIndex > -1) {
    finalArray.push(letterArray[tempLetterIndex] + numberArray[tempNumberIndex]);
    tempLetterIndex--;
    tempNumberIndex--;
  };

  var tempLetterIndex = letterIndex;
  var tempNumberIndex = numberIndex;
  while(tempLetterIndex > -1 && tempNumberIndex <= 7) {
    finalArray.push(letterArray[tempLetterIndex] + numberArray[tempNumberIndex]);
    tempLetterIndex--;
    tempNumberIndex++;
  };

  //remove duplicates
  var finalArray2 = [];
  for (var i = 0; i < finalArray.length; i++) {
    if (finalArray2.indexOf(finalArray[i]) < 0) {
      finalArray2.push(finalArray[i]);
    };
  };
  //sort
  var finalArray3 = [];
  for (var i = 0; i < letterArray.length; i++) {
    for (var j = 0; j < finalArray2.length; j++) {
      if (letterArray[i] === finalArray2[j][0]) {
        finalArray3.push(finalArray2[j]);
      };
    };
  };

  finalArray3.sort(function (a, b) {
      if (a > b) {
        return 1;
      };
      if (a < b) {
        return -1;
      }
      return 0;
  });

  var positionIndex = finalArray3.indexOf(position);
  finalArray3.splice(positionIndex, 1);

  return finalArray3;
};
