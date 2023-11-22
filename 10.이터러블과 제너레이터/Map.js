//Map


const map1 = new Map();

map1.set('x', 1);
map1.set(123, 'ABC');
map1.set(true, {a : 1, b : 2});

console.log(map1);

const map2 = new Map([
  ['x',1],
  [123, 'ABC'],
  [true, { a : 1, b : 2}]
])

console.log(map2);


map2.set('x',2); //map 키값 중복 불가
//덮어 씌워짐

console.log(map2);

console.log(
  map2.has('x'),
  map2.has('ABC')
) // 키를 가지고 있는지 확인 


console.log(
  map2.get('x'),
  map2.get(123),
  map2.get(true),

  map2.get('y') //없는 키접근시 undefined
) // 키로 값 접근

console.log(
  map2.delete('x'), //삭제 후 성공 여부 반환 
  map2.delete('y') //실패
)