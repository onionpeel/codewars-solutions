// The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different).
// Can you translate this drawing into an algorithm?
// You will be given two dimensions
// a positive integer length (parameter named lng)
// a positive integer width (parameter named wdth)
// You will return an array or a string (depending on the language; Shell bash and Fortran return a string) with the size of each of the squares.
//   sqInRect(5, 3) should return [3, 2, 1, 1]
//   sqInRect(3, 5) should return [3, 2, 1, 1]

function sqInRect(l, w){
  if (l === w) {
    return null;
  };
  let tempArray = [l, w];
  let newArray = [];
  if (l > w) {
    tempArray = [w, l];
  };

  while(true) {
    while (tempArray[1] >= tempArray[0]) {
      newArray.push(tempArray[0]);
      let diff = tempArray[1] - tempArray[0];
      tempArray = [tempArray[0], diff];
    };

    if (tempArray[1] === 0) {
      return newArray;
    };
    tempArray = [tempArray[1], tempArray[0]];
  };
};
