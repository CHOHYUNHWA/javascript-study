let word1 = '안녕하세요! 😀';
console.log(word1);
let word2 = "반갑습니다.";
console.log(word2); //문자역 선언시 작은 따옴표 큰따옴표 상관없음;


let word3 = '안녕하세요 "저는"';
let word4 = "큰따옴표 안에 '작은 따옴표'";
console.log(word3, word4); //이렇게는 상관 x

//작은따옴표 혹은 큰따옴표 내에 작은따옴표, 큰따옴표 사용시 에러남
//따라서 escape표현 백슬래시를 사용해줘야함
let word5 = '작은따옴표 안에 \'작은 따옴표\'';
let word6 = "큰따옴표 안에 \"큰 따옴표\"";
console.log(word5, word6); 

let longName = "김수한무 \
거북이와 두루미"; //이렇게 하면 줄바꿈 가능
console.log(longName);

const NAME = '홍길동';
let age = 20;
let married = false;

let str  = `제 이름은 ${NAME} 나이는 ${age}세 입니다.
${married ? '기혼' : '미혼'} 입니다.`;
console.log(str);