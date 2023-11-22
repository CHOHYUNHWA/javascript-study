// console.log(this);

// const obj = {
//   x : 123,
//   getX(){
//     return this.x;
//   }
// }

// console.log(obj.getX());


//this 동적 바인딩


const korean = {
  favorite : '김치',
  makeStew: function(isHot, pots){
    return `${isHot ? '매운' : '순한'} ${this.favorite}찌개 ${pots}냄비`;
  },
  teachMakingStew: function(){
    return this.makeStew.bind(this);
  }
};

const italian = {
  favorite: '피자'
}

// console.log(
//   korean.makeStew(true, 1)
// );

// italian.makeStew = korean.makeStew;
// console.log(
//   italian.makeStew(false, 2)
// )

// //call 함수를 이용하여 this 조절가능
// //call의 첫번째 인자 객체를 this로 사용
// console.log(italian.makeStew.call(korean, true, 1));

// //apply를 사용해서 함수 호출
// console.log(italian.makeStew.apply(korean,[false,2]));

// //bind함수 이용
// //bind의 인자값으로 this객체를 전달
// italian.makeRightStew = korean.makeStew.bind(korean);
// console.log(
//   italian.makeRightStew(true,5)
// )

// // 만약 bind인자 뒤에 필드값을 넣어주면 아예 고정시킬 수 있음
// italian.makeRightStew = korean.makeStew.bind(korean,true,1);
// console.log(
//   italian.makeRightStew()
// )

//아예 객체에 선언해서 사용가능
// => italian.makeStew = this(korean).makeStew.bind(this(korean))이 됨
italian.makeStew = korean.teachMakingStew();
console.log(
  italian.makeStew(false,1)
)


function intro(job){
  return `${this.name}(${this.age}세) - ${job}`;
}

const hong = {
  name : '홍길동',
  age : 20
}

console.log(
  intro.call(hong,'개발자')
)




//thisArg
function recommendForYou(me){
  const products = [
    {sex : 'F', size: 'M'},
    {sex : 'M', size: 'L'},
    {sex : 'F', size: 'M'},
    {sex : 'U', size: 'S'},
    {sex : 'M', size: 'L'},
    {sex : 'F', size: 'S'},
  ];


  products
  .map((itm, idx) => {
    return { ...itm, idx}
  })
  .filter(function({sex, size}){
    return ['U', this.sex].includes(sex) && size === this.size
  }, me)
  .forEach(function({idx}){
    console.log(`${this.name}님, ${++idx}번은 어떠세요?`);
  }, me)


}

const peter = {
  name: '피터',
  sex: 'M',
  size: 'L'
};

const jane = {
  name: '제인',
  sex: 'F',
  size: 'S'
};


recommendForYou(peter);
recommendForYou(jane);