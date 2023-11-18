// 1.
// function max(a, b){
//   if(a > b){
//     return a;
//   } else {
//     b
//   }
// }

// const max1 = (a,b) => {
//   if(a> b){
//     return a;
//   } else {
//     b;
//   }
// }


function funcEach(func, array){
  for(const arm of array){
    func(arm);
  }
}


function funcEach(func, ...args){
  for(const arm of args){
    func(arm);
  }
}


funcEach(console.log, 1,2,3);


function recursiveDecrease (num) {
  console.log(num);
  if (num > 0) recursiveDecrease(--num);
}