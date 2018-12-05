{
  let obj = {
    time: '2017-12-04',
    name: 'net',
    _r: 123
  };

  let monitor = new Proxy(obj, {
    // 拦截对象属性的读取
    get(target, key) {
      if (key === 'time') {
        return target[key].replace('2017', '2018');
      }
      return target[key];
    },
    // 拦截对象设置属性
    set(target, key, value) {
      // 只能设置name属性的值
      if (key === 'name') {
        target[key] = value;
        return target[key];
      }
      return target[key];
    },
    // 拦截key in obj操作
    has(target, key) {
      if (key === 'name') {
        return target[key];
      }
      return false;
    },
    // 拦截delete
    deleteProperty(target, key) {
      if (key.indexOf('_') > -1) {
        delete target[key];
        return true;
      }
      return target[key];
    },
    // 拦截Object.keys, object.getOwnpropertySymbols,Object.getOwnPropertyNames
    ownKeys(target) {
      return Object.keys(target).filter(item => item !== 'time');
    }
  });

  console.log('get', monitor.time, monitor);
  monitor._r = "234";
  monitor.name = "JR";
  console.log('set', monitor.time, monitor);
  console.log('has', 'name' in monitor);

  // delete monitor._r;
  // console.log(monitor);
  console.log('ownKeys', Object.keys(monitor));
}

{
  // Reflect
  let obj = {
    time: '2017-12-04',
    name: 'net',
    _r: 123
  };
  // Reflect.get
  console.log('reflect', Reflect.get(obj, 'time'));
  // Reflect.set
  Reflect.set(obj, 'name', 'JR');
  console.log(obj);
  // Reflect.has
  console.log('has', Reflect.has(obj, 'name'));
}

{
  function validator(target, validator) {
    return new Proxy(target, {
      _validator: validator,
      set(target, key, value, proxy) {
        if (target.hasOwnProperty(key)) {
          let va = this._validator[key];
          if (va(value)) {
            return Reflect.set(target, key, value, proxy);
          }
          throw Error(`不能设置${key}到${value}`);
        } else {
          throw Error(`${key} 不存在`);
        }
      }
    });
  }
  // 通过Proxy，把对象本身跟条件隔离开
  const personValidators = {
    name(val) {
      return typeof val === "string";
    },
    age(val) {
      return typeof val === "number" && val > 18;
    }
  };

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      return validator(this, personValidators);
    }
  }

  const person = new Person('JR', 22);
  person.name = 'JIARONG';
  console.info(person);
}