// 연산에 사용될 변수 생성
const firstNumber = 10;
const secondNumber = 5;
const operator = '+';

// 결과 값을 저장할 변수 선언
let result;

// 연산자에 따라 계산결과 저장
switch (operator) {
    case '+':
        result = firstNumber + secondNumber;
        break;
    case '-':
        result = firstNumber - secondNumber;
        break;
    case '*':
        result = firstNumber * secondNumber;
        break;
    case '/':
        result = firstNumber / secondNumber;
        break;
    default:
        result = '유효하지 않은 연산자입니다.';
}

// 결과 출력
console.log(`결과: ${result}`);