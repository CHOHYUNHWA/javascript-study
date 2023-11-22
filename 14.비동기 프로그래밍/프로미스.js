//프로미스 함수
//프로미스는 생성자로 사용하며
//첫번째 인자는 resolve를 사용한다 (관례) => 약속 이행 성공시, 반환할 값을 넣어 실행

// const borrow = 20;

// const payWith10perc = new Promise((resolve , reject ) => {
//   setTimeout(() => {
//     if(Math.random() < 0.5){
//       reject('인생 망함');
//     }
//     resolve(borrow * 1.1);
//   },1000)
// }) 

// payWith10perc
// .then(result => {
//   console.log(result + '만원');
// })
// .catch(msg => {
//   console.error(msg)
// })
// .finally(()=>{
//   console.log('기한 종료');
// })

// function moneyLend(borrow){
//   return new Promise((resolve, reject) => {
//     console.log(`채무 ${borrow}만원`);

//     setTimeout(() => {
//       if(Math.random() < 0.1){
//         reject('채무자 파산');
//       }
//       resolve(borrow * 1.1);
//     }, 1000)
//   });
// }

// moneyLend(20)
// .then(result => moneyLend(result))
// .then(moneyLend)
// .then(moneyLend)
// .then(moneyLend)
// .then(result => {
//   console.log(`반납 ${result}만원`)
// })
// .catch(msg => {
//   console.error(msg);
// })
// .finally(() => {
//   console.log('---대금업 종료---')
// })


const DEADLINE = 1400;

function getRelayPromise(name, start, failMsg){
  console.log(`${name} 출발`);
  return new Promise((resolve, reject) => {
    const time = 1000 + Math.random() * 500;
    setTimeout(() => {
      if(time < DEADLINE){
        console.log(`${name} 도착 - ${(time + start)/1000}초`);
        resolve(start+time);
      } else {
        console.log(failMsg);
        reject((time + start)/ 1000);
      }
    },time);

  })
}

getRelayPromise('철수',0,'철수부터 광탈')
.then(result => {
  return getRelayPromise('영희', result, '영희 광탈')
})
.then(result => {
  return getRelayPromise('돌준',result, '돌준 탈락')
})
.then(result =>{
  return getRelayPromise('정아', result, '정아 탈락')
})
.then(result => {
  return getRelayPromise('길돈', result, '길돈 탈락')
})
.catch(msg => {
  console.log(`완주 실패 ${msg}초`);
}).finally(()=>{
  console.log('경기 종료');
})