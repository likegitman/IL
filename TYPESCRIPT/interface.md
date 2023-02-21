# Interface
1. 인터페이스는 일반적으로 타입 체크를 위해 사용되며 변수, 함수, 클래스에 사용할 수 있다
2. 인터페이스는 프로퍼티와 메소드를 가질 수 있다는 점에서 클래스와 유사하나  
   직접 인스턴스를 생성할 수 없고 모든 메소드는 추상 메소드이다.  
   단, 추상 클래스의 추상 메소드와 달리 abstract 키워드를 사용하지 않는다.

* 기존 JavaScript
```
let user:object = {
    name: "unrin",
    age: 18,
}
console.log(user.age); // possible
```

* TypeScript
```
// 기존 JS처럼 선언하고 접근하면 오류가 생기는데
// 이럴 때 사용하는 것이 interface
interface User {
    name: string;
    age: number;
}

let user:User = {
  name: "unrin",
  age: 18,
}

console.log(user.age);
```

# Declaration
```
interface 이름 {
    key: type;
    key: type;
}
```

# Union, Optional, Readonly, Index, Function

## union
> 기본 type
```
interface User {
    name: string;
    age: number;
    student: boolean;
}

let user:User = {
  name: "unrin",
  age: 18,
  student: false,
}
```

## optional
> 있어도 되고 없어도 되는 속성으로 만듦(? 사용)    
```
interface User {
    name: string;
    age: number;
    gender?: string; // optional
}

let user:User = {
  name: "unrin",
  age: 18,
  // gender를 선언하지 않아도 오류가 생기지 않음
}
```

## readonly
> 읽기전용 속성으로 만듦(처음 생성할 때만 할당이 가능하고 후에는 재할당이 불가능)
```
interface User {
    name: string;
    age: number;
    gender?: string
    readonly birthday: string; // readonly
}

let user:User = {
  name: "unrin",
  age: 18,
  gender: "male",
  birthday: "2000.01.01",
}

// user.birthday="2000.01.02"; // error
```

## index
> 여러 속성 정보를 받을 때 사용 (key:number, value:string)
```
interface User{
    name: string;
    age: number:
    gender?: string;
    readonly birthday: string; 
    [grade:number]: string;
}

let user:User = {
  name: "unrin",
  age: 18,
  gender: "male",
  birthday: "2000.01.01",
  1: "A",
  2: "B",
}
```

## function
> 함수의 매개변수와 리턴 값의 type을 지정할 때 사용

```
// 2개의 매개변수를 받아 두 숫자의 합을 반환하는 함수
interface Add {
    (num1:number, num2: number): number;
}

function add : Add(a, b) {
    return a + b;
}

add(10, 20); // 30

// 1개의 매개변수를 받아 그 숫자가 19보다 큰지(성인인지) boolean값을 반환하는 함수
interface Adult {
    (age:number): boolean;
}
    
const isAdult : Adult=(age)=>{
    return age > 19;
};

isAdult(20); // true
```
