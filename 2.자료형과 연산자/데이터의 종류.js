//원시 자료형
const a = true, b = 123.45, c = '안녕하세요!';

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);

let d;
console.log(d, typeof d);

d = null;
console.log(d, typeof d);

const e = Symbol('hello');
console.log(e, typeof e);

let first_name = "Brendan";
let last_name = 'Eich';
let decription = `미국의 프로그래머로 자바스크립트 언어를 만들었으며 모질라의 CEO와 CTO를 역임했다.`;
console.log(first_name, typeof first_name);
console.log(last_name, typeof last_name);
console.log(decription, typeof decription);