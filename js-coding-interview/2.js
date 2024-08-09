var assert = require("assert");

// str: string
// return: boolean - 회문인지 아닌지 판별 값
function solution(str) {
  // const reversedStr = str.split("").reverse().join("");
  // return str === reversedStr;
  if (str === "") return true;

  if (str[0] === str[str.length - 1]) {
    if (solution(str.slice(1, str.length - 1))) return true;
    return false;
  }
  return false;
}

// 재구
// 탈출구
// 자기 동작
// 재귀 호출

assert(solution("11") === true);
assert(solution("10") === false);
assert(solution("11011") === true);
assert(solution("11111") === true);
assert(solution("11110") === false);