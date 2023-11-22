//렉시컬(정적) 스코프
//변수나 상수가 코드상 어디에서 지정되었는가에 따라 그 사용 범위를 결정
//함수가 코드상 어디에서 정의되엇는가에 따라 그 상위 스코프를 결정
//호출한 곳을 기준으로 하는 동적 스코프 dynamic scope와 상반되는 개념

// const x = 1;
// const y = 1;
// const z = 1;

// function func1(){
//   const y = 2;
//   const z = 2;

//   console.log('2', x, y, z);
//   func2();
// }

// function func2(){
//   const z= 3;
//   console.log('3', x, y, z);
// }

// console.log('1', x, y, z);
// func1();



// const x = 1;
// const y = 1;
// const z = 1;

// function func1(){
//   const y = 2;
//   const z = 2;

//   console.log('2', x, y, z);

//   function func2(){
//     const z= 3;
//     console.log('3', x, y, z);
//   }

//   func2();
// }

// console.log('1', x, y, z);
// func1();





//클로저
//내부 함수에서 외부 함수의 값에 접근할 수 있나는 개념

function createCounter(start){

  return function(){
    console.log(++start);
    return start;
  }
}

const count = createCounter(10);
count();

function employeeCreator (name, age) {
  let _name = name;
  let _age = age;

  return {
    name: () => _name,
    age: () => _age,
    setAge: function (age) { _age = age; },
    getOlder: function (years) { _age += years; }
  }
}

const employee = employeeCreator('홍길동', 20);

console.log(employee);
console.log(employee.name(), employee.age());