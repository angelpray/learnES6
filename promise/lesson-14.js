{
  // 回调基本定义
  let ajax = function (callback) {
    console.log('执行');
    setTimeout(() => {
      callback && callback.call();
    }, 1000);
  };
  // 回调的方式多了的话会很复杂，很难阅读发现代码执行顺序
  ajax(function () {
    console.log('timeout1');
  });
}

{
  // promise简单实现
  let ajax = function () {
    console.log('执行2');
    // resolve执行下一步操作，reject终止当前操作
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };

  ajax().then(function () {
    console.log('promise', 'timeout2');
  });
}

{
  // promise + then,连续回调
  let ajax = function () {
    console.log('执行3');
    // resolve执行下一步操作，reject终止当前操作
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };

  ajax()
    .then(function () {
      console.log('执行3-1');
      return new Promise(function (resolve, reject) {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
    })
    .then(function () {
      console.log('timeout3');
    });
}

{
  let ajax = function (num) {
    console.log('执行4');
    return new Promise(function(resolve, reject) {
      if (num > 5) {
        resolve();
      } else {
        throw new Error('出错了');
      }
    });
  };
  ajax(1).then(function() {
    console.log('log', 1);
  }).catch(function(err) {
    console.log('catch', err);
  });
}

{
  // 所有图片加载完再添加到页面,Promise.all()
  function loadImg(src) {
    return new Promise((resolve, reject) => {
      let img = document.createElement('img');
      img.src = src;
      img.onload = function() {
        resolve(img);
      };
      img.onerror = function() {
        reject(err);
      };
    });
  }
  function showImgs(imgs) {
    imgs.forEach(function(img) {
      document.body.appendChild(img);
    });
  }

  Promise.all([
    loadImg('src1'),
    loadImg('src2'),
    loadImg('src3')
  ]).then(showImgs);
}

{
  // 加载一张图片，从不同源加载，谁快谁加载
  function loadImg(src) {
    return new Promise((resolve, reject) => {
      let img = document.createElement('img');
      img.src = src;
      img.onload = function() {
        resolve(img);
      };
      img.onerror = function() {
        reject(err);
      };
    });
  }

  function showImgs(img) {
    let p = document.createElement('p');
    p.appendChild(img);
    document.body.appendChild(p);
  }

  Promise.race([
    loadImg('src1'),
    loadImg('src2'),
    loadImg('src3')
  ]).then(showImgs);
}