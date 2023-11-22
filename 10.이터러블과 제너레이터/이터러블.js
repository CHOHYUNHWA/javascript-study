const arr = [1,'A', true, null, {x:1, y:2}];

const arrIterator = arr[Symbol.iterator]();

console.log(arrIterator);

console.log(arrIterator.next());
console.log(arrIterator.next());