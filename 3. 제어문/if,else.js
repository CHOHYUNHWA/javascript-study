//if , else, else if 는 자바와 동일 하다.
//다만, '', 0, false 와 같이 자바와 다르게 null, '', 0과 같이 falsy한 데이터는 false로 간주한다.

const open = true;
if(open){
  console.log('영없중입니다.');
}


//출력 안됨
if(null){
  console.log('널이라서 안나옴');
}
if(0){
  console.log('0이라서 안나옴');
}
if(''){
  console.log('빈 문자열 이라서 안나옴');
}