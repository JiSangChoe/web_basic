/*
    디스트럭처링 : 비구조화 할당
    - 구조화된 배열 또는 객체를 비구조화, 구조화 파괴하여 개별 변수로 할당하는 것
    - 배열 또는 객체에서 필요한 데이터만 추출해서 변수에 할당하여 사용할 수 있도록 함
*/

const king = {
    name: '이성계',
    tombName: '태조',
    birth: '1335.11.04.',
    death: '1408.06.27.'
};

// let name = king.name;
// let tombName = king.tombName;
// let birth = king.birth;
// let death = king.death;

let fruits = ['apple', 'banana', 'melon', 'mango', 'orange'];

// let fruits1 = fruits[0];
// let fruits2 = fruits[1];
// let fruits3 = fruits[2];
// let fruits4 = fruits[3];
// let fruits5 = fruits[4];

/*
    배열 디스트럭처링
    - 배열의 각각의 요소를 배열로부터 추출해서 변수 리스트에 할당
    - 할당 기준은 인덱스
*/
// let fruits = ['apple', 'banana', 'melon', 'mango', 'orange'];

// 만약 배열 디스트럭처링에 배열의 길이를 초과한 변수를 선언하면 초과한 범위에 대하여 해당 변수는 undefined가 됨
const [fruits1, fruits2, fruits3, fruits4, fruits5, fruits6] = fruits;
console.log(fruits1);
console.log(fruits2);
console.log(fruits3);
console.log(fruits);

console.log('========================================');

/*
    spread 연산자를 활용
    - 배열 디스트럭처링 마지막에 스프레드 연산자를 사용하면 나머지 모든 요소로 새로운 배열을 생성
*/
const [anotherFruits, ...otherFruits] = fruits;
console.log(anotherFruits);
console.log(otherFruits);
console.log(fruits);


console.log('========================================');

/*
    객체 디스트럭처링
    - 객체의 각 속성을 객체로부터 추출하여 변수에 할당
    - 할당 기준 키
*/
// const king = {
//     name: '이성계',
//     tombName: '태조',
//     birth: '1335.11.04.',
//     death: '1408.06.27.'
// };

// 객체 디스트럭처링에서는 변수의 순서는 상관없지만, 이름은 반드시 객체의 키의 이름과 같아야함
// 배열은 순서가 중요하고 키는 중요하지 않음
const { name, tombName } = king;
console.log(name);
console.log(tombName);


console.log('========================================');

/*
    spread 연산자를 활용
    - 객체 디스트럭처링 마지막에 스프레드 연산자를 사용하면 나머지 모든 속성으로 새로운 객체를 생성
*/
const { birth, death, ...reftKing } = king;
console.log(birth);
console.log(death);
console.log(reftKing);


console.log('========================================');