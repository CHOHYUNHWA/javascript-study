//Date

// const now = new Date();
// console.log(typeof now);
// console.log(now);
// console.log(now.toString());

// const date  = new Date(Date.now());
// console.log(date);

const now = new Date();
let date  = now.toDateString();
let time = now.toTimeString();

// console.log(date);
// console.log(time);

// console.log(
//   now.toLocaleString('ko-KR')
// );

// console.log(
//   now.toLocaleString('en-US')
// );

const timezoneOffset = now.getTimezoneOffset() * 60000;
console.log(timezoneOffset);

const isoStr = new Date(now.getTime() - timezoneOffset).toISOString();
const isoNow = new Date().toISOString();
console.log(isoNow);
console.log(isoStr);
console.log(now.toString());
