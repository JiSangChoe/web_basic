/*
    매개변수 기본값 : 
    - 함수 호출시 인수를 전달하지 않았으면 사용할 기본값을 지정할 수 있음
*/
const add = (a = 10, b = 20) => { return a + b };
console.log(add());
console.log(add(30, 90));

console.log('========================================');

/*
    rest 매개변수 : 
    - 매개변수 앞에 ...을 붙여서 정의한 매개변수
    - 함수에 전달받은 인수의 목록을 배열로 전달
    - rest 매개변수는 반드시 제일 마지막에 선언되어야 함
*/
const restFunction1 = (...args) => {
    console.log(args);
};
restFunction1(1, 2, 3, 4, 5);

// ...args 는 제일 마지막에 선언되어야 함
const restFunction2 = (arg1, ...args) => {
    console.log(arg1);  // 1
    console.log(args); // [2, 3, 4, 5] -> 나머지 부분을 배열로 가져옴
};
restFunction2(1, 2, 3, 4, 5);


console.log('========================================');

/*
    spread 연산자 : 
    - ...를 사용하여 대상을 개별 요소로 분리
    - 반드시 피연산자를 반복 가능한 객체 (배열, 객체, 문자열 등...) 이어야 함
*/
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

console.log(...numbers); // -> 배열의 형태가 아닌 각 요소 자체를 꺼내와서 출력
console.log(1, 2, 3, 4, 5); // -> 바로 위의 코드와 같음

console.log('========================================');

// 배열 복사에 사용
const copyNumbers = [ ...numbers ];
console.log(copyNumbers);

copyNumbers[0] = 10;
console.log(numbers);
console.log(copyNumbers); // -> 새로운 주소에 할당된 배열의 값이 바뀐걸 알 수 있음

console.log('========================================');

// 배열 연결에 사용
const numbers2 = [6, 7, 8, 9, 10];
let newNumbers = [ ...numbers, ...numbers2 ];
console.log(newNumbers);
newNumbers = [ ...numbers2, ...numbers ]; // -> 순서가 바뀜
console.log(newNumbers);

console.log('========================================');

//! 배열 요소 추가에 사용
newNumbers = [ ...numbers, 0, -1, -2];
console.log(newNumbers);

// 객체 복사, 연결, 요소 추가에 사용
const king = {
    name: '이성계',
    tomName: '태조'
};

// 복사
let newKing = { ...king };
newKing.name = '이방과';
console.log(newKing); // 새로운 주소에 복사했기 때문에 king의 이름은 바뀌지 않는다.
console.log(king);

const kingInfo = {
    address: '서울특별시',
    country: '고려'
}

// 연결
newKing = { ...king, ...kingInfo };
console.log(newKing);

// 요소 추가
newKing = { ...king, birth: '1335.11.04'};
console.log(newKing);

//! king에는 이미 name 있는데 뒤에 name이 오면 복사변경으로 인식해서 바뀌고 그다음 뒤에 요소를 추가, 즉 덮어써짐
newKing = { ...king, name: '이단', birth: '1335.11.04' };
console.log(newKing);