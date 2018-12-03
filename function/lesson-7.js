{
  // 函数参数默认值,注意默认值参数后不能再有普通参数。
  function test(x, y = 'word') {
    console.log('默认值', x, y);
  }
  test('hello'); // 默认值 hello word
  test('hello', 'JR'); // 默认值 hello JR
}

{
  // 参数默认值的作用域
  let x = 'test';
  function test2(x, y = x) {
    console.log('作用域', x, y);
  }
  test2('kill'); // 作用域 kill kill
}

{
  // rest后面不能再有其他参数
  function test3(...arg) {
    for (let v of arg) {
      console.log(v);
    }
  }
  test3(1, 2, 3, 4);
}

{
  // 扩展运算符
  let arr = [1, 2, 4];
  console.log('a', ...[1, 2, 4]);
}

{
  // 箭头函数
  let arrow = v => v * 2;
  let arrow2 = () => 5;
  console.log(arrow(3)); // 6
  console.log(arrow2()); // 5
}

{
  // 尾调用：存在于函数式编程,函数的最后是不是一个函数。
  function tail(x) {
    console.log('tail', x);
  }
  function fx(x) {
    return tail(x);
  }
  fx(123);
}