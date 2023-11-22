//  사용 예시

// `NetworkError` 란 이름의 사용자 정의 `Error` 클래스를 만들어보세요.
// 기존의 `Error` 를 확장하여, `statusCode` 란 필드를 추가로 갖는 클래스입니다.
try {
  throw new NetworkError('네트워크 연결 오류', 404);
} catch (e) {
  console.log(e.name);
  console.log(e.message);
  console.log(e.statusCode);
}

class NetworkError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = 'NetworkError';
    this.statusCode = statusCode;
  }
}