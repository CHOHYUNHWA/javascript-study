//배열의 고차함수 메서드

//forEach -각 요소를 인자로 콜백함수 실행
//for문의 좋은 대체제
//단점 : 예외를 던지지 않으면 종료 불가

//인자들 
//콜백함수-인자 : 현재값, 현재값의 인덱스, 해당 배열
//thisArg

// const arr = [1,2,3,4,5];
// const result = arr.forEach(item => {
//   console.log(item);
// })

// console.log('반환값:', result); // 리턴 값이 없음

// const arr = [1,2,3,4,5];
// arr.forEach(console.log);

// const arr = [10,20,30,40,50];

// arr.forEach((item, idx) =>{
//   console.log(item,idx);
// })

// const logWithIndex = (item, idx) => {
//   console.log(`[${idx}] : ${item}`);
// }

// arr.forEach(logWithIndex);

// arr.forEach((item, idx, arr) =>{
//   arr[idx]++;
//   console.log(item);
// })

// console.log(arr);





//map - 각 요소를 주어진 콜백함수로 처리한 새 배열 반환
//인자 -> 콜백함수-인자 : (현재 값, 현재값의 인덱스, 해당 배열)
//thisArg
// const orgArr = [1,2,3,4,5];
// const arr1 = orgArr.map(i => i + 1);
// const arr2 = orgArr.map(i => i*i);
// const arr3 = orgArr.map(i => i%2 ? '홀' : '짝');

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);


// const orgArr = [
//   { name: '사과', cat: '과일', price: 3000 },
//   { name: '오이', cat: '채소', price: 1500 },
//   { name: '당근', cat: '채소', price: 2000 },
//   { name: '살구', cat: '과일', price: 2500 },
//   { name: '피망', cat: '채소', price: 2500 },
//   { name: '딸기', cat: '과일', price: 5000 }
// ];


// const arr1 = orgArr.map(itm => {
//   // 💡 블록 안에서는 return 문 필요함
//   return {
//     name: itm.name,
//     cat: itm.cat
//   }
// });

// const arr2 = orgArr.map(({name, cat})=>{
//   return {name, cat};
// })
// console.log(arr1);
// console.log(arr2);


// const joined = orgArr.map(({name, cat, price}, idx) => {
//   return `${idx +1 } : [${cat}] ${name} : ${price}원`
// }).forEach(item => console.log(item));









//find, findLast, findIndex, findLastIndex - 주어진 기준으로 검색
// const arr = [1,2, '삼', 4,5,6,'칠', 8,9];

// const isString = (i) => typeof i === 'string';
// const isBoolean = i => typeof i ==='boolean';

// console.log(
//   arr.find(isString),
//   arr.findLast(isString),
//   arr.findIndex(isString),
//   arr.findLastIndex(isString)
// );


// console.log(
//   arr.find(isBoolean),
//   arr.findLast(isBoolean),
//   arr.findIndex(isBoolean),
//   arr.findLastIndex(isBoolean)
// );


// const arr = [
//   { name: '사과', cat: '과일', price: 3000 },
//   { name: '오이', cat: '채소', price: 1500 },
//   { name: '당근', cat: '채소', price: 2000 },
//   { name: '살구', cat: '과일', price: 2500 },
//   { name: '피망', cat: '채소', price: 3500 },
//   { name: '딸기', cat: '과일', price: 5000 }
// ];

// const isCheapFruit = i => {
//   return i.cat === '과일' && i.price < 3000;
// }

// console.log(
//   arr.find(({cat}) => cat === '채소').name,
//   arr.findLast(isCheapFruit).name
// );






//some , every  - 어떤/모든 요소가 기준을 충족하는지 확인
//some - 요소들 중 하나라도 true인 경우
//every - 모든 요소가 true인 경우

// const arr = [1,2,3,4,5,6,7,8];

// console.log(
//   arr.some(i => i %2),
//   arr.every(i => i % 2),
//   arr.some(i => i < 0),
//   arr.every(i => i < 10)
// )


// const arr = [
//   { name: '사과', cat: '과일', price: 3000 },
//   { name: '오이', cat: '채소', price: 1500 },
//   { name: '당근', cat: '채소', price: 2000 },
//   { name: '살구', cat: '과일', price: 2500 },
//   { name: '피망', cat: '채소', price: 3500 },
//   { name: '딸기', cat: '과일', price: 5000 }
// ];

// const isCheapVege = i => {
//   return i.cat === '채소' && i.price < 2000;
// }
// const isPlant = ({cat}) => {
//   return ['과일', '채소'].includes(cat);
// }

// console.log(
//   arr.some(isCheapVege), // true
//   arr.every(isCheapVege), //false
//   arr.some(isPlant),
//   arr.every(isPlant)
// );








//filter
//주어진 기준을 충족하는 요소들로 새 배열을 만들어 반환
//원본 배열을 수정하지 않음

//인자
//콜백함수 - 인자 : (현재 값, 현재 값의 인덱스, 배열)
//thisArg

// const arr = [1,2,3,4,5,6,7,8,9];

// const odds = arr.filter(i => i % 2);
// const evens = arr.filter(i => !(i%2));
// const largerThan3 = arr.filter(i => i > 3);

// console.log(odds);
// console.log(evens);
// console.log(largerThan3);

// const arr = [
//   { name: '사과', cat: '과일', price: 3000 },
//   { name: '오이', cat: '채소', price: 1500 },
//   { name: '당근', cat: '채소', price: 2000 },
//   { name: '살구', cat: '과일', price: 2500 },
//   { name: '피망', cat: '채소', price: 3500 },
//   { name: '딸기', cat: '과일', price: 5000 }
// ];

// console.log(
//   '과일 목록:',
//   arr
//   .filter(({cat}) => cat === '과일')
//   .map(({name}) => name)
//   .join(', ')
// );






//reduce
//주어진 콜백함수에 따라 값들을 접어 나감
//인자
//콜백함수 - 인자 (이전 값, 현재 값, 현재 인덱스, 배열)
//초기화 값


//초기화 값이 만약 없다면 첫 번째와 두 번째 값부터

// const arr = [1,2,3,4,5,6,7,8,9];

// console.log(
//   arr.reduce((prev, curr, idx) => {
//     console.log(`p : ${prev}, c : ${curr}, i : ${idx}`);
//     return prev + curr;
//   })
// );


// console.log(
//   arr.reduce((prev, curr, idx) => {
//     console.log(`p : ${prev}, c : ${curr}, i : ${idx}`);
//     return prev + curr;
//   }, 10)
// )

// console.log(
//   arr.reduce((prev, curr, idx) => {
//     console.log(`p : ${prev}, c : ${curr}, i : ${idx}`);
//     return prev * curr;
//   })
// )

// const arr = [
//   { name: '사과', cat: '과일', price: 3000 },
//   { name: '오이', cat: '채소', price: 1500 },
//   { name: '당근', cat: '채소', price: 2000 },
//   { name: '살구', cat: '과일', price: 2500 },
//   { name: '피망', cat: '채소', price: 3500 },
//   { name: '딸기', cat: '과일', price: 5000 }
// ];

// ['과일', '채소'].forEach(category => {
//   console.log(
//     `${category}의 가격의 합:`,
//     arr
//     .filter(({cat}) => cat === category)
//     .map(({price}) => price)
//     .reduce((prev, curr) => prev + curr)
//   );
// });





//sor - 정렬
//배열의 원본을 수정
//해당 배열을 반환

// const arr = ['라','사','다','가','바','마','나']

// arr.sort();

// console.log(arr);


// let randomWord = "CBDEABCKDE";

// console.log(
//   randomWord
//   .split('')
//   // .sort()
//   .reverse()
//   .join('')
// );

// console.log(randomWord);


//주의 - 숫자의 경우에는 문자열로 변환시켜서 소팅함
// const arr = [1,2,30,400,10,100,1000];
// // console.log(arr.sort());
// // console.log(arr);


// console.log(
//   arr.sort((a,b) => {
//     console.log(`a: ${a}, b : ${b}`);
//     return -1;
//   })
// )

// console.log(
//   arr.sort((a,b) => {
//     console.log(`a: ${a}, b : ${b}`);
//     return 1;
//   })
// )


// console.log(
//   arr.sort((a,b) => {
//     console.log(`a : ${a}, b : ${b}`);
//     return Math.random() - 0.5;
//   })
// )