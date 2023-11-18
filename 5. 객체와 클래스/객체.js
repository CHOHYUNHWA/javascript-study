const person1 = {
  name: '김철수',
  age: 25,
  married: false
};

const key1 = 'name';

console.log(person1.age);
console.log(person1['age']);
console.log(person1.birthdate);
console.log(person1['job']);
console.log('age' in person1);
console.log('job' in person1);

console.log(key1 in person1);

person1.job = 'developer';
person1['bloodtype'] = 'AB';

console.log(person1);
console.log('job' in person1);
console.log(person1['job']);