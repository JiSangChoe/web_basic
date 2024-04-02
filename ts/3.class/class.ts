/*
    클래스 정의 :
    - 속성을 사전 정의해서 사용
*/

class Sample1 {
    field: string;
    constructor(field:string){
        this.field = field;
    }
}


console.log('==================================================');

/*
    접근제어자
    - public : 클래스 내부. 자식 클래스 내부, 모든 위치
    - protected : 클래스 내부, 자식 클래스 내부
    - private : 클래스 내부
    - typescript에는 패키지라는 개념이 없기 때문에 기본적으로 public으로 지정됨
*/


class Sample2 {
    private privateField: string;
    protected protectedField: string;
    public publicField: string;

    constructor (){
        this.privateField = '프라이빗 필드';
        this.protectedField = '프로텍티드 필드';
        this.publicField = '퍼블릭 필드';
    }
}

console.log('==================================================');

/*
    생성자 매개변수에 접근 제어자 지정
    - 생성자의 매개변수에 접근 제어자를 지정하여 필드 선언 가능, 접근 제어자 없으면 그냥 매개변수
    - 접근 제어자를 지정하면 속성으로 인식함
*/
class Sample3 {
        
    constructor (
        public publicField: string,
        protected protectedField: string,
        private privateField: string,
        localVariable: string // 속성이 아닌 매개변수
    ) {
        this.publicField = publicField;
        // this.localVariable = localVariable;
    }
}



console.log('==================================================');

/*
    readonly :
    - readonly가 선언된 클래스 속성은 선언 시 또는 생성자 내부에서만 값을 할당 할 수 있음
    - 값을 재할당 할 수 없고 오직 읽기만 가능
    - 상수 선언에 사용됨
*/

class Sample4 {
    
    public readonly field1: string = '퍼블릭 읽기 전용 필드1';
    public readonly field2: string;

    constructor(
        field2: string,
        public readonly field3: string
    ) {
        this.field2 = field2;
    }
}

const Sample4Instance = new Sample4('퍼블릭 읽기 전용 필드2', '퍼블릭 읽기 전용 필드3');
console.log(Sample4Instance);
// Sample4Instance.field1 = '변경'; // 변경 불가능 오직 읽기만 가능

console.log('==================================================');

/*
    추상 클래스 :
    - 하나 이상의 추상 메서드를 포함하는 클래스, abstract 키워드로 선언
*/

abstract class AbstractClass {
    abstract abstractMethod(arg: string): string;
}

class SubClass extends AbstractClass {

    abstractMethod(arg: string): string {
        return arg;
    }
    
}


console.log('==================================================');