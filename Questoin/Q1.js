// Question/Q1.js

// CommonJS 방식으로 모듈 가져오기
const ForExam = require('../main');

//* Q1. forExam.problem1의 배열의 모든 요소를 대문자로 변환하시오.
// ForExam 클래스의 새로운 인스턴스를 생성하고 forExam 변수에 할당
const forExam = new ForExam();

// 배열 메서드 map()을 사용해 problem1 배열의 모든 요소를 대문자로 변환
forExam.problem1.map(function (item) {
  return item.toUpperCase();
})

// 디버깅을 위한 확인 콘솔을 출력
console.log(forExam.problem1); //* [ '피카츄', '라이츄', '꼬부기' ]