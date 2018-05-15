// Your task is to write a function that does just what the title suggests (so, fair warning, be aware that you are not getting out of it just throwing a lame bas sorting method there) with an array/list/vector of integers and the expected number n of smallest elements to return.
// Also:
// the number of elements to be returned cannot be higher than the array/list/vector length;
// elements can be duplicated;
// in case of duplicates, just return them according to the original order (see third example for more clarity).
// Same examples and more in the test cases:
// firstNSmallest([1,2,3,4,5],3) === [1,2,3] //well, not technically ===, but you get what I mean
// firstNSmallest([5,4,3,2,1],3) === [3,2,1]
// firstNSmallest([1,2,3,4,1],3) === [1,2,1]
// firstNSmallest([1,2,3,-4,0],3) === [1,-4,0]
// firstNSmallest([1,2,3,4,5],0) === []

function firstNSmallest(array, n){
  var objs = array.reduce((result, item, index) => {
    result[index] = item;
    return result;
  }, {});

  var objsArr = Object.entries(objs);
  var objsArr2 = [...objsArr]
  var sortedObjs = objsArr2.sort(function(a,b) {
    return a[1] - b[1];
  });
  var sortedObjs2 = [...sortedObjs];
  var sortedObjs3 = [...sortedObjs];

  var tempIndex = sortedObjs2.splice(n-1, 1)

  var sortedObjs4 = [...sortedObjs3];

  var newArray = [];
  for (var i = 0; i < sortedObjs4.length; i++) {
    if (tempIndex[0][1] === sortedObjs4[i][1]) {
      newArray.push(sortedObjs4[i]);
    };
  };

  var sortedTemp = newArray.sort((a,b) => {
    return a[0] - b[0];
  });

  var x;
  for (m = 0; m < sortedObjs4.length; m++) {
    if (sortedTemp[0][1] === sortedObjs4[m][1]) {
      var x = m;
      break;
    };
  };

  sortedObjs4.splice(x);

  var sortedObj6 = [...sortedObjs4, ...sortedTemp];

  sortedObj6.splice(n);

  var final = sortedObj6.sort((a,b) => {
    return a[0] - b[0];
  });

  var final2 = [...final];

  var finalArray = [];
  for (var i = 0; i < final2.length; i++) {
    for (var j = 0; j < final2[i].length; j++) {
      finalArray.push(final2[i][j])
    };
  };

  var finalArray2 = [];
  for (var k = 0; k < finalArray.length; k++) {
    if (k % 2 !== 0) {
      finalArray2.push(finalArray[k]);
    };
  };
  return finalArray2;
};
