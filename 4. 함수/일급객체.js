//일급객체 
//1. 상수 또는 변수에 할당될 수 있음
//2. 다른 함수에 인자로 전달될 수 있음
//3. 다른 함수의 결과값으로서 반환될 수 있음

// let person =  {
//   name : '홍길동',
//   age : 30,
//   married : true,
//   introduce : function(formal){
//     return formal
//     ? '안녕하십니까. 홍길동 대리라고 합니다.' : '안녕하세요, 홍길동이라고 해요.';
//   }
// }

// console.log(person.introduce(false));
// console.log(person.introduce(true));

// let person = {
//   name : '홍길동',
//   age : 30,
//   married : false,
//   introduce: function(){
//     return `제 이름은 ${this.name} 이며, ${this.age}살이고 ${this.married ? '기혼' : '미혼'}입니다. `
//   }
// }

// console.log(person.introduce());


//고차함수 : 전달 받는 함수
//전달되는 함수  : 콜백 함수
//doInArray = > 고차함수
//console.log = > 콜백 함수

// let list = [1,2,3,4,5];

// function doInArray(array, func){
//   for(item of array){
//     func(item);
//   }
// }

// doInArray(list, console.log);

//익명함수 () => { return}과 같이 이름이 없는 함수를 익명 함수라 함

// const add = (a,b) =>{
//   return a+b;
// }

// const substract  = (a,b) => a-b;

// const multiply = (a,b) => a * b;

// const isOdd = (number) => !!(number % 2);
// const isPositive = (number) => (number > 0);

// function calAndEval(calc, eval, x, y){
//   return eval(calc(x,y));
// }

// console.log(
//   calAndEval(add, isOdd, 5, 7),
//   calAndEval(substract, isPositive, 5, 7),
//   calAndEval(multiply, isOdd, 5, 7)
// )


