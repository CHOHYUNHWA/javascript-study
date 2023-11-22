import{
  x as a,
  y as b,
  person as individual
} from './module1.js';

import{add, subt, mult, div} from './module2.js';
import{Bird, Eagle} from './module3.js';
import * as func from './module4.js';
import mod5 from './module5.js';
import Big from './big.mjs';

console.log(Big);

console.log(
  0.1 + 0.2,
  new Big(0.1).plus(0.2).toNumber()
);

console.log(
  0.2 * 0.7,
  new Big(0.2).times(0.7).toNumber(),
);

console.log(
  0.9 - 0.6,
  new Big(0.9).minus(0.6).toNumber()
);


console.log(a,b,individual);

console.log(add(5,6));

const bird = new Bird("짹짹이", '파닥파닥');
const eagle = new Eagle('이글이', '훨훨', '사슴');

bird.fly();
eagle.hunt();

console.log(bird.name);

console.log(func);

func.logResult(
  [1,2,3,4,5]
  .filter((i)=>func.isOdd(i))
  .map(func.square)
  .join(', ')
  )

  console.log(
    func.logResult(
    mod5.array
    .filter((i) => mod5.isEven(i))
    .join(', ')
    )
  );


// const raceResults = await fetch(
//   'https://showcases.yalco.kr/javascript/mockserver/race-result'
// )
// .then(response => response.json())

// console.log(raceResults);