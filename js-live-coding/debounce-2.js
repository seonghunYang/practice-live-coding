const assert = require("assert");

// callbackFn: function - 마지막 실행 후 timeout이 지나야 실행되는 callback 함수
// timeout: number - 마지막 실행 후 몇 초 뒤에 실행될 것인지 결정하는 인자
// return:function - debounced callback 함수
function debounce(callbackFn, timeout) {
  let timer;
  return function (...args) {
    // 이전에 timer가 있으면 제거
    clearTimeout(timer);

    // timeout 이후 callbackFn 실행
    // timer 등록
    timer = setTimeout(() => {
      console.log("실행");
      callbackFn(...args);
    }, timeout);
  };
}

(() => {
  let i = 0;
  const increment = () => i + 1;

  const debouncedIncrement = debounce(increment, 10);

  debouncedIncrement();
  assert.equal(i, 0);
})();

(() => {
  let i = 0;
  const increment = () => i++;

  const debouncedIncrement = debounce(increment, 10);

  debouncedIncrement();
  debouncedIncrement();
  assert.equal(i, 0);

  setTimeout(() => {
    assert.equal(i, 1);
  }, 30);
})();
