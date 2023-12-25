// main.js

// Happy Christmas Note Exam Basic

// ForExam 클래스 선언
class ForExam {
  // 생성자
  constructor() {
    // initData() 메서드를 호출해 데이터를 초기화
    this.initData();
  }

  // 데이터를 초기화하는 initData() 메서드를 정의
  initData() {
    // 설정 객체 생성
    const config = {
      baseArray: ['피카츄', '라이츄', '꼬부기'],
      specialProblems: [10, 16, 17, 18, 19, 20],
      htmlTagProblems: [22, 23, 25, 27, 29, 30],
      startProblemIndex: 1,
      endProblemIndex: 30
    };

    // 주어진 범위의 문제 데이터를 생성하고, 클래스 속성으로 추가
    for (let i = config.startProblemIndex; i <= config.endProblemIndex; i++) {
      // generateProblemData 메서드로 문제 데이터를 생성
      this['problem' + i] = this.generateProblemData(
        i,
        config.baseArray,
        config.specialProblems
      );
    }

    // 문제 16번을 새로운 데이터로 재설정
    this.problem16 = [['피카츄', '라이츄'], ['꼬부기', '이브이']];

    // HTML 태그와 관련된 문제를 조립하는 메서드를 호출
    this.assembleHTMLTags(config.htmlTagProblems);
  }
}
