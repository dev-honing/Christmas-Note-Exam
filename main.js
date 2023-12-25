// main.js

// Happy Christmas Note Exam Basic

// ForExam 클래스 선언
class ForExam {
  // 생성자
  constructor() {
    // initData() 메서드를 호출해 데이터를 초기화
    this.initData();
  }

  // 데이터를 초기화하는 initData() 메서드 정의
  initData() {
    // 설정 객체 생성
    const config = {
      baseArray: ['피카츄', '라이츄', '꼬부기'],
      specialProblems: [10, 16, 17, 18, 19, 20],
      htmlTagProblems: [22, 23, 25, 27, 29, 30],
      startProblemIndex: 1,
      endProblemIndex: 30
    };
  }
}
