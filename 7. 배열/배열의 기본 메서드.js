//isArray => 배열인지 여부 반환
// console.log(
//   Array.isArray([1,2,3]),
//   Array.isArray('123'),
//   Array.isArray('123'.split(""))
// );

//at 배열 인덱스 접근 메서드
// const arr = ['일', '이', '삼', '사']
// console.log(arr.at(0), arr.at(2));
// console.log(arr.at(-1), arr.at(-2));

//includes - 배열의 요소가 포함하는 지 확인
// const arr = [1,2,3,'abc', true];
// console.log(
//   arr.includes(2),
//   arr.includes('abc'),
//   arr.includes(false) // 포함하고 있지 않음
// )

//참조형 데이터의 경우
// const obj1 = { x : 1,  y : 2};
// const obj2 = { x: 1, y : 2};

// const arr = [
//   obj1, 
//   { x : 3, y : 4}
// ];

// console.log(
//   arr.includes(obj1),
//   arr.includes(obj2), //false
//   arr.includes({x:1, y:2}), //false
//   arr.includes({x:3, y:4}) //false
// )

//indexOf, lastIndexOf
// const arr = [1,2,3,2,1];

// console.log(
//   arr.indexOf(2),
//   arr.lastIndexOf(2),
//   arr.indexOf(4)
// )


//join - 인자로 주어진 값으로 구분하여 요소들을 문자열로 연결하여 반환
// const arr1 = ['a','b','c','d','e'];
// const arr2 = [
//   1, true, null, undefined, '가나다', { x : 0 }, [1,2,3]
// ];

// console.log(
//   arr1.join()
// )
// console.log(
//   arr1.join('')
// )
// console.log(
//   arr1.join(' ')
// )

// console.log(
//   classIntro(3, '김민지', '영희', '철수', '보라')
// )

// function classIntro(classNo, teacher, ...childeren){
//   return `${classNo}반의 선생님은 ${teacher}이고 학생들은 ${childeren.join(', ')}가 있습니다.`
// }

//배열을 변경하는 기본 메서드
//push => 배열의 뒤에 값을 추가
// const arr = [1,2,3];
// const x = arr.push(4); //최종 푸쉬 후 배열의 length반환

// console.log(x, arr);

// const y = arr.push(5,6, 100); //최종 푸쉬 후 배열의 length반환
// console.log(y, arr);


//unshift = > 배열의 앞에 값을 추가
// const arr = [5,6,7];
// const x = arr.unshift(1,2,3,4);
// console.log(x, arr); // => x = 7, arr = [1,2,3,4,5,6,7];

//push보다 unshift가 더느림



//배열의 값 제거
//pop
// const arr = [1,2,3,4,5];
// const x = arr.pop(); //가장 뒤의 값을 제거 후 반환
// console.log(x, arr); 

// //shift
// const y = arr.shift(); //앞의 값을 제거 후 반환
// console.log(y, arr);

//java deque랑 똑같넹 ㅋ
//pop 보다 shift가 더 느림




//splice 원하는 위치에 요소들을 추가 및 삭제
//2개 이상의 인자를 받음
//start : 배열의 변경을 시작할 위치
//deleteCount : 제거할 요소의 개수
//item(s) : 추가할 하나 이상의 요소

// const arr = [1,2,3,4,5,6,7];
// arr.splice(2,2);
// console.log(arr); // 1,2,5,6,7

// arr.splice(1,3, '가','나','다');
// console.log(arr);




//fill - 배열을 특정 값으로 채움
// const arr1 = [1,2,3, , , 4, 5];
// arr1.fill(7);
// console.log(arr1);

// const arr2 = new Array(10);
// arr2.fill(1);
// console.log(arr2);

// arr2.fill(2,3);
// console.log(arr2);

// arr2.fill(3,6,9);
// console.log(arr2);



//reverse - 배열의 순서를 뒤집음

// const arr = [1,2,3,4,5,6,7];
// arrRev = arr.reverse();
// console.log(arrRev);






//새 배열을 반환하는 기본 메서드
//원본 배열을 수정하지 않음
//복사해서 사용한다고 생각

//concat
// const arr1= [1,2,3];
// const arr2= ['a', 'b', 'c'];
// const arr3 = [true,false];
// const arr4 = arr1.concat(arr2);
// console.log(arr4);

// const arr5= arr1.concat(arr2, 3);
// console.log(arr5);


// const arr6 = arr1.concat('ABC', arr2, arr3, 100);
// console.log(arr6); //[1,2,3,'ABC', 'a','b','c',true,false,100]




//slice
//인자로 주어진 범주의 값을 잘라 반환
// const arr1 = [1,2,3,4,5,6,7,8,9];
// const arr2 = arr1.slice(2,3);
// const arr3 = arr1.slice(1,6);
// console.log(arr2); //[3]
// console.log(arr3); //[2,3,4,5,6]



//flat => 인자로 주어진 깊이만큼 배열을 펼쳐서 반환
//만약 인자가 없으면 1로 간주
// const orgArr = [1,2,[3,4], [5,[6, [7,8]]]];
// const arr0 = orgArr.flat(); // [1,2,3,4,5,[6,[7,8]]];
// const arr1 = orgArr.flat(1); // [1,2,3,4,5,[6,[7,8]]];
// const arr2 = orgArr.flat(2); // [1,2,3,4,5,6,[7,8]];
// const arr3 = orgArr.flat(3); // [1,2,3,4,5,6,7,8];

// console.log(arr0);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);


// const orgArr = [
//   1, {x:2}, [{x:3}, {x:4}], 5
// ];

// const arr1 = orgArr.concat(6);
// const arr2 = orgArr.slice(0,3);
// const arr3 = orgArr.flat();

// orgArr[0] = 0;
// orgArr[1].x = 20;
// orgArr[2][1].x = 30;

// console.log(orgArr); //[0, {x:20}, [{x:3}, {x:30}], 5]
// console.log(arr1); //[0, {x:20}, [{x:3}, {x:30}], 5,6]
// console.log(arr2); //[0, {x:20}, [{x:3}, {x:30}]]
// console.log(arr3); //[0, {x:20}, {x:3}, {x:30}, 5]