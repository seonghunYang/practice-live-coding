var assert = require("assert");

// products: Product[] - { name: string, category: string}의 배열
// Return: object - category로 그룹화된 객체 ex> { [category]: Product[], ... }
function solution(products) {
  // 카테고리 종류 추출
  // const categorys = new Set();
  // for (const product of products) {
  //   categorys.add(product.category);
  // }

  // // 카테고리 종류를 key 가진 객체 생성
  // const obj = {};
  // for (const category of categorys) {
  //   obj[category] = [];
  // }

  // 카테고리 종류에 맞춰 객체에 Product 넣기
  const obj = {};
  for (const product of products) {
    if (!obj[product.category]) {
      obj[product.category] = [];
    }
    obj[product.category].push(product);
  }
  return obj;
}

assert.deepEqual(
  solution([
    { name: "apples", category: "fruits" },
    { name: "oranges", category: "fruits" },
    { name: "potatoes", category: "vegetables" },
  ]),
  {
    fruits: [
      { name: "apples", category: "fruits" },
      { name: "oranges", category: "fruits" },
    ],
    vegetables: [{ name: "potatoes", category: "vegetables" }],
  }
);
