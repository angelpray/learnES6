{
  // 进制
  let a = 0b1101;
  let b = 0o15;
  let c = 0x000d;
  console.log(a, b, c); // 13
}

{
  // isFinite(), isNaN()
  let num = 10;
  console.log(Number.isFinite(num)); // true
  console.log(Number.isFinite(NaN)); // false
  console.log(Number.isNaN(NaN)); // true
}

{
  // isInteger(num)
  let a = 25;
  let b = 25.0;
  let c = 25.1;
  // true true false
  console.log(Number.isInteger(a), Number.isInteger(b), Number.isInteger(c));
  console.log(Number.isInteger('25')); // false,接收的参数必须是一个Number类型
}

{
  // Number.MAX/MIN_SAFE_INTEGER,表示整数的安全最大最小限度
  // isSafeInteger()
  let max = Number.MAX_SAFE_INTEGER;
  let min = Number.MIN_SAFE_INTEGER;
  console.log(max.toExponential(), min.toExponential());
}

{
  // Math.trunc() 取整数部分
  let a = 5.1;
  console.log(Math.trunc(5.1), Math.trunc(5.9)); // 5 5
}


{
  // Math.sign() 判断正负0
  let a = 2;
  let b = 0;
  let c = -2;
  console.log(Math.sign(a), Math.sign(b), Math.sign(c));
}

{
  // Math.cbrt() 立方根
  let a = 8;
  console.log(Math.cbrt(8)); // 2
}