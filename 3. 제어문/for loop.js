//java와 동일
for(let i  = 0; i < 5; i++){
  console.log(i);
}

//백틱을 써야함
for(let i = 1; i <= 9; i++){
  for(let j = 1; j <= 9; j++){
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

for (let x = 0, y = 10; x <= y; x++, y--) {
  console.log(x, y);
}


//객체에서는 in을 사용해서 for문 순회
const lunch = {
  name: '라면',
  taste: '매운맛',
  kilocalories: 500,
  cold: false
}

for(const key in lunch){
  console.log(key, ':', lunch[key]);
}


//배열에서는 of를 사용해서 for문 순회
const list = [1,'가나다', false, null];
for(const item of list){
  console.log(item);
}
