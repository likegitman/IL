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
// 기존 JS처럼 선언하고 접근하면 오류가 생기는
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

# Optional, Readonly, Index
* optional
> 있어도 되고 없어도 되는 속성으로 만듦    
```
interface User {
    name: string;
    age: number;
    gender?: string;
}

let user:User = {
  name: "unrin",
  age: 18,
  // gender 선언하지 않아도 오류가 생기지 않음
}
```

* readonly
> 읽기전용 속성으로 만듦(처음 생성할 때만 할당이 가능하고 후에는 재할당이 불가능)
```
interface User {
    name: string;
    age: number;
    readonly gender: string;
}

let user:User = {
  name: "unrin",
  age: 18,
  gender: "male",
}

// user.gender="female"; // error
```
