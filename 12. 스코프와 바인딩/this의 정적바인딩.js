const obj1 = {
  func1: function(){
    return true;
  },
  func2(){
    return true;
  },
  func3: () => true
}

console.log(
  obj1.func1(),
  obj1.func2(),
  obj1.func3()
)

//function()으로 선언한 함수만이 생성자 함수로 객체화 시켜서 사용가능



// //화살표 함수와 this
// //function함수나 메서드의 동적 바인딩과 다르게 동작
// //함수가 어디서 선언되었는가에 따름 - 가장 근접한 상위 스코프에 바인딩이 고정(선언된 곳 하나 바깥을 가리킴)
// //즉, this를 정적으로 바인딩

// const outer = {
//   a: true,
//   b: false,

//   func: function () {
//     const inner = {
//       x: 1,
//       y: 2,

//       func1: function () {
//         console.log('1.', this);
//       },
//       func2 () {
//         console.log('2.', this);
//       },
//       func3: () => {
//         console.log('3.', this);
//       }
//     }

//     // this가 inner를 가리킴 
//     inner.func1();
//     inner.func2();

//     // this가 outer를 가리킴
//     inner.func3();
//   }
// }

// outer.func();

// //생성자 함수에서
// function Korean(){
//   this.favorite = '김치';

//   this.makeStew = function(isHot){
//     return `${isHot ? '매운' : '순한'} ${this.favorite}찌개`;
//   };

//   this.fryRice = (isHot) => {
//     return `${isHot ? '매운' : '순한'} ${this.favorite}볶음밥`;
//   };
// }

// function Italian(){
//   this.favorite = '피자';
// }

// const korean = new Korean();
// const italian = new Italian();

// console.log(korean.makeStew(true));
// console.log(korean.fryRice(true));

// italian.makeStew = korean.makeStew;
// italian.fryRice = korean.fryRice;

// console.log(italian.makeStew(false));
// console.log(italian.fryRice(false));


// //클래스에서
// //화살표 함수는 해당 클래스의 객체의 값을 고정 시켜버림
// class Korean{
//   constructor(){
//     this.favorite = '김치';
//     this.fryRice = (isHot) =>{
//       return `${isHot ? '매운' : '순한'} ${this.favorite}볶음밥`;
//     };
//   }
//   makeStew(isHot){
//     return `${isHot ? '매운' : '순한'} ${this.favorite}찌개`;
//   }
// }

// class Italian{
//   constructor(){
//     this.favorite = '피자';
//   }
// }

// const korean = new Korean();
// const italian = new Italian();

// console.log(korean.makeStew(true));
// console.log(korean.fryRice(true));

// italian.makeStew = korean.makeStew;
// italian.fryRice = korean.fryRice;

// console.log(italian.makeStew(false));
// console.log(italian.fryRice(false));

// this가 모듈 객체(현재 비어있음)를 가리킴
console.log('0.', this);

function func1 () {
  // this가 전역 객체를 가리킴
  console.log('1.', this);
}

function func2 () {
  'use strict';
  
  // this가 undefined를 가리킴
  console.log('2.', this);
}

const func3 = () => {
  // 💡 this가 모듈 객체(이 함수의 상위 스코프)를 가리킴
  console.log('3.', this);
}

func1();
func2();
func3();