const winners = [12, 592, 7, 48];
const weekdays = ['월', '화', '수', '목', '금', '토', '일'];
const randoms = ['홍길동', -24, true, null, undefined];

console.log(typeof winners);
console.log(winners, weekdays, randoms);

//수정
const numbers = [1,2,3];
numbers[2] = 5;
console.log(numbers);

numbers.push('1');
console.log(numbers);
console.log(numbers.length, typeof numbers[2]);