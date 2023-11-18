//배열의 형태와 동작을 흉내내는 특수 객체
//한 배열에 다양한 자료형의 데이터가 들어갈 수 있음
//접근이 상대적으로 느리나, 중간 요소의 추가나 제거는 빠름

// const arr1 = []
// const arr2 = [1,2,3];
// const arr3 = [1, , 2, , 3];
// console.log(arr1.length, arr1);
// console.log(arr2.length, arr2);
// console.log(arr3.length, arr3);


// const arr = new Array(3);
// console.log(arr);
// console.log(arr.length);

// const arr1 = Array.of(3);
// console.log(arr1.length, arr1);

//유사 배령 객체 : length와 인덱싱 프로퍼티를 가진 객체
const arrLike = {
  0 : '사과',
  1 : '바나나',
  2 : '메론',
  3 : '체리',
  4 : '복숭아',
  length : 5
}

// for(let i = 0 ; i < arrLike.length; i++){
//   console.log(arrLike[i]);
// }

for(const item of Array.from(arrLike)){
  console.log(item);
}