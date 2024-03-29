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
const [fruits1, fruits2, fruits3] = fruits;
console.log(fruits1);
console.log(fruits2);
console.log(fruits3);
console.log(fruits);

console.log('========================================');

/*
    spread 연산자를 활용
    - 
*/



console.log('========================================');

/*
    객체 디스트럭처링
    - 
    - 
*/



console.log('========================================');

/*
    spread 연산자를 활용
    - 
*/



console.log('========================================');