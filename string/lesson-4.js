{
  // unicode表示法
  let s = '\u0061';
  let s1 = '\u20BB7';
  console.log(s); // a
  // 超过了0xFFFF,
  console.log(s1); // ₻7
  console.log(`\u{20BB7}`); // 𠮷
}

{
  // codePointAt():能获得四个字节的编码
  let s = "𠮷";
  console.log('length', s.length); // 长度
  console.log(s.charAt(0), s.charAt(1)); // 乱码

  let s1 = "𠮷a";
  console.log('length', s.length);
  console.log(s1.codePointAt(0).toString(16)); // 20BB7
  console.log(s1.codePointAt(1)); // 57271 相当于𠮷的第二个字符，也就是后两个字节
  console.log(s1.codePointAt(2)); // 97
}

{
  // fromCharCode()：能返回四个字节的字符表示
  let s = "0x20BB7";
  console.log(String.fromCharCode("0x20BB7"));
  console.log(String.fromCodePoint("0x20BB7"));
}

{
  // for ... of 能遍历字符串中编码大于0xffff的字符
  let str = '\u{20BB7}abc';
  for (let i = 0; i < str.length; i++) {
    console.log('es5', str[i]);
  }
  for (let code of str) {
    console.log('es6', code);
  }
}

{
  // includes(),startsWith(),endsWith()
  let str = "string";
  console.log('include', str.includes('r'));
  console.log('start', str.startsWith('str'));
  console.log('end', str.endsWith('ng'));
}

{
  // repeat(num)
  let str = "abc";
  let str2 = str.repeat(2);
  console.log(str2);
}

{
  // 字符模板 `${var}`
  let name = 'list';
  let info = 'hello world';
  let m = `I am ${name},${info}`;
  console.log(m);
}

{
  // padStart(),padEnd()：补全字符串
  let s = '1';
  console.log(s.padStart(2, '0'));
  console.log(s.padEnd(2, '0'));
}

{
  // 标签模板
  let user = {
    name: 'list',
    info: 'hello world'
  };
  function abc(s, v1, v2) {
    console.log(s, v1, v2);
  }
  // (3)["i am ", ",", "", raw: Array(3)] "list" "hello world"
  abc`i am ${user.name},${user.info}`;
}

{
  // String.raw`` 不转义输出字符串
  let name = 'JR';
  console.log(`Hi\n${name}`);
  console.log(String.raw`Hi\n${name}`);
}