// function add(a = 2, b = 4) {
//   console.log(`${a} + ${b}`);
//   return a + b;
// }

// console.log(
//   add(),
//   add(1),
//   add(1, 3)
// );


//arguments

// function add(a,b){
//   console.log('1. ', arguments),
//   console.log('2. ', arguments[0]),
//   console.log('3. ', typeof arguments);
//   return a+ b;
// }

// console.log('4.' , add(1,3,5,7));


// function getAverage(){
//   let result = 0; 
//   let count = 0;
//   for(const num of arguments){
//     if(typeof num !== 'number'){
//       continue;
//     }
//     result += num;
//     count++;
//   }
//   return result/count;
// }

// console.log(
//   getAverage(1,3,5,7)
// )


// 즉시실행 함수 요즘 사용 X
// (function () {
//   console.log('IIFE');
// })();