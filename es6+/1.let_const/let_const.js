/*
    블록 레벨 스코프 : 
    - 모든 코드 블럭 내에서 선언된 변수는 해당 코드 블럭 내에서만 사용 가능
*/
{
    var funcLevel = 10;
}
console.log(funcLevel);

// 블록 레벨 변수는 해당 블럭 외부에서 사용 불가능
// {
//     let blockLevel = 10;
// }
// console.log(blockLevel);

/*
    let
*/

/*
    변수 중복 선언 불가 : 
    - 변수를 동일한 이름으로 여러개를 선언할 수 없음
*/
var varVariable = 10;
var varVariable = 10;

// 컴파일 언어만 빨간줄 끄임 js는 스크립트 언어이지만 vsc에서 알아서 끄임
// let letVariable = 10;
// let letVariable = 10;


/*
    호이스팅 : var, function 선언문을 최상단에 선언한 것처럼 동작하는 특성
    - let 키워드로 선언된 변수는 최상단에서 변수의 선언문까지 일시적 사각지대(TDZ: Temporal Dead Zone)에 빠트림
*/
// 선언 이전에 사용하는 것을 방지하기 위해 var를 사용하지 않음

// undefined 오류를 잡지 못함
console.log(varHoisting);
var varHoisting = 10;

// ReferenceError: Cannot access 'letHoisting' before initialization 가 발생
// console.log(letHoisting);
// let letHoisting = 10;

// ReferenceError: letHoisting is not defined 
// console.log(notDefined);


/*
    const
*/

/*
    선언과 초기화 : 
    - const는 재할당 불가능
    - 선언과 동시에 반드시 초기화가 이루어져야함
*/
const ASSIGNMENT = 10;
// TypeError: Assignment to constant variable.
// ASSIGNMENT = 11;

// SyntaxError: Missing initializer in const declaration -> 이 코드도 vscode 에서 알아서 빨간줄 끄임
// const INITIALIZATION; 

/*
    상수와 객체 : 
    - 코드의 가독성 향상을 위해 많이 사용됨
    - 객체에 할당하여 참조를 변경하지 못하도록하고 속성만 변경가능하도록 함
    - 일반적으로 객체는 상수로 사용
*/
const king = { name: '이성계'};

// TypeError: Assignment to constant variable.
// king = { name: '이방과'};

// 속성만 변경하려고 함 -> 이건 가능!
king.name = '이방과';
console.log(king);

/*
    var, let, const
    - ES6 이상을 사용할 수 없을 때 var을 사용함 -> ES6 이상을 사용한다면 var을 사용 안함!
    - 재할당이 발생하는 변수에는 let을 사용함
    - 재할당이 일어나지 않는 변수에는 const를 사용함
*/