const assert = require("assert");

// array: number[]
// return: number - 연속된 1 값의 최대 값
function solution(array) {
  let result = 0;
  let idx = 0;
  while (idx < array.length) {
    // 순회하며 배열의 요소가 1인지 확인
    if (array[idx] === 1) {
      // 앞으로 연속된 1의 개수가 몇개인지 확인
      let max_idx = idx;
      for (let i = idx + 1; i < array.length; i++) {
        if (array[i] !== 1) break;
        max_idx = i;
      }
      console.log(max_idx, idx);
      // 최대값 갱신
      result = Math.max(result, max_idx - idx + 1);
      // idx를 마지막 1의 인덱스로로 갱신
      idx = max_idx;
    }
    // idx 증가하기
    idx++;
  }

  return result;
}

// 디버깅 측면에서 equal을 사용하는게 더 낫다
assert.equal(solution([1, 1, 1]), 3);
assert(solution([0, 1, 1, 1, 0]) === 3);
assert(solution([0, 1, 1, 1, 0, 1, 1, 1, 1]) === 4);
assert.equal(solution([0]), 0);
