// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers){
  let counter = 0;
  let finalDigit = 0;
  for(let i = 0; i < 3; i++) {
    finalDigit = +(integers[i].toString().slice(-1));
    if(finalDigit % 2 === 0) {
      counter++;
    };
  };

  if (counter >= 2) {
    for(let j = 0; j < integers.length; j++) {
      finalDigit = +(integers[j].toString().slice(-1));
      if (finalDigit % 2 === 1) {
        return integers[j];
      };
    };
  } else {
    for(let k = 0; k < integers.length; k++) {
      finalDigit = +(integers[k].toString().slice(-1));
      if (finalDigit % 2 === 0) {
        return integers[k];
      };
    };
  };
};
findOutlier([11, 53675, 320, 7])
