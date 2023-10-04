# JSON
> JavaScript Object Notation  
  자바스크립트 객체 표기법

* 데이터를 주고 받을 때 쓸 수 있는 가장 간단한 파일이다 
* 가장 간단한 데이터 교환 형식이다
* 가벼운 텍스트 기반 구조이다
* 읽기 쉽다
* key와 value로 이루어져 있다
* 네트워크 연결 사이의 직렬화 및 데이터 전송에 사용된다
* 독립적인 프로그래밍 언어 및 플랫폼이다

> 독자적인 표준을 가진 데이터 형식이고 본래는 `javascript`에서 다루려고 만들었지만 다른 언어에서도 충분히
> 다룰 수 있고 대부분의 언어에서는 `JSON`을 다룰 수 있게 해주는 라이브러리가 있다.

## JSON Api 

### JSON.stringify()
> 객체를 `JSON`으로 바꿔준다.
```js
const person = {
  name: 'woonrin',
  age: 18,
  major: 'front-end',
  gender: 'male'
}

const json = JSON.stringify(person)

console.log(typeof json) // output: string

console.log(json) // output: {"name":"woonrin","age":18,"major":"front-end","gender":"male"}

```
> `JSON.stringify(person)`를 호출하면 person이 문자열로 바뀐다. JSON으로 인코딩된 객체는 일반 객체와 다르게  
> JSON은 작은 따옴표나 백택을 사용할 수 없어 작은 따옴표로 감싼 문자열들이 큰 따옴표로 감싸지게 된다. 그리고  
> 객체 `property`도 큰따옴표로 감싸진다. 물론 `JSON.stringify()`는 객체가 아닌 원시값에도 적용할 수 있다.

```js
JSON.stringify(1) // output: '1'

JSON.stringify('test') // output: "text"

JSON.stringify(true) // output: 'true'

JSON.stringify([1, 2, 3]) // output: '[1, 2, 3]'
```
> 하지만 `method`, `symbol property`, `undefined property`는 `JSON.stringify()`를 호출하면 무시된다.
```js
const person = {
  sayHello() {
    console.log('hello, world')
  },
  [Symbol('username')]: 'woonrin',
  what: undefined
}

console.log(JSON.stringify(person)) // output: {}
```

### JSON.parse()
> `JSON`으로 인코딩이 된 객체를 다시 원래의 객체로 **디코딩** 할 수 있다.
```js
const json = '{ "name": "woonrin", "age": 18, "gender": "male" }'

console.log(JSON.parse(json)) // output: { name: 'woonrin', age: 18, gender: 'male' }
```

#### reviver
```js
let json = '{"title": "Movie", "date": "2023-10-04T11:59:37.859Z"}'

console.log(JSON.parse(json).date.getDate()) // TypeError
```
> 오류가 나는 이유는 `date`의 타입이 `string`이기 때문이다. 이럴 때 두 번째 인자인 `reviver` 즉, `callback`을
> 이용하여 타입에러를 고칠 수 있다.
```js
let json = '{"title": "Movie", "date": "2023-10-04T11:59:37.859Z"}'

const result = JSON.parse(json, (key, value) => {
  if (key === 'date') return new Date(value)
  return value
})

console.log(result.date.getDate()) // output: 4
```
