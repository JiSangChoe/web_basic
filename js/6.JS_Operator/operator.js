/*
    산술 연산자 : 사칙 연산을 수행하는 연산
    - 산술 연산을 할 수 없으면 NaN을 반환
    - 이항 산술 연산과 단항 산술 연산
*/

/*
    이항 산술 연산자 : 항이 두 개가 필요한 산술 연산자
    - 피연산자를 변경하는 부수 효과가 존재하지 않음
    - + : 덧셈
    - - : 뺄셈
    - * : 곱셈
    - / : 나눗셈
    - % : 나머지
*/
console.log(10/3);
console.log('십'/3);
console.log(10/0);


/*
    단항 산술 연산자 : 항이 하나인 산술 연산자
    - 피연산자를 변경하는 부수 효과가 발생할 수 있음
    - ++ : 증가
    - -- : 감소
    - + : 어떠한 효과도 없음
    - - : 양수를 음수로 음수를 양수로 변경
*/
let single = 0;
let result = 0;

// 선대입 후증가
result = single++ * 8; // 0
// 선증가 후대입
result = ++single * 8; // 16
// 선대입 후감소
result = single-- + 9 - ++single; // 9
// 선감소 후대입
result = --single;


/*
    - +단항 연산자는 숫자 타입이 아닌 피연산자에 사용하여 숫자 타입으로 변환함
*/
console.log(typeof +10);
console.log(typeof +'10'); // +을 사용해서 문자타입에서 숫자타입으로 변환함
console.log(+true);


/*
    - -단항 연산자 피연산자의 부호를 반전한 값을 반환
    - 숫자 타입이 아닌 피연산자에 사용하면 부호가 반전된 숫자 타입으로 변환함
*/
console.log(-10);
console.log(-'10');
console.log(-true);


/*
    문자열 연결 연산자
    - + 이항 연산자의 피연산자 중 하나라도 문자열이 존재하면 연결 연산자로 사용됨
*/
console.log(1 + '1');
console.log(1 + 't');
console.log('A method Start : ' + 10 + 'sec')
console.log('A method End : ' + 20 + 'sec')
console.log('A method : ' + (20 + 10) + 'sec') //주의하기()를 넣으면 해결됨 ㅇㅇ

/*
    할당 연산자 : 
    -  = : 좌항에 우항을 대입
    - += : 좌항에 좌항의 원래 값과 우항을 더한 값을 대입
    - -= : 좌항에 좌항의 원래 값과 우항을 뺀 값을 대입
    - *= : 좌항에 좌항의 원래 값과 우항을 곱한 값을 대입
    - /= : 좌항에 좌항의 원래 값과 우항을 나눈 값을 대입
    - %= : 좌항에 좌항의 원래 값과 우항을 나눈 후 나머지 값을 대입
*/



/*
    비교 연산자 : 
    - == : 동등 비교
    - === : 일치 비교
    - != : 부등 비교
    - !== 불일치 비교
*/



/*
    대소 관계 비교 연산자 : 
    - > : 좌항이 우항보다 크다
    - < : 좌항이 우항보다 작다
    - >= : 좌항이 우항보다 크거나 같다
    - <= : 좌항이 우항보다 작거나 같다
*/



/*
    삼항 연산자 : 
    - 
*/



/*
    삼항 연산자는 if else 문과 같은 역할을 함
*/



/*
    논리 연산자 : 
    - || : 좌항과 우항 중 하나라도 true면 true, 그렇지 않으면 false
    - && : 좌항과 우항이 모두 true 이면 true, 그렇지 않으면 false
    - ! : 우항을 부정, 우항이 true이면 false, false이면 true
*/



/*
    - 
*/



/*
    쉼표 연산자 : 
*/



/*
    typeof 연산자 : 
*/


