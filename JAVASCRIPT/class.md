# Class

## Class Declarations and object
```
// class declarations
class Person {
  // constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // methods
  speak() {
    console.log(`${this.name} hello!!`);
  }
}

//object produce

const woonrin = new Person('woonrin', 17); // Person's constructors
console.log(woonrin.name); // output: woonrin
console.log(woorin.age); // output: 17
woonrin.speak(); // output: woorin hello!!
```

## Base 
```
class Counter {
    constructor(runEvery5Times) {
        this.counter = 0;
        this.callback = runEvery5Times;
    }

    increase() {
        this.counter++;
        if(this.counter % 5 === 0) {
            this.callback(this.counter);
        } else {
            console.log(this.counter);
        }
    }
}

function printSomething(num) {
    console.log(`oh!! ${num}`);
}

function aleartSomething(num) {
    alert(`oh!! ${num}`);
}

// class의 편리성
// 하나의 class를 만들어 다양한 object를 만들고
// 서로 다른 기능을 수행을 할 수 있게 함
const printCounter = new Counter(printSomething);
const aleartSomething = new Counter(aleartSomething);
```

## Getter and Setters 
```
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  get age() {
    return this._age;
  }
  
  set age(value) {
    this._age = value <= 0 ? 'error' : value;
  }
}

cosnt user1 = new User('Steve', 'job', -1);
console.log(user1.age); // output: error
```

## Field( Public and Private )
> constructor없이 field를 정의할 때  
  그냥 정의한다면 publicfield -> 외부에서 접근이 가능함  
  #를 붙여 정의한다면 privatefield -> 외부에서 접근이 불가능하고 class내부에서만 접근이 가능함
```
 // constructor없이 field를 정의할 때
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField); // output: 2
console.log(experiment.privateField); // output: undefined
```

## Static
> object마다 할당이 되는게 아닌 class자체에 붙어있음
```
class Article {
  static publisher = 'woonrin';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }
  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // output: undefined
console.log(Article.publisher); // output: woonrin
Article.printPublisher(); // output: woonrin
```

## Inherit
```
class Share {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  
  draw() {
    console.log(`drawing ${this.color} color!`);
  }
  
  getArea() {
    return width * this.height;
  }
}

// 자동적으로 Shape class에서 정의한 field, method들이
// Rectangle과 Triangle class에 포함 됨(사용이 가능 함)

class Rectangle extends Shape {}
class Triangle extends Shape {
  // overiding
  draw() {
    super.draw(); // 부모class의 draw라는 함수를 호출
    console.log('▲');
  }
  getArea() {
    return (width * this.height) / 2;
  }
}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw(); // output: drawing blue color!
console.log(rectangle.getArea()); // output: 400
const triangle = new Triangle(20, 20, 'red');
triangle.draw(); // output: drawing red color! \n ▲
console.log(triangle.getArea()); // output: 200
```
