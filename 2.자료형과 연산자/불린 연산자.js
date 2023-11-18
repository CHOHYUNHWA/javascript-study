
//Truthy , Falsy  NaN, null,0, ''<-빈 문자열 은 false 그 외에는 모두 true

console.log(
  1.23 ? true : false,
  -999 ? true: false,
  '0' ? true : false,
  ' ' ? true : false,
  Infinity ? true : false,
  -Infinity ? true : false,
  {} ? true : false,
  [] ? true : false,
  NaN ? true : false,
  null ? true : false,
  '' ? true : false,
  0 ? true : false,
);