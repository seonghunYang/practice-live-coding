var assert = require("assert");
// num: number
// return: boolean - 소수인지 아닌지 판별
function isPrime(num) {
  // num이 1인지 확인
  if (num === 1 || num === 2) return false;

  // num의 제곱근 만큼 반복
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  // num을 나눠 나머지가 0인지 확인

  return true;
}

assert.equal(isPrime(3), true);
assert.equal(isPrime(7), true);

assert.equal(isPrime(2), false);
assert.equal(isPrime(1), false);
