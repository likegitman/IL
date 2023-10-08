# Tailwind CSS
> `Utility-First`를 지향하는 `CSS` 프레임워크이다. `Utility-First`란 미리 세팅된 `Utility Class`를 활용해
> `HTML`코드 내에서 스타일링하는 것을 뜻한다. `CSS`의 각 속성들을 `class`에 직관적으로 표현함으로써 효율적으로
> 사용할 수 있다. 스타일링에 필요한 대부분의 속성들이 `class` 형태로 사전에 정의되어 있고 개발자는 `class`들을
> 조합하여 사용한다.

## Example
### no tailwind
```html
<div class="chat-notification">
  <div class="chat-notification-logo-wrapper">
    <img class="chat-notification-logo" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div class="chat-notification-content">
    <h4 class="chat-notification-title">ChitChat</h4>
    <p class="chat-notification-message">You have a new message!</p>
  </div>
</div>

<style>
  .chat-notification {
    display: flex;
    max-width: 24rem;
    margin: 0 auto;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  .chat-notification-logo-wrapper {
    flex-shrink: 0;
  }
  .chat-notification-logo {
    height: 3rem;
    width: 3rem;
  }
  .chat-notification-content {
    margin-left: 1.5rem;
    padding-top: 0.25rem;
  }
  .chat-notification-title {
    color: #1a202c;
    font-size: 1.25rem;
    line-height: 1.25;
  }
  .chat-notification-message {
    color: #718096;
    font-size: 1rem;
    line-height: 1.5;
  }
</style>
```

### tailwind
```html
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>
```

## 장점
> 매번 `class`의 이름을 고민하지 않아도 되고 복잡한 반응형 디자인도 쉽게 구현할 수 있고 반복되는 `style`은  
> `component` 추상화, `class` 추상화를 통해서 재사용이 가능하다. 또 공식문서 업데이트가 잘 되고 난이도가 높지않다.  

## 단점
> 직관성은 좋을 수 있으나 필요한 정보를 쉽게 찾을 수 있는 가시성은 떨어질 수 있다. 또 미리 정의된 `style sheet`가  
> 용량이 매우크고 정의한 `class`가 출현한 빈도, 순서에 상관없이 정의한 순서에 따라 `style`을 구성해 우선순위의
> 문제가 생긴다.

## Setting

### Install
```
npm install -D tailwindcss
npx tailwindcss init
```

### Configure template

#### tailwind.config.js
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Add the Tailwind directives to main CSS

#### index.css
```css
@tailwind base;
@tailwind components
@tailwind utilities
```

### Tailwind CLI Build
`npx tailwindcss -i ./src/index.css -o ./dist/ouput.css --watch`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv-"X-UA-Compatible" content="IE-edge" />
    <meta name="viewport" content="width=device-width,, initial-scale=1.0" />
    <link href="/dist/output.css" rel="stylesheet" />
    <title>Document</title>
  </head>
  <body>
    <h1 class="text-3xl font-bold underline">Hello World!</h1>
  </body>
</html>
```
