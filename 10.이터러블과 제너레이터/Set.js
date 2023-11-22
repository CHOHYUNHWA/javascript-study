//SET 중복 불가
//순서 보장 X

const set1 = new Set();
set1.add(1);
set1.add('A');
set1.add(true);

set1.add(1);
set1.add('A');

// console.log(set1);


console.log(
  set1.has(1)
)

console.log(
  set1.delete(1), //리턴타입 boolean 성공 여부
  set1.delete('a')
)

console.log(set1);


console.log(
  set1.keys,
  set1.values,
  set1.entries
) //SET은 키와 밸류를 같은 값을 가짐


set1.clear();

console.log(set1);