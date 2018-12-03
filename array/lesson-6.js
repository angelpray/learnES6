{
  // Array.of(args...)
  let arr = Array.of(3, 4, 7, 9, 11);
  console.log(arr);
}

{
  // Array.from()，转换成数组对象
  let p = document.querySelectorAll('p');
  let pArr = Array.from(p);
  pArr.forEach(function(item) {
    console.log(item.textContent);
  });
  console.log(Array.from([1, 3, 5], function (item) {
    return item * 2;
  }));
}

{
  // fill(替换的内容，开始的位置，截止位置)
  let arr = [1, 'a', undefined];
  console.log(arr.fill(1));
  let arr1 = ['a', 'b', 'c', 'd', 'e', 'f'];
  console.log(arr1.fill(7, 1, 4));
}

{
  // for...of, keys(), values(), entries()
  let arr = ['1', 'c', 'ks'];
  // 0 1 2
  for (let index of arr.keys()) {
    console.log('keys', index);
  }
  // 1 c ks
  for (let value of arr.values()) {
    console.log('values', value);
  }
  for (let [index, value] of ['1', 'c', 'ks'].entries()) {
    console.log('index, vlaue', index, value);
  }
}

{
  // copyWithIn() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它
  let arr = [1, 2, 3, 4, 5];
  console.log(arr.copyWithin(0, 3, 5)); // [4,5,3,4,5]
}

{
  // find(), findIndex()
  let arr = [1, 2, 3, 4, 5, 6];
  console.log(arr.find(function(item) {
    return item > 3;
  })); // 4
  console.log(arr.findIndex(function(item) {
    return item > 3;
  })); // 3
}

{
  // include() 是否包含
  let arr = [1, 2, 3];
  console.log(arr.includes(1));
}