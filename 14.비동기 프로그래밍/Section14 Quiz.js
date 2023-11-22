// function evenOrOdd(callback){
//   setTimeout(()=>{
//     const res = Math.random() > 0.5 ? '홀' : '짝'; 
//     callback(res);
//   }, 1000)
// }

// function concatRes(callback){
//   evenOrOdd((res1) =>{
//     evenOrOdd((res2) =>{
//       evenOrOdd((res3)=>{
//         const finalRes = res1 + ', '+ res2 + ', ' + res3;
//         callback(finalRes);
//       })
//     })
//   })
// }

// concatRes((res) =>{
//   console.log(res);
// })

// function evenOrOdd(){
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       const res = Math.random() > 0.5 ? '홀' : '짝';
//       resolve(res);
//     },1000);
//   })
// }

// function concatRes(){
//   let finalRes = '';

//   return evenOrOdd()
//   .then(res => {
//     finalRes += res;
//     return evenOrOdd();
//   })
//   .then(res => {
//     finalRes += ', ' + res;
//     return evenOrOdd();
//   })
//   .then(res => {
//     finalRes += ', ' + res;
//     return finalRes;
//   })
// }

// concatRes().then(res => {
//   console.log(res);
// })


function evenOrOdd(){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      const res = Math.random() > 0.5 ? '홀' : '짝';
      resolve(res);
    },1000);
  })
}

async function concatRes(){

  const res1 = await evenOrOdd();
  const res2 = await evenOrOdd();
  const res3 = await evenOrOdd();

  return res1 + ', ' + res2 + ', ' + res3;
}

async function execute(){
  const res = await concatRes();
  console.log(res);
}

execute();