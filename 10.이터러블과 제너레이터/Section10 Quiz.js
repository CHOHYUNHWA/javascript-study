// //1.
// const array = [
//   '모', '걸', '도', '개', '윷',
//   '윷', '걸', '모', '개', '도',
//   '윷', '모', '걸', '도', '개',
//   '윷', '모', '걸', '개', '도'
// ];

// //  위 배열의 요소들을 중복요소들을 제거하고
// //  가나다순으로 정렬한 뒤 쉼표로 구분하여
// //  출력하는 코드를 작성해보세요.

// const arr = [...new Set(array)]

// console.log(arr);

// const result = arr.toSorted()
// .join(', ');

// console.log(result);


//2.
const array = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

//  위 배열의 요소들이 각각 몇 개씩 들어있는지를 나타내는
//  Map 인스턴스를 만드는 코드를 작성해보세요.

//  그 중 'apple'은 몇 개인지 출력해보세요.

//  개수가 가장 적은 순으로 출력해보세요.

const map = new Map();
for(item of array){
  if(!map.has(item)){
    map.set(item, 1);
  }
  map.set(item, map.get(item) + 1);
}

console.log(map);
console.log('apple = ' ,map.get('apple'));

[...map]
.toSorted((a, b) => a[1] - b[1])
.map(([a,b]) => a)
.forEach(i => console.log(i));