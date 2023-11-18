//스프레드
// const arr1 = ['b','c'];
// const arr2 = ['d'];
// const arr3 = ['e'];
// const arr4 = ['a', ...arr1, ...arr2, ...arr3];
// console.log(arr4);

//활용
// const arr1 = [1, 2, 3, 4, 5];

// console.log(arr1);
// console.log(...arr1);
// console.log(
//   Math.max(...arr1),
//   Math.min(...arr1)
// )


// function classIntro (classNo, teacher, ...children) {
//   return `${classNo}반의 선생님은 ${teacher}, `
//     + `학생들은 ${children.join(', ')}입니다.`
// }

// const classNo = 3;
// const teacher = '김민지';
// const students = ['영희', '철수', '보라', '돌준', '달숙'];

// console.log(
//   classIntro(classNo, teacher, ...students)
// );

// const arr1 =[1,2,3];
// const arr2 = [4,5,6];
// const arr3 = [...arr1, ...arr2];
// console.log(...arr3, arr3);


// //배열 복사 관련 중요
// //배열의 요소가 원시형인 경우에는 만약 하나의 배열을 변경했을때 복사한 배열의 값은 변하지 않음
// const arr1 = [1,2,3];
// const arr2 = [...arr1];
// arr1[1] = 1;
// console.log(arr1); //111
// console.log(arr2); //123

// //하지만 배열의 요소가 참조형인 경우에는 해당 요소를 변경했을때, 복사한 배열의 요소 값도 변경됨

// const arr3 = [{x:1}, {x:3}, {x:4}];
// const arr4 = [...arr3];
// arr3[0].x = 5;
// console.log(arr3);
// console.log(arr4);


// //push,unshift 대신사용
// //단 arr자체를 재정의하는 것으로 const사용 불가
// let arr = [1,2,3];
// arr = [...arr,4];
// console.log(arr);

// arr = [0,...arr];
// console.log(arr)


// const orgArr = [1,2,3,4,5,6,7,8,9];

// const arr = [
//   ...orgArr.slice(0,3),
//   ...orgArr.slice(6,9)
// ];

// console.log(arr);

// // 참고: 또 다른 방법
// const arr2 = orgArr
// .filter((_, i) => !(i >= 3 && i < 6));
// console.log(arr2);



//디스트럭쳐링

// const arr = [1,2,3];

// const x = arr[0];
// const y = arr[1];
// const z = arr[2];

// console.log(x,y,z);

// const arr1 = [1,2,3];
// const [a,b,c] = arr;
// console.log(a,b,c);

// //활용
// const players = [
//   { name: '순이', score: 91 },
//   { name: '정환', score: 65 },
//   { name: '윤수', score: 72 },
//   { name: '철웅', score: 88 },
//   { name: '지우', score: 98 },
//   { name: '세아', score: 40 }
// ];

// // 배열 중 첫 3개만 가져옴
// function logTop3 ([first, second, third]) {
//   console.log(
//     `1등은 ${first}!! 2등과 3등은 ${second}, ${third}입니다.`
//   );
// }

// logTop3(
//   [...players]
//   .sort((a,b) => b.score - a.score)
//   .map(({name}) => name)
// )

// console.log(players);

// let a = 1;
// let b = 2;

// [a,b] = [b,a];
// console.log(a,b);