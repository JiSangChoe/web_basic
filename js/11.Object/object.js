/*
    객체 : 키(key)와 값(value)로 구성된 속성들의 집합
    - 메서드를 가질 수 있음
*/

/*
    객체 리터럴 : 자바스크립트에서 가장 일발적 객체 생성 방법
    - {}를 사용하여 객체를 생성
*/
const emptyObject = {};
const hongGildong = {
    name : '홍길동',
    age : 23,
    address : '서울특별시',
    greating : function (){
        console.log(`안녕 난 ${this.name}이야`);
    }
};

console.log(hongGildong);
console.log(hongGildong.name);
hongGildong.greating(); // 홍길동이라는 객체 리터럴의 함수를 호출

const name = '고종';
const age = 40;
const address = '서울특별시';

// 위에 선언된 name, age, address가 있고 밑에 goJong 이라는 객체를 생성할 때 각각의 키와 값의 이름이 같으면 키를 생략 가능은 함(안써도 무방)
const goJong = {
    name,
    age,
    address
};
console.log(goJong);


console.log('==============================');

/*
    Object 생성자 : Object 클래스의 생성자로 빈 객체 생성 가능
*/
const emptyObjectByConstructor = new Object();
console.log(emptyObjectByConstructor);


console.log('==============================');

/*
    생성자 함수 : 생성자 함수를 사용하여 클래스처럼 사용 가능
*/
function Person (name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}

const goGildong = new Person('고길동', 30, '인천광역시');
console.log(goGildong);
console.log(goGildong.name);


console.log('==============================');

/*
    속성 이름 (속성 키) : 
    - 일반적으로 문자열로 표기함
    - 자바스크립트에서 유효한 이름(변수 이름으로 사용가능한 이름)일 경우에는 따옴표를 생략할 수 있음
    - 유효한 이름이 아니면 반드시 따옴표를 포함해서 작성
*/
const choeJisang = {
    'first name' : 'Jisang',
    'last-name' : 'choe',
    gender : 'male',
    age : 32 
}
console.log(choeJisang);


console.log('==============================');

/*
    속성 값 읽기 : 
    - .표기법과 []표기법으로 접근 가능
    - .표기법은 유효한 이름일 때 사용
    - []표기법은 유효한 이름이 아닐 때와 접근할 속성이 동적으로 변할 때([]안에 반드시 문자열로 지정)
    - 객체에 존재하지 않는 속성에 접근하면 undefined를 반환
*/
console.log(choeJisang.age);
console.log(choeJisang['last-name']);
let property = 'first name';
console.log(choeJisang[property]);



console.log('==============================');

/*
    속성 값 변경 :
    - 객체 속성에 접근하여 새로운 값을 할당하여 변경 가능
    - 만약에 존재하지 않는 속성에 값을 할당하면 새로운 속성이 생성
*/
goJong.name = '이형';
goJong.birth = '1852-09-08';
console.log(goJong);


console.log('==============================');

/*
    속성 삭제 :
    - delete 연산자를 사용하여 객체 속성 제거 가능
*/
delete goJong.birth;
console.log(goJong);


console.log('==============================');

/*
    for-in 문 : 
    - for-in 문으로 객체에 포함되어 있는 키를 순회해서 접근 가능
    - 반환되는 값은 문자열 타입의 키가 반환
*/
for (const key in goJong){
    console.log(`${key}:${goJong[key]}`);
}


console.log('==============================');

let sunJong = goJong;
sunJong.name = '이척';

// 이렇게 하면 고종의 이름도 이척으로 바뀌는 문제가 발생
console.log(sunJong.name);
console.log(goJong.name);

goJong.name = '이형' // 원래대로 바꿈
console.log(goJong);

console.log('============방법1==================');

// 방법1 단순무식
sunJong = {
    name : goJong.name,
    age : goJong.age,
    address : goJong.address
}
sunJong.name = '이척';
console.log(sunJong);
console.log(goJong);

console.log('=============방법2=================');

// 방법2 for-in - 빈객체를 만든뒤 for-in문을 사용
sunJong = {};
console.log(sunJong);
for (const key in goJong) {
    sunJong[key] = goJong[key];
}
console.log(sunJong);

console.log('=============방법3=================');

sunJong = {};
console.log(sunJong);

// 방법3 기존의 배열을 복사(구조만)해서 새로운 배열을 생성해서 초기화하는 방법
//! goJong에서 name, age, address key를 가진 새로운 배열(공간)을 생성
sunJong = {...goJong};
console.log(sunJong);

goJong.name = '이형';
console.log(goJong.name);
console.log(sunJong.name);