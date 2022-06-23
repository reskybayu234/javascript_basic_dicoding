const numberSet = [1,1,2,3,4,4,5,6];

const setMap = new Set(numberSet);

console.log(setMap);

/** {1,2,3,4,5,6} */
/** typeof : Object */

// ===================== add ====================

const numberSet2 = new Set([1,2,3,4,4]);

numberSet2.add(1);
numberSet2.add(5);

console.log(numberSet2);
/** {1,2,3,4,5} */