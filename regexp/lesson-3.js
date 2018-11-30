{
  // 构造函数的变化
  let regex = new RegExp('xyz', 'i');
  let regex2 = new RegExp(/xyz/i);
  console.log(regex.test('xyz123'), regex2.test('xyz123'));

  let regex3 = new RegExp(/xyz/ig, 'i'); // i 覆盖ig
  console.log(regex3.flags); // i
}

{
  // y修饰符 粘连属性
  let s = 'bbb_bb_b';
  let regex = /b+/g;
  let regex2 = /b+/y;

  // bbb bbb
  console.log('one', regex.exec(s), regex2.exec(s));
  // bb null y修饰符必须是紧跟着上一个匹配到后的第一个位置
  console.log('two', regex.exec(s), regex2.exec(s));

  console.log(regex.sticky, regex2.sticky);
}

{
  // u修饰符识别unicode编码
  let regex = /^\uD83D/;
  let regex1 = /^\uD83D/u;
  // 没加u，需要匹配的字符当做四个字节，当成两个字符
  console.log('u-1', regex.test('\uD83D\uDC2A'));
  // 加了u，需要匹配的字符当做两个字节，一个字符
  console.log('u-1', regex1.test('\uD83D\uDC2A'));

  console.log(`\u{20BB7}`); // 𠮷
}