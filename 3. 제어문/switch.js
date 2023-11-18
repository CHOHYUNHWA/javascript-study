//java와 동일
//break가 없으면 해당 케이스에 걸린 후 다음 쭉 실행됨

const fingersOut = 0;

switch(fingersOut){
  case 2:
    console.log('가위');
    break;
  case 0:
    console.log('바위');
    break;
  case 5:
    console.log('보');
    break;
  
  default:
    console.log('무효');
}



const direction = 'south'

const directionKor = {
  north: '북',
  south: '남',
  east: '동',
  west: '서'
}[direction] ?? '무효'

console.log(directionKor);

const month = 1;
let season = '';

switch (month) {
  case 1: case 2: case 3:
    season = '1분기'; break;

  case 4: case 5: case 6:
    season = '2분기'; break;

  case 7: case 8: case 9:
    season = '3분기'; break;

  case 10: case 11: case 12:
    season = '4분기'; break;

  default: 
    season = '잘못된 월입니다.';
}

console.log(season);


const startMonth = 1;
let holidays = '분기 내 휴일:';

switch (startMonth) {
  case 1:
    holidays += ' 설날';
  case 2:
  case 3:
    holidays += ' 3•1절';
    break;

  case 4:
  case 5:
    holidays += ' 어린이날';
  case 6:
    holidays += ' 현충일';
    break;

  case 7:
  case 8:
    holidays += ' 광복절';
  case 9:
    holidays += ' 추석';
    break;

  case 10:
    holidays += ' 한글날';
  case 11:
  case 12:
    holidays += ' 크리스마스';
    break;

  default: 
    holidays = '잘못된 월입니다.';
}

console.log(holidays);