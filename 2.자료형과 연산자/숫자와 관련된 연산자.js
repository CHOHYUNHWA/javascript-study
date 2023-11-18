//JS에는 별도의 정수와 실수 자료형이 없음 (float, double과 같은) number로 통일

let integer = 100;
let real = 1.234;
let negative = -5.67;

console.log(
  typeof integer,
  typeof real,
  typeof negative
)

//JS에는 0으로 나눌경우 무한대가 출력됨
//Infinity도 예약어임 
let x = 1 / 0;
console.log(x, typeof x);

// 무한대에는 양음이 있음
console.log(-x, typeof -x);

let y = -1 / 0;
console.log(y, typeof y);

let z = Infinity;
console.log(z, typeof z);



//만약 숫자 와 이상하게 문자열이나 다른타입으로 연산시 NaN이 출력됨
//NaN은 양수 음수가 없다.
let a = 1 / 'abc';
let b = 2 / "가나다";
let c = NaN;

console.log(
  a, typeof a,
  b, typeof b,
  c, typeof c
)

//NaN인지 확인하려면 isNaN, Number.isNaN을 사용
console.log(
  a,
  a == NaN,
  a === NaN,
  isNaN(a), // 숫자가 아닐 시 true
  Number.isNaN(a), // 보다 엄격한 버전
  isNaN('string')
);


//** 은 제곱
console.log(2 **3); //세제곱

//Float 정확한 연산이 안나옴
console.log(0.1 + 0.2)