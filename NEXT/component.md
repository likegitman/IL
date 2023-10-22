# Server Component, Client Component

## Server Component
> `NextJS13`에서는 개발자가 `Server Component`와 `Client`컴포넌트를 사용할 수 있다. `app` 경로에서 기본적으로 모든 
> `component`들은 `Server Component`이다. 이 `Server Component`들은 `server`에서 `render`되고 요청되는 `component`들이다.
> 그렇기에 `client` 쪽의 `bundle`에서 `Server Component`들을 찾을 수 없다.

### 특징
#### 1. Server Component들은 onClick과 같은 상호작용성을 포함하지 않는다.
#### 2. fallback과 함수들은 props들로써 전달될 수 없다.
#### 3. Server Component들은 상호작용 하지 않으며 React의 state를 사용하지 않는다.
#### 4. Server Component들은 React의 Life Cycle Hooks들을 사용하지 않는다.

### 목적
> `Server Component`들은 `Client Side Bundle`을 포함하지 않는다. 즉 적은 양의 `Client Side Bundle`을 개발자가
> 전달 할 수 있게 해서 사용자가 적은 `JavaScript` 코드들을 다운로드 하도록 한다. 이렇게하면 `client` 측 코드를 포함하지않기에
> 웹사이트의 초기 로딩 속도와 페이지가 더 빠르게 `rendering`이 될 수 있도록할 수 있다.

## Client Component
> 흔히 브라우저에서 `render`되고 `fetch`되는 `component`들이다. `Client Component`들은 브라우저의 `JavaScript Bundle`을
> 포함하고 있는 일반적인 `React Component`들이다.

### 특징
#### 1. Client Component들은 onClick과 같은 상호작용성을 포함한다.
#### 2. Client Component들을 Client라고 불리는 브라우저에서 Render된다.
#### 3. Client Component들은 NextJS13에서 파일의 상단에 "use client"라고 선언함으로써 Client Component인걸 나타낸다.
#### 4. NextJS13에서 useState, useEffect같은 Hooks들을 사용할 땐 Client Component에서 사용해야한다.

## Server Side Rendering, Server Component
> 둘은 같지 않지만 `Server Component`들은 `Server Side Rendering`과 상호 보완적이다.`Server Component들은` `SSR`처럼
> `HTML` 자체를 반환하진 않지만 `render`된 `UI`에 대한 설명을 반환한다. 이런 방식은 `React`가 상태값을 잃지않고 존재하는
> `Client Component`들과 데이터를 병합하도록 한다.
