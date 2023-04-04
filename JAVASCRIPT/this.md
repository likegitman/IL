# This
> 자바스크립트에서 this는 '누가 나를 불렀느냐'를 뜻한다고 한다.  
> 이 말은 선언이 아닌 호출에서 따라 값이 달라진다는 것이다.

# 단독 this
```
let a = this;
console.log(this); // window
```
> 위 코드는 그저 this를 호출하기 때문에 브라우저 기준에서  
> global object인 [object Window]를 가리킨다.

# 함수 this
```
function printThis() {
  return this;
}

console.log(printThis()); // window
```
> 위 코드에서 this는 함수의 주인에게 바인딩 되는데  
> 함수의 주인은 window객체이다.

```
let num = 0;

function addNum() {
    this.num = 100;
    num++;

    console.log(num); // 101
    console.log(window.num); // 101
    console.log(num === window.num) // true
}

addNum();
```
> 위 코드에서 this.num은 window객체를 가리키는데  
> 따라서 num은 전역변수를 가리키게 된다.

## Strict Mode (엄격 모드)
```
function printThis() {
  return this;
}

console.log(printThis()); // undefined
```
> 함수 내부 this에 디폴트 바인딩이 없기 때문에 undefined가 나타난다.

```
let num = 0;

function addNum() {
    this.num = 100; //ERROR! Cannot set property 'num' of undefined
    num++;
}

addNum();
```
> 오류가 나는 이유는 위와 같은 이유로 this.num은 undefined.num을 한 것과 똑같기 때문에  
> 오류가 발생한다.

# 메서드 this
```
let Person = {
  firstName: 'Lee',
  lastName: 'Woonrin',
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};
 
Person.fullName(); //"Lee Woonrin"
```
> 위 콛에서 메서드 호출 시 메서드 내부 코드에서 사용된 this는  
> 해당 메서드를 호출한 객체로 바인딩된다.

```
let num = 0;
 
function showNum() {
  console.log(this.num);
}
 
showNum(); //0
 
let obj = {
  num: 200,
  func: showNum,
};
 
obj.func(); //200
```
> 위 코드에서 함수 내의 this는 window객체를 가리키고있기 때문에 전역변수인 num이 나타나게된다.  
> 그와 달리 메서드 내의 this는 호출한 객체를 가리키기에 200이 찍히게된다.
