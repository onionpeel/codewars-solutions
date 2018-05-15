//NOT FINISHED--DOESN'T PASS ALL TESTS
function bingo(card, numbers) {
  //vertical solution: same rocheck if all numbers have the same prefixed letter
  var bingoArray = ['B','I','N','G','O'];
  for (var i = 0; i < bingoArray.length; i++) {
    var counter = 0;
    for (var j = 0; j < numbers.length; j++) {
      if (bingoArray[i][0] === numbers[j][0]) {
        counter++;
      };
      if (counter === 5) {
        return true;
      };
    };
  };
  //horizontal solution:
  var onlyNumbers = numbers.map((string) => string.slice(1)).map(Number);
  onlyNumbers.push('FREE SPACE');
  for (let i = 1; i < card.length; i++) {
    let array = [];
    for (let k = 0; k < onlyNumbers.length; k++) {
      if (card[i].indexOf(onlyNumbers[k]) > -1) {
        array.push(onlyNumbers[k]);
      };
    };
    if (array.length === 5) {
      return true;
    };
  };
  //diagonal solution
  var diagonal1 = [card[1][0], card[2][1], card[4][3], card[5][4]];
  var counter = 0;
  for (let f = 0; f < diagonal1.length; f++) {
    if (onlyNumbers.indexOf(diagonal1[f]) > -1) {
      counter++
    };
  };
  if (counter === 4) {
    return true;
  };

  var diagonal2 = [card[5][0], card[4][1], card[2][3], card[1][4]];
  var counter2 = 0;
  for (let h = 0; h < diagonal2.length; h++) {
    if (onlyNumbers.indexOf(diagonal2[h]) > -1) {
      counter2++
    };
  };
  if (counter2 === 4) {
    return true;
  };
  return false;
};


// var card = [
//   ['B', 'I', 'N', 'G', 'O'],
//   [1, 16, 31, 46, 61],
//   [3, 18, 33, 48, 63],
//   [5, 20, 'FREE SPACE', 50, 65],
//   [7, 22, 37, 52, 67],
//   [9, 24, 39, 54, 69]
// ]
// bingo(card,['B9', 'I22', 'N33', 'G48', 'O61']);


// bingo(card,['B1', 'I18', 'N33', 'G52', 'O69']);
// bingo(card, ['B5', 'B20', 'B31', 'B50', 'B65'])

// bingo(card, ['B5', 'I20', 'N31', 'G50', 'O65'])

// bingo(card, ['B1', 'I16', 'N31', 'G46', 'O61'])
// bingo(card, ['B5', 'I20', 'FREE SPACE', 'G50', 'O65'])
