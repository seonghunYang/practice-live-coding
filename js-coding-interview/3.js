var assert = require("assert");

// str1, str2: string
// return: boolean - 두 문자열이 anagram인지 아닌지 파악
function anagram(str1, str2) {
  // 둘의 길이가 다르면 anagram이 아님
  if (str1.length !== str2.length) {
    return false;
  }

  // 둘이 anagram인지 비교
  // 해시맵에 str1의 요소 개수를 저장
  const hash = {};
  for (const s of str1) {
    if (!hash[s]) {
      hash[s] = 0;
    }
    hash[s]++;
  }
  // str2의 요소개수와 비교
  for (const s of str2) {
    // 존재하고, 요소 개수가 1 이상이면 --
    if (hash[s]) {
      hash[s]--;
    }
  }
  // str1의 요소 개수가 모두 0이 되면 anagram
  for (const v of Object.values(hash)) {
    if (v > 0) {
      return false;
    }
  }

  return true;
}

assert(anagram("", "a") === false);
assert(anagram("a", "a") === true);
assert(anagram("a", "b") === false);
assert(anagram("qwer", "werq") === true);
assert(anagram("qwer", "wers") === false);
assert(anagram("qwer", "werqs") === false);
