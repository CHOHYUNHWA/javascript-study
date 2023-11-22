// const class1 = {
//   x:1, y:'A', z:true
// };

// const class2 = {...class1};

// console.log(class2);


// console.log(class1 === class2);

//디스트럭쳐링
//이전

const obj1 = {
  x:1,
  y:2,
  z:3
};

const x = obj1.x;
const y = obj1.y;
const z = obj1.z;

console.log(x, y,  z);

//디스트럭쳐링 적용시
const obj2 = {
  a:2,
  b:3,
  c:4
}
const {a,b,c} = obj2;
console.log(a,b,c);

const arr = [1,2,3];
const{length} = arr;
console.log(length);