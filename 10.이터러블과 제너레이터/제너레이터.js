function* getFunction(){
  console.log('하나를 반환합니다.');
  yield '하나';

  console.log('둘을 반환합니다.');
  yield '둘';

  console.log('셋을 반환합니다.');
  yield '셋';
}

const getFunc = getFunction();

console.log(getFunc.next());
console.log(getFunc.next());
console.log(getFunc.next());
console.log(getFunc.next());
