# Object
> key 와 value의 집합체 (object = {key: value};)

## Literals and Properties
```
// object 생성
const obj1 = {}; // object literal
const obj2 = new Object(); // object constructor

function print(person) {
  console.log(person.name);
  console.log(personage);
}

// object 정의
const woonrin = { name: 'woonrin', age: 17 }
print(woonrin); // output: woonrin \n 4

// object 정의 후 뒤늦게 propertie를 새로 추가 할 수 있음
woonrin.hasJob = true;
console.log(woonrin.hasJob); // output: true;

// 삭제도 할 수 있음
delete woonrin.hasJob;
console.log(woonrin.hasJob); // output: undefined;
```

## Computed Properties 
```
function print(person) {
  console.log(person.name);
  console.log(personage);
}

const woonrin = { name: 'woonrin', age: 17 }
woonrin.hasJob = true;
delete woonrin.hasJob;

// computed propertie값은 string type으로 지정해야 함
console.log(woonrin[name]); // undefined
console.log(woonrin['name']); // woonrin

woonrin{'hasJob'} = true;
console.log(woonrin.hasJob); // output: true

// 받을 key 값을 모를때에는 computed propertie

// exmple

// bad
/*function printValue(obj, key) {
  console.log(obj.key);
}*/
printValue(woonrin, 'name'); // output: undefined

// good
function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(woonrin, 'name'); // output: woonrin
printValue(woonrin, 'age'); // output: 17
```

## Property Value Shorthand
```
const person1 = { name: 'Kim', age: 1};
const person2 = { name: 'Lee', age: 2};
const person3 = { name: 'Han' age: 3};

function makePerson(name, age) {
  return {
    name, // name: name,를 생략한 것
    age, //  age: age,를 생략한 것
  }
}

const person4 = makePerson('woonrin', 17);
console.log(person4); // output: {name: "woonrin", age: 17}
```

## Constructor Function
```
const person1 = { name: 'Kim', age: 1};
const person2 = { name: 'Lee', age: 2};
const person3 = { name: 'Han' age: 3};

// this를 return하는 function
function Person(name, age) {
  // this = {}; 생략한 것
  this.name = name;
  this.age = age;
}
const person4 = new Person('woonrin', 17);
console.log(person4); // output: Person {name: "woonrin", age: 17}
```
