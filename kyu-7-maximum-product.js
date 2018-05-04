// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
// Array/list size is at least 2 .
// Array/list numbers could be a mixture of positives , ngatives also zeros .
// adjacentElementsProduct([1,2,3])  ==>  return 6
// adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])  ==>  return 50
// adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14

function adjacentElementsProduct(array) {
  var newArray = array.map((current, i) => {
    return current * (array[i + 1]);
  });
  newArray.pop();

  var newArray2 = newArray.reduce((accum, current) => {
    return accum > current ? accum : current;
  });
  return newArray2;
};
