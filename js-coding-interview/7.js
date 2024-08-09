var assert = require("assert");

// 이번 문제 피드백, 부분 합이 무엇인지 명확하게 물어봐야 했음

// arr: number[]
// return: number - 가장 큰 부분 배열의 합
function solution(arr) {
  let result = -Infinity;
  let acc_sum = 0;
  for (const item of arr) {
    // 요소를 더해 누적 합을 구함
    acc_sum += item;
    // 최대 누적 합을 갱신
    result = Math.max(result, acc_sum);

    // 누적 합이 음수인지 확인
    // 누적 합이 음수면 0으로 갱신
    if (acc_sum < 0) {
      acc_sum = 0;
    }
  }
  return result;
}

assert.equal(solution([1, 2, 3]), 6);
assert.equal(solution([1, -2, 2, 3]), 5);
assert.equal(solution([-1, -2, -3]), -1);

// item의 길이가 k면 item을 sum_list에 추가
// 현재 idx 요소를 item에 넣고 다음 idx 부터 다시 조합
function combination(item, k, idx) {
  if (item.length === k) {
    sum_list.push(item.reduce((acc, v) => acc + v, 0));
  }

  for (let i = idx; i < arr.length; i++) {
    combination([...item, arr[i]], k, i + 1);
  }
  return result;
}
