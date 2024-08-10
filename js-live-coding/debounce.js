var assert = require("assert");
// callback: function - 마지막 호출 후 특정 timeout이 지나야 실행
// timeout: number - 마지막 호출로부터 이 시간이 지나야 호출
// return: function
function debounce(func, wait) {
  let timer;

  // 객체에서 사용할 수 있게 this를 사용할 수 있도록 화살표 함수 사용 x
  return function (...args) {
    // 기존에 있던 타이머 전부 삭제
    clearTimeout(timer);
    // timerQueue.filter((timer) => {
    //   return false;
    // });
    // timeout을 기준으로 새로운 타이머 등록
    timer = setTimeout(() => {
      // this를 bind 해주고 인자값을 전달하기
      func.call(this, ...args);
    }, wait);
    // timerQueue.push(timer);
  };
}

// 즉시 실행함수로 테스트 케이스를 분리
(function () {
  let i = 0;
  const incrementDebounce = debounce(() => i++, 10);

  incrementDebounce();

  assert.equal(i, 0);

  setTimeout(() => {
    assert.equal(i, 1);
  }, 20);
})();

(function () {
  let i = 0;
  const incrementDebounce = debounce(() => i++, 10);

  incrementDebounce();
  incrementDebounce();

  assert.equal(i, 0);

  setTimeout(() => {
    assert.equal(i, 1);
  }, 20);
})();
