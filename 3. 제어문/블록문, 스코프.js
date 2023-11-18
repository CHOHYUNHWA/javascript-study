{
  console.log('블록문');
}

//블록 안에 선언된 변수와 상수는 블록 밖에서는 사용 불가하다. (Scope)
{
  const x = 'Hello';
  let y = 'World';
  console.log(x, y);
}

// 아래의 x는 블록 내부에서만 사용 가능 함으로 오류가 난다.
// console.log(x); 

//하지만 블록 밖에 선언되어진 변수나 상수는 어디서든지 접근이 가능
//또한 변수의 이름이 같더라도, 블록의 내부와 외부의 변수는 다른 것으로 취급된다.

let x  = 1;
{
  let y = 2;
  console.log(x,y);
}

//스코프 체인
//블록 내부에 해당 변수/상수가 없으면 바깥쪽으로 찾아 나감
let a = 0;
let b = 1;
let c = 2;
console.log('시점 1:', a, b, c);

{
  let a = 'A';
  let b = 'B';
  console.log('시점 2:',a,b,c);

  {
    let a = '가';
    console.log('시점 3:',a,b,c)
  }

  console.log('시점 4:', a,b,c);
}
console.log('시점 5:', a,b,c);
//시점1 0,1,2
//시점2 'A','B',2
//시점3 '가','B',2
//시점4 시점 2와 동일
//시점5 시점 1과 동일