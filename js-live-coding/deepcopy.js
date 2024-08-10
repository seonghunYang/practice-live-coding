const assert = require("assert");

// obj: null | boolean | number | strubg | Array<any> | Record<any, any>
// return: null | boolean | number | strubg | Array<any> | Record<any, any>  - obj의 값을 복사한 레퍼런스가 다른 객체
function deepCopy(obj) {
  // js에서 null의 type은 object
  // null 인지 확인
  // null 이면 바로 return
  if (obj === null) return null;

  // 원시값일 때
  if (typeof obj !== "object") {
    return obj;
  }

  // 배열일 때
  if (Array.isArray(obj)) {
    const new_arr = obj.map((item) => deepCopy(item));

    return new_arr;
  }

  // 객체일 때
  if (typeof obj === "object") {
    const new_obj = {};

    for (const [k, v] of Object.entries(obj)) {
      // 요소를 deepcopy
      new_obj[k] = deepCopy(v);
    }
    // 새 객체를 만들어 반환
    return new_obj;
  }

  console.warn("입력값의 타입이 정해진 형식이 아닙니다.");
}

assert.deepEqual(deepCopy(2), 2);

assert.deepEqual(deepCopy({}), {});

assert.deepEqual(
  deepCopy({
    a: 1,
  }),
  {
    a: 1,
  }
);

assert.deepEqual(
  deepCopy({
    a: 1,
    b: {
      c: 3,
      d: [1, 2, 3],
    },
  }),
  {
    a: 1,
    b: {
      c: 3,
      d: [1, 2, 3],
    },
  }
);

assert.deepEqual(deepCopy([1, 2, 3]), [1, 2, 3]);

assert.deepEqual(deepCopy([1, { a: 2 }]), [1, { a: 2 }]);

assert.deepEqual(deepCopy(null), null);
