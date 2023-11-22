// console.log('에러 발생 전');

// try{
//   (3).split('');
// } catch (e){
//   console.error('에러 발생', e);
// }
// console.log('에러 발생 후');


// const arr =  ['ABC', '가나다', 123, '123'];

// function getLetterArray(str){
//   try{
//     return str.split(''); 
//   } catch (e){
//     console.error('에러발생!', e);
//     return []
//   }
// }

// arr.forEach(i => {
//   console.log(getLetterArray(i));
// })


// function connect(){
//   console.log('----통신 시작----')
//   console.log('*', '통신 연결');
// }
// function disconnect(){
//   console.log('통신 연결 해제');
// }
// function sendArray(arr){
//   console.log('전송', arr);
// }

// const arr = ['ABC','가나다', 123 , '123'];

// function sendStringAsArr(str){
//   connect();

//   try{
//     sendArray(str.split(''));
//     return true;
//   } catch(e){
//     console.log('에러 발생', e);
//     return false;
//   }

//   finally{
//     disconnect();
//     console.log('----통신 종료----');
//   }
// }

// arr.forEach(i => {
//   console.log(
//     sendStringAsArr(i) ? '성공' : '실패'
//   ) 
// })





//에러 객체
// const error = new Error('뭔가 잘못됐어');
// console.error(error);

// const error = new Error(
//   '뭔가 잘못됐어',
//   {cause : '뭔가 잘못됐으니까'}
// );
// console.error(error);

// console.log(error.name);
// console.log(error.message);
// console.log(error.cause);


// const errorFuncs = [
//   // 자료형에 맞지 않는 메서드 호출
//   () => { (3).split(''); },

//   // 선언되지 않은 함수 호출
//   () => { hello(); },

//   // 부적절한 숫자를 인자로 전달
//   () => { (123.45).toFixed(-1); }
// ];

// errorFuncs.forEach(func => {
//   try {
//     func();

//   } catch (e) {
//     console.error(e);
//     console.log(e.name);
//     console.log(e.message, '\n\n');
//   }
// });

// errorFuncs.forEach(func =>{
//   try{
//     func();
//   } catch(e){
//     if(e instanceof TypeError){
//       console.error('자료형을 확인하세요.')
//       return;
//     }
//     if(e instanceof ReferenceError){
//       console.error('선언되지 않은 객체 입니다.')
//       return;
//     }
//     if(e instanceof RangeError){
//       console.error('범위를 확인하세요.')
//       return; 
//     } else {
//       console.log('이유를 확인하세요..');
//     }
//   }
// })


// function applyForMonth(data){
//   try{
//     if(typeof data !== 'number'){
//       throw new TypeError('숫자만 입력 가능 합니다.');
//       return;
//     }
//     if(data < 1 || data >12){
//       throw new RangeError('1~12사이만 입력 가능 합니다.');
//       return;
//     }
//     console.log(`${data}월로 등록 되었습니다.`)
//   } catch(e){
//     console.error('에러 발생',e);
//     console.log('다시 시도해 주세요.');
//   }
// }

// applyForMonth(0);
// applyForMonth(1);
// applyForMonth('1');