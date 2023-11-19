// 빈 객체 생성
// console.log(
//   new Object(),
//   new Object(null),
//   new Object(undefined),
// );


// const intro1 = {
//   name : '홍길동'
// };

// const intro2 = {...intro1};

// console.log(intro1, intro2);

// const personal = {
//   age : 25,
//   married : false
// };

// const career = {
//   job: '개발자',
//   position : '팀장'
// }

// Object.assign(intro1, personal);
// console.log(intro1);

// Object.assign(intro2, personal, career);
// console.log(intro2);


// const obj1 = new Object();
// const obj2 = { x: 1, y : 2};
// const obj3 = { y : 3};
// const obj4 = { z : { a : 1}}

// Object.assign(obj1, obj2, obj3, obj4);

// console.log(obj1);

// obj2.x = 2;

// console.log(obj2);
// console.log(obj1);


// const obj = {
//   x:1,
//   y:2,
//   z:3
// }

// console.log(
//   Object.keys(obj),
//   Object.values(obj),
//   Object.entries(obj)
// )

// const entry = Object.entries(obj);
// console.log(entry[0][0]);


// console.log(
//   Object.keys(globalThis)
//   .sort()
// )


// 객체가 아닐 경우 객체로 변환
// const str = 'ABCDEFG';

// console.log(
//   Object.keys(str),
//   Object.values(str),
//   Object.entries(str)
// );


// const obj = { x: 1, y:2};
// console.log(Object.isExtensible(obj));
// Object.preventExtensions(obj);

// obj.x++;
// delete obj.y;
// obj.z = 3;

// console.log(obj);

// const arr = [1,2];
// Object.preventExtensions(arr);

// arr[2] = 3;

// console.log(arr);

// arr.push(3);
// console.log(arr);

// const obj = { x: 1, y:2};

// console.log(Object.isSealed(obj));

// Object.seal(obj);
// console.log(Object.isSealed(obj));
// console.log(Object.isExtensible(obj));

// obj.x++;
// delete obj.y;
// obj.z=3;

// console.log(obj);


