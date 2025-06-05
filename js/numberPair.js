// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/131128?language=javascript

// 키워드: 숫자 짝꿍

// 문제 설명
// 두 정수 X, Y의 임의의 자리에서 공통으로 나타나는 정수 k(0 ≤ k ≤ 9)들을 이용하여 만들 수 있는 가장 큰 정수를 문자열 형태로 return 하는 solution 함수를 완성해 주세요.

// 제한 사항
// 1. X, Y는 0 이상 10^9 이하인 정수입니다.
// 2. X, Y의 자릿수는 300,000자리를 넘지 않습니다.

// 수도 코드
// 1. 문자열로 변환
// 2. 일치하면 slice

// 시도 1 (테스트통과항목 7/19)
function solution1(X, Y) {
  let answer = '';
  const xStr = '' + X;
  let yStr = '' + Y;

  for (let x = 0; x < xStr.length; x++) {
    for (let y = 0; y < yStr.length; y++) {
      if (xStr[x] === yStr[y]) {
        answer += xStr[x];
        yStr = yStr.slice(0, y) + yStr.slice(y + 1);
      }
    }
  }

  if (answer === '') {
    return '-1';
  }

  answer = Number(answer.split('').sort((a, b) => b - a).join('')) + '';

  return answer;
}

// 수도 코드
// 1. 배열로 정렬
// 2. 일치하면 반영하고 다음으로 넘어가기

// 시도 2 (테스트통과항목 9/19)
function solution2(X, Y) {
  let answer = '';
  const xArr = X.split('').sort((a, b) => b - a);
  const yArr = Y.split('').sort((a, b) => b - a);

  let x = 0;
  let y = 0;
  while (true) {
    if (yArr[y] === xArr[x]) {
      answer += yArr[y];
      y++;
      x++;
    } else if (yArr[y] < xArr[x]) {
      x++;
    } else {
      y++;
    }

    if (x >= xArr.length || y >= yArr.length) {
      break;
    }
  }

  if (answer === '') {
    answer = '-1';
  }

  answer = Number(answer) + '';

  return answer;
}

// console.log(solution("100", "2345")); // '-1'
// console.log(solution("100", "203045")); // '0'
// console.log(solution("100", "123450")); // '10'
// console.log(solution("12321", "42531")); // '321'
// console.log(solution("5525", "1255")); // '552'