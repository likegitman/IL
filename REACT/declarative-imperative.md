# 선언형 프로그래밍
> 프로그램이 어떤 방법으로 해야하는지를 나타내기보다는 무엇과 같은지를 설명하는 형식

## Example
> filter, map, reduce method가 어떤 로직으로 구현되는지 알 필요가 없고 이미 method안에 로직이  
> 서술되어 있기에 구체적인 코드는 신경쓰지않고 추상화된 method를 사용하고 싶을 때 선언하여 사용한다.
```javascript
const numbers = [1, 2, 3, 4, 5];
let sum;

sum = numbers
  .filter((i) => i % 2)
  .map((i) => i * 2)
  .reduce((acc, next) => acc + next);

console.log(sum); // output: 18
```

# 명령형 프로그래밍
> 프로그래밍의 상태와 상태를 변경시키는 구문의 관점에서 연산을 설명하는 프로그래밍 패러다임의 일종이다.  

## Example
> 결과물을 얻기 위한 과정에 집중한다. 그래서 위의 선언형 코드와 다르게 배열의 index나 숫자가  
> 어떻게 반복되고 계산되는지 로직을 직접 구현한다.
```javascript
const numbers = [1, 2, 3, 4, 5];
let sum;

sum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (i % 2 == 0) {
    sum += numbers[i] * 2;
  }
}

console.log(sum); // output: 18
```

# 리액트가 선언형 프로그래밍인 이유
> JSX자체가 선언형은 아니지만 JSX의 캡슐화를 통해 선언형 코드를 작성할 수 있다.  
> 리액트의 컴포넌트를 나타내는 방식이 이에 해당하는데, 아래 코드처럼 리액트는 JSX로 작성된 코드를 캡슐화하여 작성한다.  
> 자세한 코드는 들어가서 봐야되지만 _추상적_으로 어떻게 화면에 컴포넌트가 띄워질지 알기 때문에  
> 리액트는 선언형 프로그래밍이라고 할 수 있다.
```javascript
import NavBar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <Navbar />
    <Main />
  );
}
```
