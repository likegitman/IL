# Babel
Babel은 최신버전의 js 코드를 상대적으로 구식 브라우저인 IE 등의 호나경에서 호환되도록 버전을 변환하는 데 주로 사용되는

js transcompiler이다. 당연히 최신 버전 js 코드를 구식 브라우저와 호환되게 해주는건 좋은 것이지만 몇 가지 문제점들이 있다.

Babel은 코드를 변환할 때 코드의 구문을 변경한다. 그래서 개발자들이 배포 뒤 변경된 코드를 이해하기 어려울 수 있고 코드 크기도 증가한다.

polyfill을 이용해 일부 지원해주지 않는 부분을 설정해야한다. 심지어 Babel의 컴파일 시간은 다른 컴파일러보다 훨씬 길기도 하다.

Next.js 12 versiton부터 이런 Babel의 단점들을 개선하기 위해 SWC라는 compiler를 사용해 babel의 문제점을 개선했다.

# SWC
Rust로 작성되어 Babel 보다 훨씬 컴파일 속도가 빠르고 다른 설정없이 Next.js에 미리 설치된 SWC를 사용할 수 있다.

## 적용
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
}

module.exports = nextConfig
```

