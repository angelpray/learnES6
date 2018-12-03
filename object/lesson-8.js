{
  // 简洁表示法
  let o = 1;
  let k = 2;
  let es6 = {
    o,
    k,
    test() {
      console.log('hello es6');
    }
  };
  console.log(es6.o, es6.k);
  es6.test();
}

{
  // 属性表达式
  let a = 'b';
  let es5 = {
    a: 'c',
    b: 'c'
  };

  let es6 = {
    [a]: 'c'
  };
  console.log(es5.a, es5.b, es6[a], es6.b); // c c c c
}

{
  // Object.is(var1, var2)
  let s1 = 'abc';
  let s2 = 'abcd';
  console.log(Object.is(s1, s2), s1 === s2); // false false

  let arr1 = [1, 2];
  let arr2 = [1, 2];
  console.log(Object.is(arr1, arr2), arr1 === arr2); // false false
}

{
  // Object.assign(target, obj);
  let tObj = {a: 1};
  let obj = {b: 2};

  let newObj = Object.assign(tObj, obj);
  console.log(newObj);
}

{
  // Object.entries(obj)
  let test = {a: 1, b: 2};
  for (let [key, value] of Object.entries(test)) {
    console.log([key, value]);
  }
}

{
  // 扩展运算符
  let {a, b, ...c} = {
    a: 'test', b: 'kill', c: 'hello', d: 'es6'
  };
  console.log(a, b, c); // test kill {c: "hello", d: "es6"}
}