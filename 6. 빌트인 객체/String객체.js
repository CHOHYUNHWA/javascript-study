// const strObj1 = new String();
// const strObj2 = new String('Hello World!');

// console.log(strObj1);
// console.log(strObj2);

// console.log(strObj2.valueOf(), strObj2.toString());


// const sentence = '옛날에 호랑이 한 마리가 살았어요.';

// for(const word of ['옛날에', '호랑이', '살았어요.', '나무꾼']){
//   console.log(
//     'includes', word, sentence.includes(word)
//   );
//   console.log(
//     'startsWith', word, sentence.startsWith(word)
//   );
//   console.log(
//     'endsWith', word, sentence.endsWith(word)
//   );
//   console.log('=========')
// }

// const word = 'ABCDEFGHIJK';
// const part = word.substring(4,8);

// console.log(part);


// console.log(word.slice(-4));

// const sentence = '옛날에 호랑이 한 마리가 살았어요.';

// const firstWord = sentence.slice(0, sentence.indexOf(' '));
// const lastWord = sentence.slice(sentence.lastIndexOf(' ') + 1 - sentence.length );

// console.log(firstWord);
// console.log(lastWord);


// const strArr = sentence.split(' ');
// console.log(strArr);


// const word = '   Hello World!   ';
// console.log(`--${word}--`);
// console.log(`--${word.trim()}--`);
// console.log(`--${word.trimStart()}--`);
// console.log(`--${word.trimEnd()}--`);


// const sentence = '이스탄불은 터키의 수도이다.'
// console.log(sentence.replace('터키', '튀르키예'));

//메서드 체이닝 Java와 동일
const word = ' 모두 Hello! ';
const rpFrom = 'hello';
const rpTo = 'bye';

console.log(
  word.trimStart()
  .toLowerCase()
  .replaceAll(rpFrom, rpTo)
  .toUpperCase()
  .repeat(3)
  .trimEnd()
)