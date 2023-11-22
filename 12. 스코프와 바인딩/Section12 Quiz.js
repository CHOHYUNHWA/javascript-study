

// const multiplyByTwo = multiplyBy(2);
// const multiplyByFive = multiplyBy(5);

// console.log(multiplyByTwo(3)); // 6
// console.log(multiplyByFive(3)); // 15


// function multiplyBy(a){
//   return function(b){
//     return a*b;
//   }
// }


const rectangle1 = {
  width: 10,
  height: 5,
  getArea : printArea
};

const rectangle2 = {
  width: 4,
  height: 3,
  getArea : printArea
};

//위와 같이 width 와 height 프로퍼티를 갖고 있는 객체들이 각자의 넓이를 출력할 때 사용할 수 있는 외부 함수를 만들고, 
//이를 사용하는 코드를 작성해보세요.

function printArea(){
  const area = this.width * this.height;
  console.log(`Area : ${area}`);
}

rectangle1.getArea();