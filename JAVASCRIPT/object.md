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
print(woonrin); // output: woonrin \n 17

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

woonrin['hasJob'] = true;
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
// key 값은 무조건 ''(string)로 감싸줘야 한다
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

## In Operator
```
const woonrin = { name: 'woonrin', age: 17 }
woonrin.hasJob = true;

console.log('name' in woonrin); // output: true
console.log('age' in woonrin); // output: true
console.log('random' in woonrin); // output: false
console.log(woonrin.random); // output: undefined
```

## for..in and for..of
```
const woonrin = { name: 'woonrin', age: 17 }
woonrin.hasJob = true;

// for..in
for (key in woonrin) {
  console.log(key); // output: name \n age \n hasJob
}

// for..of
// for (value of iterable)
const array = [1, 2, 3, 4];

for(let i = 0; i < array.length; i++){
    console.log(array[i]); // output: 1 \n 2 \n 3 \n 4
}

// simplification
for(value of array) {
    console.log(value); // output: 1 \n 2 \n 3 \n 4
}
```

## Cloning
```
const user = { name: 'woonrin', age: '17' };
const user2 = user; // user2에 user를 할당
user2.name = 'coder'; // user의 name은 coder로 바뀌게 됨
console.log(user); // output: { name: 'woonrin', age: '17' }

const user3 = {}; // 빈 공간으로 만듦
for (key in user) {
    user3[key] = user[key]; // user의 key값들이 user3에 할당되어 짐
}
console.log(user3); // output: {name: 'coder', age: '17'}

// way 1
const user4 = {};
Object.assign(user4, user);
console.log(user4); // output: {name: 'coder', age: '17'}

// way2
const user5 = Object.assign({}, user);
console.log(user5); // output: {name: 'coder', age: '17'}

// example       
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
// 앞에 동일한 propertie가 있다면 뒤의 변수가 값을 덮어씌움
const mixed = Object.assign({}, fruit1, fruit2); 
console.log(mixed.color); // output: blue
console.log(mixed.size); // output: big
```
