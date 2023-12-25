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
    // 설정 객체를 생성
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

  // generateProblemData() 메서드를 정의
  generateProblemData(problemNumber, baseArray, specialProblems) {
    // 주어진 문제 번호가 특별한 문제에 속하는 경우
    if (specialProblems.includes(problemNumber)) {
      // 기본 배열과 '이브이'를 합쳐서 반환
      return [...baseArray, '이브이'];
    }

    // 특별한 문제가 아닌 경우, 기본 배열의 복사본을 반환
    return baseArray.slice();
  }

  // assembleHTMLTags() 메서드를 정의
  assembleHTMLTags(htmlTagProblems) {
    for (let problem of htmlTagProblems) {
      // 현재 문제의 각 항목에 HTML 태그가 포함되어 있는지 확인
      this['problem' + problem] = this['problem' + problem].map(item => {
        // 항목이 HTML 태그를 포함하고 있는 경우
        if(item.includes('<')) {
          // 그대로를 반환
          return item;
        }
        // 그렇지 않으면 <li> 태그로 감싸서 반환
        return `<li>${item}</li>`
      });
    }
  }
}

// ForExam 클래스의 인스턴스를 생성
let forExam = new ForExam();

// 생성된 인스턴스를 콘솔에 출력
console.dir(forExam);