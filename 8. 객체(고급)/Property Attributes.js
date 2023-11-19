const person = {
  fullName : '홍길동',
  ageInNumber : 25,

  get name (){
    return this.fullName
    .split('')
    .map((letter,idx) => idx === 0 ? letter : '*')
    .join('');
  },
  get age(){return this.ageInNumber + '세'},
  set age(age){
    this.ageInNumber = Number(age);
  }
}

person.age = 30;
console.log(person.name, person.age);