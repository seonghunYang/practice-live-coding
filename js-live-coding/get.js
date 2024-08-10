const assert = require("assert");

// obj: Record<string, any>
// paths: string - Ex> a.b.c
// defaultValue: any - paths에 해당하는 값이 없을때 기본 값
// return: any - obj에서 paths에 해당하는 value
function get(obj, paths, defaulValue) {
  const pathsArr = paths.split(".");

  const result = pathsArr.reduce((acc, path) => {
    // undefined 인지 확인
    if (!acc) return;

    // acc에 path가 있는지 확인
    if (acc[path]) {
      // 다음 값으로 path를 넘김
      return acc[path];
    } else {
      // undefined를 리턴
      return;
    }
  }, obj);

  return result ? result : defaulValue;
}

(() => {
  assert.equal(get({ a: 1 }, "a", 2), 1);
})();

(() => {
  assert.equal(
    get(
      {
        a: {
          b: 1,
        },
        b: 2,
      },
      "a.b"
    ),
    1
  );
})();

assert.equal(get({ a: 1 }, "b", 3), 3);
assert.equal(get({ b: 1 }, "a.b", 3), 3);
