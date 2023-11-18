const obj1 = {
  num: 1, str: 'ABC', bool: true
};
const obj2 = obj1;

console.log('obj1:', obj1);
console.log('obj2:', obj2);

// ⭐️ const임에도 내부 값은 변경 가능함 주목
// 내부 변경 방지는 이후 배울 Object.freeze 함수로
obj2.num = 2;
obj2.str = '가나다';
obj2.bool = false;

console.log('obj1:', obj1);
console.log('obj2:', obj2);