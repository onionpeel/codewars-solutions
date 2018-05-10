
//This solution works, but is not accepted by Codewars because
//it causes an error due to the amount of time required to process

function kangaroo(k1, r1, k2, r2) {
  if (((k1 > k2) && (r1 > r2)) || ((k2 > k1) && (r2 > r1))) {
    return false;
  };

  if (k1 === k2) {
    return true;
  };

  var k1a = k1;
  var r1a = r1;
  var k2a = k2;
  var r2a = r2;

  while(k1 < k2) {
    k1 = k1 + r1;
    k2 = k2 + r2;
    if (k1 === k2) {
      return true;
    };
  };

  while(k2a < k1a) {
    k2a = k2a + r2a;
    k1a = k1a + r1a;
    if (k2a === k1a) {
      return true;
    };
  };
  return false;
};
