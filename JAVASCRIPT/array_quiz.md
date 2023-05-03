# array Quiz

## 배열에서 문자열 만들기
```
{
    const animal = ['dog', 'cat', 'fox'];
    
    // join(separator?: string) => string
    
    // 구분자를 나타내지 않으면 ','로 표시된다
    // const result = animal.join();
    // console.log(result) // output: dog, cat, fox
    
    // 구분자를 나타내면 원래 ',' 였던 기호가 괄호안의 string으로 바뀌게 된다
    const result = animal.join(' , and '); 
    console.log(result); // output: dog , and cat , and fox
}
```

## 문자열에서 배열 만들기
```
{
    const animal = '＃, ＆, ＠, ★';
    
    // split(separator: string | RegExp, limit?: number) => spring[]
    const result = animal.split(',');
    console.log(result); // output: (4) ['＃', ' ＆', ' ＠', ' ★']
}
```

```
{
    const animal = '＃, ＆, ＠, ★';
    // split(separator: string | RegExp, limit?: number) => spring[]
    const result = animal.split(',', 2);
    console.log(result); // output: (2) ['＃', ' ＆']
}
```

## 배열 순서 바꾸기
```
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result); // output: (5) [5, 4, 3, 2, 1]
   
    // reverse()는 기존의 배열의 순서도 바꾼다 
    console.log(array) // output: (5) [5, 4, 3, 2, 1]
}
```

## 처음의 배열에 영향 없이 새 배열 만들기
```
{
    const array = [1, 2, 3, 4, 5];
    // slice(start?: number, end?: number)
    // end number를 4로하게되면 그 index값이 배제되기때문에 end number를 5로한다
    const result = array.slice(2, 5); 
    console.log(result); // output: (3) [3, 4, 5]
    console.log(array); // output: (5) [1, 2, 3, 4, 5]
}
```

## 점수가 90인 학생을 찾기
```
class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

{
    // find(predicate: (value: Student, index: number, obj: Student[]) => unknown, thisArg?: any): Student
    // 배열안에서 첫번째로 찾아진 요소는 전달된 callback함수가 true일때 바로 리턴하고 그렇지 않으면 undefined를 리턴한다
    const result = students.find((student) => student.score === 90);
    console.log(result); //output: Student {name: 'C', age: 30, enrolled: true, score: 90}
}
```

## 등록된 학생들의 배열만들기
```
class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

{
    // filter(predicate: (value: Student, index: number, array: Student[]) => unknown, thisArg?: any): Student[]
    const result = students.filter((student) => student.enrolled);
    console.log(result);
    // output: 
    // 0: Student {name: 'A', age: 29, enrolled: true, score: 45}
    // 1: Student {name: 'C', age: 30, enrolled: true, score: 90}
    // 2: Student {name: 'E', age: 18, enrolled: true, score: 88}
}
```

## 학생 점수만 포함하는 배열 만들기 단, 결과는 다음과 같아야한다. [45, 80, 90, 66, 88] 
```
class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

{
    // map(callbackfn: (value: Student, index: number, array: Student[]) => U, thisArg?: any): U[]
     const result = students.map((student) => student.score);
     console.log(result); // output: (5) [45, 80, 90, 66, 88]
}
```

```
class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

{
    // 만약 점수를 2배 곱하여 출력하고 싶을 때
    const result = students.map((student) => student.score * 2);
    console.log(result); // output: (5) [90, 160, 180, 132, 176]
}
```

## 점수가 50점 미만인 학생이 있는지 확인하기
```
class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

{
    // some(predicate: (value: Student, index: number, array: Student[]) => unknown, thisArg?: any): boolean
    // some()은 한개라도 조건이 true라면 true를 리턴한다
    // const result = students.some((student) => student.score < 50);
    // console.log(result); // output: true
}
```

```
class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

{
    // every(predicate: (value: Student, index: number, array: Student[]) => unknown, thisArg?: any): boolean
    // every()는 모든 조건이 true이어야 true를 리턴한다
    // 이 문제에서 every로 true를 나타내고 싶으면 !(부정)을 붙인다
    const result = students.every((student) => student.score < 50);
    console.log(result); // output: false
}
```

## 학생들의 평균 점수 계산하기
```
class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

{
    // reduce(callbackfn: (previousValue: Student, currentValue: Student, currentIndex: number, array: Student[]) => Student): Student
    // 원하는 시작점부터 모든 배열을 돌면서 어떤값을 누적할때 사용한다
    // reduceRight()는 거꾸로 배열을 돈다
    const result = students.reduce((prev, curr) => {
        console.log(prev);
        console.log(curr);
        return prev + curr.score;
        // 순차적으로 누적된 값들이 전달되어진다
        // output:
        // 0
        // Student {name: 'A', age: 29, enrolled: true, score: 45}
        // 45
        // Student {name: 'B', age: 28, enrolled: false, score: 80}
        // 125
        // Student {name: 'C', age: 30, enrolled: true, score: 90}
        // 215
        // Student {name: 'D', age: 40, enrolled: false, score: 66}
        // 281
        // Student {name: 'E', age: 18, enrolled: true, score: 88}
    }, 0);

    // 전체가 더해진 값이 출력된다
    console.log(result); // output: 369
}
```

```
class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

{
    // 간단히
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    // 평균값을 구해야하니 총합인 result를 더해진 개수로 나눈다
    console.log(result / students.length); // output: 73.8
}
```

## 모든 점수를 포함하는 문자열 만들기 단, 결과는 다음과 같아야 한다. '45, 80, 90, 66, 88'
```
class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

{
     const result = students
     .map((student) => student.score)
     .join();
     console.log(result); // output: 45,80,90,66,88
}
```

```
class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

{
    // 만약 50점 이상인 점수만 출력하고싶을때
    const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
    console.log(result); // output: 80,90,66,88
}
```
