//java 와 동일
// let x = 0;
// while(x < 10){
//   console.log(x++);
// }

// 짧게 짠 수정 코드
//가독성 개구리다..
let x = 0;
while (x < 14) {
  if (x++ % 2 === 0) continue;
  if (x > 8) break;
  console.log(x - 1);
}