// function getMult10Promise(number){
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       resolve(number *10);
//     },1000)
//   })
// }


// async function doAsyncWorks(){
//   const result1 = await getMult10Promise(1);
//   console.log(result1);

//   const result2 = await getMult10Promise(2);
//   console.log(result2);

//   const result3 = await getMult10Promise(3);
//   console.log(result3);
// }

// doAsyncWorks();
// console.log('먼저 출력됨');


function moneyLend(borrow){
  return new Promise((resolve, reject) =>{
    console.log(`채무금액 ${borrow}만원`)
    setTimeout(()=>{
      if(Math.random() < 0.1){
        reject(`채무자 파산`);
      }
      resolve(borrow * 1.1);
    }, 1000)
  })
}

async function lend5Times(){
  try{
    const lend1 = await moneyLend(20);
    const lend2 = await moneyLend(lend1);
    const lend3 = await moneyLend(lend2);
    const lend4 = await moneyLend(lend3);
    const lend5 = await moneyLend(lend4);
  } catch(msg) {
    console.error(msg);
  } finally {
    console.log('--대금업 종료--');
  }
}

lend5Times();