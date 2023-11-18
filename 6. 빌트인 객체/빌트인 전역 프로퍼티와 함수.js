//eval 사용금지
//코드 보안에 취약, 처리속도 느림
// const x = eval(`1 + 2 + 3`);
// const obj = eval(`({a:1, b:2})`);

// console.log(x, obj);


//isFinite 유한수인지 확인
console.log(
  isFinite(1),
  isFinite(1/0)
)



const searchURI = 'https://www.google.com/search?q=얄코';
const encodedURI = encodeURI(searchURI);

console.log(encodedURI);
console.log(searchURI);

const keyword = '얄코';
const encodeURIKeyword = encodeURIComponent(keyword);

console.log(encodeURIKeyword);