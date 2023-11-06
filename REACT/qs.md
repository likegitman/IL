# qs
이름이 qs인 것처럼 query string과 관련된 라이브러리인데 query string은 데이터를 필터링(검색) 할 때 많이 사용한다.

qs 라이브러리는 API url에 query string의 값을 전달하거나 history를 관리할 때 그 query string을 파싱하거나

문자열로 변환시킬 수 있는 유용한 라이브러리이다. 근데 보통 query string은 간단하다고 생각하여서 왜 사용하는지

의문이 생기는데 그 이유는 query string은 `?key=value&key2=value2`의 식이다. 그런데 이 key value 값의 쌍이

많아지거나 단순한 문자열이 아니라 특수 문자 등이 들어간다면 인코딩과 디코딩도 신경써야하는 상황이 발생한다.

또, query string은 다른 key가 아닌 동일한 key에 여러 개의 값을 할당하는 것이 되는데 말로는 별거 아닌 것 같지만

하나라도 구분하는데에 실수가 발생한다면 오류로 쉽게 이어지게 된다. 

## Install

### npm
`npm install qs`

### yarn
`yarn add qs`

## String -> Object
query string은 key와 value로 이루어져 있기 때문에 object로 변환하는 것이 가능한데 qs를 사용하지 않을 때에는

`URLSearchParams`을 사용하거나 여러 js 내장 method들을 사용해 변환시킬 수 있다. 하지만 과정이 꽤 복잡할 수 있는데

qs를 사용하면 편리하게 query string을 object로 변환할 수 있다. 사용법은 JSON을 사용할 때와 비슷하다.

```js
cosnt obj = qs.parse("example=apple&example2=true&example3=5&example3=6&example3=7")
console.log(obj)

// output
// {
//  example: "apple",
//  example2: "true",
//  example3: ["5", "6", "7"]
// }
```

## Object -> String
객체로 변환할 때에는 JSON.parse처럼 parse를 사용했으니 반대로 객체를 문자열로 변환하려면 stringify를 사용하면 된다.

```js
const str = qs.stringify({
  example: "apple",
  example2: "true",
  example3: ["5", "6", "7"]
})

console.log(str)

// output: "example=apple&example2=true&example3%5B0%5D=5&example3%5B1%5D=6&example3%5B2%5D=7"
```
example3를 제외한 부분들은 전과 똑같이 생겼지만 배열 query string인 example3는 값이 이전과 다르게 되었다.

이유는 qs가 배열 형태는 `파라미터형[인덱스]=값`의 형태로 변환하기 때문인데 이를 막고 싶다면arrayFormat를 사용해야한다.

```js
const str = qs.stringify({
    example: "apple",
    example2: "true",
    example3: ["5", "6", "7"]
  },
  { arrayFormat: "repeat" }
)

console.log(str)

// output: example=apple&example2=true&example3=5&example3=6&example3=7
```

### 주의
보통은 객체의 이름에 ?가 포함되는 것을 원하지 않는다. 하지만 qs.parse는 기본적으로 인자로 받은 query string에 

? 가 있다면 제거해주지 않고 그대로 key의 이름으로 변환된다.

```js
cosnt obj = qs.parse("?example=apple&example2=true&example3=5&example3=6&example3=7")
console.log(obj)

// output
// {
//  "?example": "apple",
//  example2: "true",
//  example3: ["5", "6", "7"]
// }
```
query-string이라는 라이브러리를 쓰면 해결되기도 하지만 ignoreQueryPrefix를 설정해도 이 문제를 막을 수 있다.

```js
cosnt obj = qs.parse("?example=apple&example2=true&example3=5&example3=6&example3=7", {
  ignoreQueryPrefix: true
})

console.log(obj)

// output
// {
//  example: "apple",
//  example2: "true",
//  example3: ["5", "6", "7"]
// }
```
