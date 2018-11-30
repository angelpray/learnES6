function test() {
  let a = 1;
  // let a = 2; 报错，不可以重复
  for (let b = 1; b < 3; b++) {
    console.log(b);
  }
  // console.log(b);报错，let形成块级作用域
  const c = 1;
  // c = 2; 报错，const是常量，只读
  // obj是一个指针，但对象本身是可以修改的
  const obj = {
    a: 1,
  };
  obj.b = 2;
}
test();