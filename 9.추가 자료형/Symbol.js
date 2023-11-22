// const symbol1 = Symbol('hello');
// const symbol2 = Symbol('hello');

// console.log(symbol1, symbol2);

// console.log(symbol1.description);


const buildingKey = Symbol('secret');

const building = {
  name : '코딩지옥',
  floors : 3,
  [buildingKey] : '1234#'
}

// console.log(building);

// console.log(
//   building.name,
//   building.floors,
//   building[buildingKey]
//   )

// console.log(
//   building[Symbol('secret')] //접근 불가
// )