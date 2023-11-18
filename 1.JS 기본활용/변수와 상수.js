const SALUTATION = 'Hello,';
let person = '철수';
console.log(SALUTATION, person);

person = '영희';
console.log(SALUTATION, person);

let x; // 변수 선언
console.log(x); // undefined;

x = 1; 
console.log(x); // 1 -> 1을 선언해주었기 때문

let z = 1;
let y = z;
console.log(z, y); //같은 값이 다른 데이터 영역에 저장되지 않음 

x = 'Hello!';
console.log('변경 후', x);

//상수는 데어터를 선언하면서 초기화 시켜줘야 함
const PI = 3.14; //만약 const PI; 불가능 또한 PI = 3.14159로 변경 불가능 
console.log(PI);

let $number = 1;
console.log($number);