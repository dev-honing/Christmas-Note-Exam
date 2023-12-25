// Question/Q3.js

// CommonJS 방식으로 모듈 가져오기
const ForExam = require('../main');

// new 키워드로 ForExam 클래스의 새로운 인스턴스를 생성하고,
// forExam 변수에 할당
const forExam = new ForExam();

// 초기 상태를 콘솔로 확인
console.log(forExam.problem3); //* [ '피카츄', '라이츄', '꼬부기' ]

//* Q3. forExam.problem3의 배열의 모든 요소를 하나의 문자열로 합치시오.