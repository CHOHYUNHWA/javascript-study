console.log(hoisted1);
var hoisted1 = 'Hello';
console.log(hoisted1);


console.log(hoisted2);
let hoisted2 = 'tata';
console.log(hoisted2); //let도 호이스팅이 안되는 것은 아니지만 undefined로 초기화되지 않음
//초기화 이전 영역 TDZ에 속해짐
//ReferenceError 발생