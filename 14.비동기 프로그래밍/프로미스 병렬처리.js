let DEADLINE = 1450;

function getRunPromise(name){
  return new Promise((resolve, reject) => {
    const time = 1000 + Math.random() * 500;

    setTimeout(() => {
      if(time < DEADLINE){
        console.log(`${name} 도착 - ${time/1000}초`);
        resolve({name, time});
      } else {
        reject((`${name} 시간초과`));
      }
    }, time);
  });
}

Promise.allSettled(
  '철수,영희,돌준,정아,길돈'
  .split(',')
  .map(getRunPromise)
)
.then(arr =>{
  return {
    succ : arr.filter(result => {
      console.log(result.status)
      return result.status === 'fulfilled' //성공한것
    }),
    fail : arr.filter(result =>{
      return result.status === 'rejected'
    })
  }
})
.then(res =>{
  res.succ.sort((a,b) => {
    return a.value.time - b.value.time;
  });
  console.log(
    `완주 ${res.succ.length}명 (1등: ${res.succ[0].value.name})`
  );
  console.log(
    `탈락 ${res.fail.length}명 ` 
  )
})
.finally(()=>{
  console.log('--경기 종료--');
})

