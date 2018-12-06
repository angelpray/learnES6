// 第一种导出方法
// export const A = 123;

// export function test() {
//   console.log('test');
// }

// export class Hello {
//   static test() {
//     console.log('class');
//   }
// }
// 第二种导出方法
const A = 123;

function test() {
  console.log('test');
}

class Hello {
  static test() {
    console.log('class');
  }
}
export default {
  A,
  test,
  Hello
};