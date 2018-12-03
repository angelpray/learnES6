{
  // 声明
  let a1 = Symbol("a1");
  let a2 = Symbol("a2");
  console.log(a1 === a2); // false
  let a3 = Symbol.for('a3'); // a3是key值
  let a4 = Symbol.for('a3');
  console.log(a3 === a4); // true
}

{
  // 作用
  let a1 = Symbol.for('abc');
  // let a1 = "abc";
  let obj = {
    [a1]: '123',
    abc: 345,
    c: 456
  };
  console.log(obj); // { abc: 345, c: 456, [Symbol(abc)]: '123' }

  // getOwnPropertySymbols只取出symbol属性
  Object.getOwnPropertySymbols(obj).forEach(function(item) {
    console.log(obj[item]);
  });
  // Reflect.ownKeys(obj)包含symbol以及非symbol
  Reflect.ownKeys(obj).forEach(function(item) {
    console.log(obj[item]);
  });
}