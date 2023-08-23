# Closure
> **함수**와 함수가 선언된 어휘적 환경의 조합이다. `Javascript`만의 개념이 아닌 함수형 프로그래밍 언어들에서  
> 많이 사용되는 중요한 특성이다. 위에서 표시된 함수란 내부함수를 뜻하고 그 함수가 선언될 때의  
> `렉시컬 환경(코드가 작성, 선언된 환경)`은 내부 함수가 선언됐을 때의 `scope`이다.  
> `closure`란 반환된 내부함수가 자신이 선언됏을 때의 환경인 `scope`를 기억하여  
> 선언됐을 때의 환경 밖에서 호출되어도 그 환경에 접근할 수 있는 함수를 뜻한다.  
**한마디로 자신이 생성(선언)됐을 때의 환경(scope)을 기억하는 함수라고 할 수 있다.**

## 사용 이유
### 1. 전역변수 사용을 줄일 수 있다.
> 전역변수는 예상치 못한 `Side Effect`를 일으킬 수 있기 때문에 줄이는게 코드적으로 좋다.
> 하지만 함수에 전역변수를 사용할 상황이 생기는데 이럴 때 유용하게 사용할 수 있다.

#### Closure 사용 전
```js
const btn = document.querySelector('button');
btn.addEventListener('click',handleClick);

let count = 0;
function handleCilck(){
  count++;
  return count;
}
```

#### Closure 사용 후
```js
const btn = document.querySelector('button');
btn.addEventListener('click',handleClick);

function handleCilck(){
  let count = 0;
  return function() {
    count++;
    return count;
  }
}
```

### 2.코드의 재사용성을 높인다.
```js
const order = (food) => {
  console.log(food + "을(를) 주문하셨습니다.");
  return function (drink) {
    return drink + "을(를) 추가로 주문하셨습니다."
  }
} 

const orderBurger = order("햄버거");
const orderPizza = order("피자");
console.log(orderBurger("콜라"));
console.log(orderPizza("사이다"));
```

