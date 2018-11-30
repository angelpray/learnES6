{
  // 数组
  let a,
    b,
    rest;
  [a, b] = [1, 2];
  console.log(a, b);
}

{
  // 数组解构赋值的特性
  let a,
    b,
    rest;
  [a, b, ...rest] = [1, 2, 3, 4, 5, 6];
}

{
  // 对象
  let a,
    b;
  ({ a, b } = { a: 1, b: 2 });
  console.log(a, b);
}

{
  // 默认值
  let a,
    b,
    c,
    rest;
  [a, b, c = 3] = [1, 2];
  console.log(a, b, c); // c = 3,如果没有赋值，则默认等于3
}

{
  // 交换值
  let a = 1;
  let b = 2;
  [a, b] = [b, a];
  console.log(a, b);
}

{
  // 在函数中的应用：返回一个数组
  function f() {
    return [1, 2];
  }
  let a,
    b;
  [a, b] = f();
  console.log(a, b);
}

{
  // 取出特定索引值
  function f() {
    return [1, 2, 3, 4, 5];
  }
  let a,
    b,
    c;
  [a, , , b] = f();
  console.log(a, b);
}

{
  // 剩余数组特性
  function f() {
    return [1, 2, 3, 4, 5];
  }
  let a,
    b,
    c;
  [a, ...b] = f();
  console.log(a, b);
}

{
  // 对象解构赋值
  let o = { p: 42, q: true };
  let { p, q } = o;
  console.log(p, q);
}

{
  // 对象赋值的默认值
  let { a = 10, b = 5 } = { a: 3 };
  console.log(a, b);
}

{
  // 对象赋值的应用：JSON对象
  let metaData = {
    title: 'abc',
    test: [{
      title: 'test',
      desc: 'description'
    }]
  };
  let { title: esTitle, test: [{title: cnTitle}]} = metaData;
  console.log(esTitle, cnTitle);
}