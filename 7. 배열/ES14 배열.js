// const arr = [3,1,4,5,2];
// const arr2 = [...arr];


// const array1Sorted = arr.sort();
// const array2Sorted = arr2.toSorted();

// console.log(array1Sorted, array2Sorted);

// array1Sorted.push(6);
// array2Sorted.push(6);

// console.log(array1Sorted, array2Sorted);
// console.log(arr,arr2);

//toSorted, toReversed, toSpliced 는 기존의 원본 배열의 변경을 일으키지 않고 새로운 배열로 만들어냄



//findLast, findLastIndex
//ES14부터 별도로 reverse나 이런것들없이 마지막 요소를 찾기 편해짐
// const myArray = [1,2,3,4,5,6,7,8,9,10];

// const firstMult3 = myArray.find(i => i % 3 === 0);
// const firstMult3Idx = myArray.findIndex(i => i % 3 === 0);

// console.log(firstMult3, firstMult3Idx);


// const lastMult3 = myArray.findLast(i => i% 3 === 0);
// const lastMult3Idx = myArray.findLastIndex(i => i%3 ===0);

// console.log(lastMult3, lastMult3Idx);



// //with
// const orgArray = [1,2,3,4,5,6,7,8,9,10];

// //원본 변화 없이 4번째 요소를 '넷' 으로 변경하고 싶다면


// // const newArray = [...orgArray];
// // newArray[3] = '넷';

// // console.log(orgArray,newArray);


// //위와 같이 해야하지만 with를 사용하면 보다 간편

// const newArray = orgArray
// .with(3,'넷')
// .with(6,'일곱');

// console.log(orgArray,newArray);


// const map1 = new WeakMap();
// const set1 = new Set();

// let obj1 = { name : 'keyboard', Price : 50000};

// map1.set(obj1, '신상품');
// set1.add(obj1);

// obj1 = null;

// console.log(map1);