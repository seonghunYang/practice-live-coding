var assert = require("assert");

// str: string
// reture: string - 입력값에서 반대로된 문자열
function reverse(str) {
  // 문자열의 길이가 0인지 확인
  if (str.length === 0) return str;

  // 마지막 문자열을 추가
  let new_str = str[str.length - 1];
  return (new_str += reverse(str.slice(0, str.length - 1)));
  // 나머지 문자열에 재귀 - reverse
}

assert.equal(reverse(""), "");
assert.equal(reverse("qwer"), "rewq");
assert.equal(reverse("aa"), "aa");
