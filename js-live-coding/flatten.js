var assert = require("assert");

// arr: Array<any> - [1, 2, [1, 2], [1, 2, 3]]
// return: Array<any> - 평탄해진 새 배열 ex> [1, 2, 1, 2, 1, 2, 3];
function flatten(arr) {
  const new_arr = [];

  for (const item of arr) {
    // arr의 요소가 배열일 때
    // arr의 요소를 평탄화 - flatten
    if (Array.isArray(item)) {
      new_arr.push(...flatten(item));
    } else {
      // arr의 요소가 배열이 아닐 때
      new_arr.push(item);
    }
  }
  return new_arr;
}

assert.deepEqual(flatten([1, 2, 3]), [1, 2, 3]);
assert.deepEqual(flatten([1, [2, 3]]), [1, 2, 3]);
assert.deepEqual(flatten([1, [2, [3]]]), [1, 2, 3]);
