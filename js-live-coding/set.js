var assert = require("assert");

// obj: Record<string, any>
// paths: string - ex> a.b.c
// value: any - 경로에 설정된 값
// return Record<string, any> - obj에 paths에 value 들어간 객체
function set(obj, paths, value) {
  // paths를 .를 기준으로 파싱
  const pathArr = paths.split(".");

  // path를 타면서 해당 경로로 이동
  pathArr.reduce((acc, path, i) => {
    // 마지막 경로인지 확인
    if (i === pathArr.length - 1) {
      // 해당 경로에 value를 할당
      acc[path] = value;
      return;
    }

    // obj에 해당 path가 있는지 확인
    if (!acc[path]) {
      acc[path] = {};
    }

    return acc[path];
  }, obj);

  return obj;
}

assert.deepEqual(set({}, "a", 3), {
  a: 3,
});

assert.deepEqual(
  set(
    {
      a: {
        b: 3,
      },
    },
    "a.b",
    2
  ),
  {
    a: {
      b: 2,
    },
  }
);

assert.deepEqual(
  set(
    {
      a: {
        b: 3,
      },
    },
    "a.c",
    { c: 3 }
  ),
  {
    a: {
      b: 3,
      c: {
        c: 3,
      },
    },
  }
);
