//JS는 동적 타입을 가진 언어
let x =  1;
console.log(x, typeof x);
x = '문자열로 변경';
console.log(x, typeof x); // number에서 - > String 으로 변환되는게 가능... 

function getUpperCase(str){
  return str.toUpperCase();
}

console.log(getUpperCase('hello'));
// console.log(getUpperCase(1)); //오류

