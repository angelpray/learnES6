{
  // class
  class Parent {
    constructor(name = "JR") {
      this.name = name;
    }
  }
  let vParent = new Parent('v');
  console.log('构造函数和实例', vParent);
}

{
  // 继承传递参数
  class Parent {
    constructor(name = "JR") {
      this.name = name;
    }
  }
  class Child extends Parent {
    constructor(name = "child") {
      // **super方法必须放在第一行**
      super(name);
      this.type = 'child';
    }
  }
  console.log('继承', new Child());
}

{
  // getter(), setter()
  class Parent {
    constructor(name = "JR") {
      this.name = name;
    }
    // longName是一个属性，而不是方法
    get longName() {
      return `mk${this.name}`;
    }

    set longName(value) {
      this.name = value;
    }
  }
  let v = new Parent();
  console.info('getter', v.longName);
  v.longName = 'hello';
  console.info('setter', v.longName);
}

{
  // 静态方法:通过类调用而不是实例调用
  class Parent {
    constructor(name = "JR") {
      this.name = name;
    }

    static tell() {
      console.log('静态方法tell');
    }
  }
  Parent.tell();
}

{
  // 静态属性
  class Parent {
    constructor(name = "JR") {
      this.name = name;
    }
    static tell() {
      console.log('tell');
    }
  }
  Parent.type = 'test';

  console.log('静态属性', Parent.type);
}