// function isOdd(x){
//   if(!x % 2 == 0){
//     return false;
//   } else {
//     true;
//   }
// }

// let num = 12;

// console.log(
//   `${num}(는)은 
//   ${isOdd(num) ? '홀' : '짝'}
//   수 입니다.`
// )

// let currentTemp = 24.5;

// function logCurrentTemp(){
//   console.log(`현재 온도는 섭씨 ${currentTemp}도 입니다.`);
// }

// console.log('반환값 :', logCurrentTemp());

function add(x,y){
  console.log(`${x}와 ${y}를 더합니다.`);
  return x + y;
  console.log(`결과는 ${x+y}입니다.`); //실행 안됨
}

add(2,3);

//함수는 호이스팅이 가능하다.
//JS는 실행될때 초기에 function을 돌면서, 메모리에 올린다.


console.log(typeof add); // function 타입

const subt = function(x,y){
  console.log(x - y);
  return x - y;
}

const subt1 = add;
subt(1,2);
subt1(1,2);

//화살표 함수 블록이 없으면 별도의 return이 필요없다. java 람다와 유사함
//하지만 block이 있으면 return이 필수
const multiple = (x,y) => x * y;


const multiple2 = (x,y) => {
  return x*y;
}

console.log(multiple2(1,2));

//function으로 선언된 함수가 아닌 const나 let과 같이 상수에 선언된 함수 또는 => 화살표 함수는 호이스팅 불가