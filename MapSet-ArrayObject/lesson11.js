{
  // Map VS Array，增删改查
  let map = new Map();
  let array = [];
  // 增
  map.set('t', 1);
  array.push({
    t: 1
  });
  console.info('map-array', map, array);
  // 查
  let mapExist = map.has('t');
  let arrayExist = array.find(item => item.t);
  console.info('map-array', mapExist, arrayExist);

  // 改
  map.set('t', 2);
  array.forEach((item) => {
    item.t ? item.t = 2 : '';
  });
  console.info('map-array', map, array);

  // 删
  map.delete('t');
  let index = array.findIndex(item => item.t);
  array.splice(index, 1);
  console.info('map-array', map, array);
}

{
  // Set VS Array，增删改查
  let set = new Set();
  let array = [];

  // 增
  set.add({
    t: 1
  });
  array.push({
    t: 1
  });
  console.info('set-array', set, array);

  // 查
  let setExist = set.has({
    t: 1
  });
  let arrayExist = array.find(item => item.t);
  console.info('set-array', setExist, arrayExist);

  // 改
  set.forEach((item) => {
    item.t ? item.t = 2 : '';
  });
  array.forEach((item) => {
    item.t ? item.t = 2 : '';
  });
  console.info('set-array', set, array);

  // 删
  set.forEach((item) => {
    item.t ? set.delete(item) : '';
  });
  let index = array.findIndex(item => item.t);
  array.splice(index, 1);
  console.info('map-array', set, array);
}

{
  // map,set,object
  let item = {
    t: 1
  };
  let map = new Map();
  let set = new Set();
  let obj = {};

  // 增
  obj.t = 1;

  // 查
  objExist = 't' in obj;

  // 改
  obj.t = 2;

  // 删除
  delete obj.t;
  console.info(obj);
}