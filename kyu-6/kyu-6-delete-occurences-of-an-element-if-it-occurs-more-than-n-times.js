// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like this sessions, since the motive usually repeats. He isn't fond of seeing the Eiffel tower 40 times. He tells them that he will only sit during the session if they show the same motive at most N times. Luckily, Alice and Bob are able to encode the motive as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?
// Task
// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// Example
//   deleteNth ([1,1,1,1],2) // return [1,1]
//   deleteNth ([20,37,20,21],1) // return [20,37,21]

function deleteNth(array,n){
  //create array of arrays
  var array2 = array.reduce((acc, cur, index) => {
    acc[index] = cur;
    return acc;
  }, {});
  var newArray = Object.entries(array2);
  //create array of individual elements
  var elementsArray = [];
  array.forEach((element) => {
      if (elementsArray.indexOf(element) < 0) {
        elementsArray.push(element);
      };
    });

  //create final, unordered array
  var finalArr = [];
  for (var i = 0; i < elementsArray.length; i++) {
    var counter = 0;
    for (var j = 0; j < newArray.length; j++) {
      if (elementsArray[i] === newArray[j][1]) {
        counter++;
        if (counter < (n + 1)) {
          finalArr.push(newArray[j]);
        };
      };
    };
  };
  //sort finalArray
  var final = finalArr.sort((a,b) => {
    return a[0] - b[0];
  });

  var end = [];
  for (var i = 0; i < final.length; i++) {
    for (var j = 0; j < final[i].length; j++) {
      end.push(final[i][j])
    };
  };

  var finalArray2 = [];
  for (var k = 0; k < end.length; k++) {
    if (k % 2 !== 0) {
      finalArray2.push(end[k]);
    };
  };
return finalArray2
};
