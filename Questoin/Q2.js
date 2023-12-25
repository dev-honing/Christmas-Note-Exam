// Question/Q2.js

// CommonJS 방식으로 모듈 가져오기
const ForExam = require('../main');

// new 키워드로 ForExam 클래스의 새로운 인스턴스를 생성하고,
// forExam 변수에 할당
const forExam = new ForExam();

// 디버깅을 위해 forExam 변수를 콘솔로 출력해 확인
console.log(forExam);

//* Q2. forExam.problem2의 배열에서 이름에 ‘이’가 포함된 포켓몬만 필터링 하시오.