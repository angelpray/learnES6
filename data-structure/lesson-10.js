{
  // Set
  let list = new Set();
  // add()
  list.add(5);
  list.add(7);
  // size属性
  console.log('size', list.size);
}

{
  // 数组转set
  let arr = [1, 2, 3, 4];
  let list = new Set(arr);
  console.log('size', list.size);
}

{
  // 不重复元素
  let list = new Set();
  list.add(1);
  list.add(2);
  list.add(1);
  console.log(list.size); // 2
  // 数组去重
  let arr = [1, 2, 3, 1, 2];
  let list2 = new Set(arr);
  console.log(list2); // Set {1, 2, 3}
}

{
  // delete(), clear(), has(), add()
  let arr = ['add', 'delete', 'clear', 'has'];
  let list = new Set(arr);
  console.log('has', list.has('add')); // true
  console.log('delete', list.delete('add'), list);
  list.clear();
  console.log(list);
}

{
  // Set遍历, for...of, keys(), values(), entries(), forEach
  let arr = ['add', 'delete', 'clear', 'has'];
  let list = new Set(arr);

  for (let key of list.keys()) {
    console.log('keys', key);
  }
  for (let value of list.values()) {
    console.log('values', value);
  }
  for (let [key, value] of list.entries()) {
    console.log('entries', key, value);
  }
  list.forEach(function(item) {
    console.log(item);
  });
}

{
  // WeakSet
  let weakList = new WeakSet();
  // Set区别1：支持的数据类型只是对象
  let arg = {};
  weakList.add(arg);
  console.log('weakList', weakList);
  // weakList.add(1);
  // Set区别2：WeakSet中的对象都是弱引用（不会检测该对象已经被回收掉了）
  // Set区别3：一些属性和方法都没有：没有clear，没有size，不能遍历
}

{
  // Map
  let map = new Map();
  let arr = ['123'];
  map.set(arr, 456);
  console.log('map', map, map.get(arr));
}

{
  // Map第二种声明方式
  let map = new Map([['a', 123], ['b', 456]]);
  console.log('map args', map, map.size);
  // delete(), clear(), get(key), set(key, value)
}

{
  // WeakMap()
  let weakMap = new WeakMap();
  // Map区别1：key值必须是对象，不能是其他
  let o = {};
  weakMap.set(o, 123);
  console.log(weakMap.get(o));
  // Map区别2：没有size属性，不能使用clear方法，不能遍历
}