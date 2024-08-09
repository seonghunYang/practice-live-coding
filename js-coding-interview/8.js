var assert = require("assert");

// arr1, arr2: number[] - 오름차순 정렬된 배열
// return: number[]- 두 배열이 합쳐진 배열
function solution(arr1, arr2) {
  // 새 배열을 생성
  const result = [];
  let idx1 = 0;
  let idx2 = 0;
  // 두 배열의 인덱스를 넘었는지 확인
  while (idx1 < arr1.length && idx2 < arr2.length) {
    // arr1, arr2 값을 비교
    // 더 작은 값을 새 배열에 push
    // 같으면 arr1의 요소를 push
    // push한 배열의 idx를 하나 증가시킴 -> 이런 세부적인 how는 적지 않아도 된다
    if (arr1[idx1] <= arr2[idx2]) {
      result.push(arr1[idx1]);
      idx1++;
    } else {
      result.push(arr2[idx2]);
      idx2++;
    }
  }

  // 남은 배열의 모든 요소를 넣기

  while (idx1 < arr1.length) {
    result.push(arr1[idx1]);
    idx1++;
  }

  while (idx2 < arr2.length) {
    result.push(arr2[idx2]);
    idx2++;
  }

  return result;
}

assert.deepEqual(solution([1, 3, 5], [2, 4]), [1, 2, 3, 4, 5]);
assert.deepEqual(solution([1, 2, 3], [4, 5]), [1, 2, 3, 4, 5]);

assert.deepEqual(solution([1, 2, 4], []), [1, 2, 4]);
assert.deepEqual(solution([], []), []);
