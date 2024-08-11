const assert = require("assert");

// obj1 - 원시값, 객체, 배열
// obj2 - 원시값, 객체, 배열
// return: boolean - obj1과 obj2의 값이 같은지를 검사한다.
function deepEqual(obj1, obj2) {
  // null 일 때
  if (obj1 === null || obj2 === null) {
    return obj1 === obj2;
  }

  // 원시 값일 때
  if (typeof obj1 !== "object" && typeof obj2 !== "object") {
    // NaN === NaN 은 JS에서 false기 때문에 처리
    if (Number.isNaN(obj1) && Number.isNaN(obj2)) return true;

    // 둘의 값을 비교
    return obj1 === obj2;
  }

  // 배열 일 때
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    // 둘의 길이가 다른지 확인
    if (obj1.length !== obj2.length) return false;

    // 각 요소가 같은지 확인 - DeepEqual 재귀적으로 확인
    for (let i = 0; i < obj1.length; i++) {
      if (!deepEqual(obj1[i], obj2[i])) return false;
    }
    return true;
  }

  // 객체 일 때
  if (typeof obj1 === "object" && typeof obj2 === "object") {
    // 키의 길이가 같은지 확인
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
    // 키의 value가 같은지 확인
    for (const key of Object.keys(obj1)) {
      if (!deepEqual(obj1[key], obj2[key])) return false;
    }
    return true;
  }

  // 둘의 타입이 다를 때
  return false;
}

assert.equal(deepEqual(2, {}), false);
assert.equal(deepEqual(1, 1), true);
assert.equal(deepEqual("a", "a"), true);
assert.equal(deepEqual("a", "b"), false);

assert.equal(deepEqual([1], []), false);
assert.equal(deepEqual([], []), true);
assert.equal(deepEqual([1, 2], [1, 2]), true);
assert.equal(deepEqual([1, [1, 2]], [1, [1, 2]]), true);
assert.equal(
  deepEqual(
    [
      1,
      {
        a: "a",
      },
    ],
    [
      1,
      {
        a: "a",
      },
    ]
  ),
  true
);

assert.equal(deepEqual({}, {}), true);
assert.equal(deepEqual({ a: "a" }, { a: "a" }), true);
assert.equal(
  deepEqual(
    {
      a: {
        b: "a",
      },
    },
    {
      a: {
        b: "a",
      },
    }
  ),
  true
);
assert.equal(
  deepEqual(
    {
      a: {
        b: "a",
      },
    },
    {
      a: {
        b: "a",
      },
    }
  ),
  true
);
assert.equal(
  deepEqual(
    {
      a: {
        b: ["a", "b"],
      },
    },
    {
      a: {
        b: ["a", "b"],
      },
    }
  ),
  true
);
assert.equal(
  deepEqual(
    {
      a: {
        b: "a",
      },
    },
    {
      a: {
        b: "a",
        c: "a",
      },
    }
  ),
  false
);

assert.equal(deepEqual(NaN, NaN), true);
assert.equal(deepEqual(null, null), true);
assert.equal(deepEqual(null, {}), false);
