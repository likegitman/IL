# Function

# Use
```
function 함수이름(매개변수: 타입): 리턴값의 타입 {
    //...Code
}
```

# Simple
```
function add(num1: number, num2: number): number {
    return num1 + num2;
}

add(1, 2)
// add(1, 2, 3); // error
```

```
function isAdult(age:number):boolean {
    return age > 19;
}

isAdult(20);
// isAdult("20"); // error
```

# Optional
## Error
```
function hello(name: string):string {
    return `Hello, ${name || "World"}`;
}

const result = hello(); // error
// ${name || "World"}이라는 name이 없을 때를 대비한 코드가 있어도
// TS에서는 name이 없을 수도 있다는 걸 명시적으로 나타내야 됨
```

## Correction
```
function hello(name?: string):string {
    return `Hello, ${name || "World"}`;
}

const result = hello("Bob");
const result = hello(); // possible
```

# Priority
> optional parameter가 required parameter보다 앞에 오면 안 됨
```
function hello(age?:number, name: string) { // error
    return `Hello ${name}, you are ${age} years old`;
}
```

# OverLoading
## Error
```
interface User {
    name: string;
    age: number;
}

function join(name: string, age: number | string) : User | string {
    if(typeof age === "number") {
        return {
            name,
            age
        };
    } else {
        return "나이를 숫자로 입력해주세요";
    }
}

// error 
// return 되는 값이 객체인지 문자열인지 확신을 못 가짐
const user1: User = join("Sam", 19);
const user2: string = join("Sam", "19");
```

## Correction
```
interface User {
    name: string;
    age: number;
}

function join(name: string, age: number): User;
function join(name: string, age: string): string;
function join(name: string, age: number | string) : User | string {
    if(typeof age === "number") {
        return {
            name,
            age
        };
    } else {
        return "나이를 숫자로 입력해주세요";
    }
}

const user1: User = join("Sam", 19);
const user2: string = join("Sam", "19");
```
