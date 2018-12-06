{
  // Decorator基本定义
  let readonly = function (target, name, descriptor) {
    descriptor.writable = false;
    return descriptor;
  };
  class Test {
    @readonly
    time() {
      return '2018-12-6';
    }
  }
  let test = new Test();
  console.log(test.time());

  // 第三方库修饰器的js库，core-decorators
}