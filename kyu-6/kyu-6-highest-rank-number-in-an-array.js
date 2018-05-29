// Write a method highestRank(arr) (or highest-rank in clojure) which returns the number which is most frequent in the given input array (or ISeq). If there is a tie for most frequent number, return the largest number of which is most frequent.
// Example:
// arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
// highestRank(arr) //=> returns 12
// arr = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10];
// highestRank(arr) //=> returns 12
// arr = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10];
// highestRank(arr) //=> returns 3

function highestRank(arr){
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArray.indexOf(arr[i]) < 0) {
      newArray.push(arr[i]);
    };
  };
  let finalObject = {};
  for (let j = 0; j < newArray.length; j++) {
    let counter = 0;
    for (let k = 0; k < arr.length; k++) {
      if (newArray[j] === arr[k]) {
        counter++;
        finalObject[newArray[j]] = counter;
      };
    };
  };
  let propertiesArray = [];
  for (let val in finalObject) {
    propertiesArray.push(finalObject[val]);
  };
  propertiesArray.sort((a, b) => b - a);
  let highestNumber = propertiesArray[0];
  let highestNumberArray = [];
  for (let num in finalObject) {
    if (finalObject[num] === highestNumber) {
      highestNumberArray.push(num);
    };
  };
  highestNumberArray.sort((a, b) => b - a);
  return Number(highestNumberArray[0]);
};
