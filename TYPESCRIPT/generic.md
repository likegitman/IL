# Generic
> 한가지 타입을 받는게 아닌 여러개의 타입을 받을 때 유용하게 사용함

# Example
## generic을 쓰지 않을 때
함수를 호출할 때마다 다른 배열을 인자로 주고싶을 때  
이런 방식들은 번거로울 수 있다.
  
```javascript
function getSize(arr:number[] | string[] | boolean[]):number {
    return arr.length;
}

const arr1 = [1, 2, 3];
getSize(arr1);
const arr2 = ["a", "b", "c"];
getSize(arr2);
const arr3 = [false, true, false];
getSize(arr3);
```

```javascript
interface SuperPrint{
    (arr:number[]):void;
    (arr:boolean[]):void;
    (arr:string[]):void;
}

const superPrint:SuperPrint=(arr)=>{
    arr.forEach(i=>console.log(i));
}

superPrint([1,2,3,4]);
superPrint([true,false,true,false]);
superPrint(["a", "b", "c", "d"]);
```

## generic을 사용할 때
위의 방식보다 확실히 코드가 간단해지고 유연성이 증가한다.  
(꼭 T라고 쓰지 않아도 되지만 T라고 쓰는것이 보편적)

```javascript
function getSize<T>(arr: T[]): number {
    return arr.length;
}

const arr1 = [1, 2, 3];
getSize(arr1);
const arr2 = ["a", "b", "c"];
getSize(arr2);
const arr3 = [false, true, false];
getSize<boolean>(arr3);
getSize(arr3); // 굳이 <type>을 안 써도 TS는 어떤 타입인지 안다.
```

```javascript
interface SuperPrint{
    <T>(arr:T[]):void;
}

const superPrint:SuperPrint=(arr)=>{
    arr.forEach(i=>console.log(i));
}

superPrint([1,2,3,4]);
superPrint([true,false,true,false]);
superPrint(["a", "b", "c", "d"]);
```

# Generic
C나 Java같은 정적 언어에서 다양한 타입 간에 재사용성을 높이기 위해 사용하는 문법이다. 제네릭은 사전적으로

**특징이 없거나 일반적인 것**이라는 의미를 가진다. ts에서 사용하는 제네릭도 이와 비슷한 맥락으로 일반화된

데이터 타입이라고 할 수 있다. 제네릭의 개념을 풀어보면 함수, 타입, 클래스 등에서 내부적으로 사용할 타입을

미리 정해두지 않고 타입 변수를 사용해서 해당 위치를 비워 둔 다음에 실제로 그 값을 사용할 때 외부에서

타입 변수 자리에 타입을 지정하여 사용하는 방식을 말한다. 이런 방식을 쓰면 함수, 타입, 클래스 등에서

여러 타입에 대해 하나하나 지정하지 않아도 되기에 유용하다. 타입 변수는 보통 `<T>` 방식으로 사용한다.
```ts
type ExampleArrayType<T> = T[];

const arr: ExampleArrayType<string> = ["hello", "hi", "world"]; 
```
제네릭이 일반화된 데이터 타입을 말한다고 했는데 그렇다면 any와 다를 것이 없지 않나라는 생각이 들게된다.

하지만 둘은 엄연히 다른 타입이고 둘의 차이점을 느낄 수 있는 것이 배열인데 배열의 타입을 any로 짓게되면

배열 요소들의 타입이 전부 같지 않을 수 있다. 따라서 타입 정보를 잃어버린다고 할 수 있다. 타입 검사를 하지않고

모든 타입을 허용하게된다. 하지만 제네릭은 any처럼 아무 타입이나 무분별하게 받는 것이 아니라 배열을 생성하는 시점에

원하는 타입으로 특정할 수 있다. 따라서 제네릭은 배열 요소를 전부 동일한 타입이라고 특정할 수 있다.

```ts
type ExampleArrayType = any[];

const arr: ExampleArrayType = [1, "hello", true];
```
참고로 제네릭을 호출할 때 무조건 <>안에 타입을 지정해줘야하는 것은 아니다. 타입을 명시하는 부분을 무시하면

ts 컴파일러가 알아서 타입을 추론하게된다.
```ts
function ExampleFunction<T>(arg: T): T[] {
  return new Array(3).fill(arg);
}

// 두 사용법 모두 문제없다.
ExampleFunction<string>("hello");
ExampleFunction("hello");
```
제네릭은 일반화된 데이터를 의미한다. 그래서 어떤 타입이든 될 수 있다는 것을 알고 있어야하는데 특정 타입 내에서만

존재하는 멤버를 참조하려고하면 당연히 오류가 발생하게 된다. 예를 들어서 아래와 같이 string이나 array에만 있는 속성인

length를 사용하면 안 된다.
```ts
function exampleFunction<T>(arg: T): number {
  return arg.length; // error
}
```
만약 length를 사용하고 싶다면 제네릭에 length속성을 가진 타입만 받는다는 제약을 걸어주어야한다.
```ts
function exampleFuntion<T extends {length: number}>(arg: T): number {
  return arg.length;
}
```
파일 확장자가 tsx일 때 화살표 함수에 제네릭을 사용하면 오류가 발생한다. tsx는 Typescript + jsx이기에 제네릭의

꺽쇠 괄호와 태그의 꺽쇠괄호를 혼동하여서 문제가 생긴다. 이런 문제를 해결하려면 제네릭에 extends 키워드를 사용해

ts 컴파일러에게 특정 타입의 하위 타입만 올 수 있다는 것을 확실히 알려주면 된다.
```ts
// error
const arrowExampleFunction = <T>(arg: T): T[] => {
  return new Array(3).fill(arg);
};

// success
const arrowExampleFunction2 = <T extends {}>(arg: T): T[] => {
  return new Array(3).fill(arg);
};
```
