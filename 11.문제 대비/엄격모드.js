'use strict';

// notDeclared = 1 ;
// console.log(notDeclared);

//user strict 는 모든 js파일에 모두 선언해줘야함



//함수 내 최상단 사용시, 함수에만 user strict 적용
// notDec1 = 1;

// function strictFunc(){
//   'use strict';

//   notDec2 = 2;
//   console.log(notDec2);
// }

// console.log(notDec1);
// strictFunc();



// let toDelete1 = 1;
// delete toDelete1; //object의 특정값만 삭제 가능

// console.log('1. ' , toDelete1);
let obj = {
  x : 1,
  y : 'a'
}

delete obj.x;

console.log(obj);