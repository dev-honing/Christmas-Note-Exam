// Question/Q1.js

// CommonJS 방식으로 모듈 가져오기
const ForExam = require('../main');

//* Q1. forExam.problem1의 배열의 모든 요소를 대문자로 변환하시오.
// new 키워드로 ForExam 클래스의 새로운 인스턴스를 생성하고,
// forExam 변수에 할당
const forExam = new ForExam();

// Array.map() 메서드를 사용해서 새로운 배열을 생성하고,
// Q1에 할당
const Q1 = forExam.problem1.map(function (item) {
  // toUpperCase() 메서드를 사용해 각 문자열을 대문자로 변환
  return item.toUpperCase();
})

// Q1에 할당된 새로운 배열을 출력
console.log(Q1); //* [ '피카츄', '라이츄', '꼬부기' ]