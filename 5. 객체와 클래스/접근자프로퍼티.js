const person1 = {
  age : 17,
  get koreanAge(){
    return this.age + 1;
  },

  set koreanAge(age){
    this.age = age -1;
  }
}

console.log(person1.koreanAge);

person1.koreanAge = 20;

console.log(person1.koreanAge);