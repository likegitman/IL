# Dependency
의존성이란 의존 관계를 설명하는 용어이다. A 컴포넌트가 동작하기 위해 B 컴포넌트가 필요하다면

_A 컴포넌트는 B 컴포넌트에 의존한다._라고 표현한다.
```jsx
functinon ComponentA() {
  return (
    // ...
    <ComponentB>...</ComponentB>
    // ...
  )
}
```
의존성은 결합도와 동일한 의미로 사용되기도 하는데 위 코드를 다르게 말하면

_ComponentA와 ComponentB는 결함되어있다._라고도 설명할 수 있다. 하지만 의존성과 결합도는

코드의 서로 다른 특징을 설명하기도 한다. 의존성은 두 대상 사이의 의존성의 존재를 설명할 때,

결합도는 두 대상이 서로 의존하는 정도를 설명한다. 그래서 의존성은 _의존성이 존재한다_고 말하고

결합도는 _결합도가 강하다_와 같이 사용된다.

의존성을 잘 관리하지 않으면 수정하기 어려운 코드를 만들게 된다. 코드를 금방 수정할 줄 알고

들여다보면 여러 파일을 왔다 갔다하며 수정하고 있다면 의존성 관리가 잘 안 되어서 그럴 수 있다.

의존성은 관계와 변경을 의미하기 때문인데 ComponentA가 의존하는 ComponentB를 수정하면 ComponentA는

수정 가능성에 노출된다. 즉 의존성의 존재가 서로를 변경에 노출하는 것이다.

## 변수 의존성
프론트엔드를 개발하면서 가장 신경쓰려고 하는 의존성은 변수와 관련된 의존성이다. 왜냐하면 함수와 달리

변수는 정의하고 쉽게 사용하기 때문이다. 변수 때문에 생기는 오류는 생각보다 많다.

특히 함수를 여러군데에서 사용해 발생하는 문제인 경우가 많은데 예상치 못한 값이 들어있어서 사용 시

오류가 발생하거나 변수명이 적절치않아서 변수명을 수정하고 수정하지 않은 부분이 있어서 코드가

작동하지 않거나, 이런 변수를 다루면서 생기는 오류들이 있다. 변수의 역할은 다양하다. 그 중에서

프론트엔드에서 가장 많이 사용하는 역할 중 하나는 **최근값 보유자**이다. 사용자 액션이 발생하면

일련의 과정을 거쳐 담아둘 값으로 만든 다음 변수에 할당한다. 그리고 변수에 담긴 값을 과정을 거쳐서 화면에 출력한다. 
```js
$input.addEventListener("change", (e) => {
  const discount = 0.1;

  const price = Number(e.target.value); // 사용자가 행동한 결과를 변수에 저장
  const discounted = price * (1 - discount); // 변수에 담긴 최근값을 사용하여 출력한 값을 계산

  const $result = document.querySelector("#result");

  $result.textContent = `${discounted}원`; // 값을 처리(할인가 뒤에 원을 붙임)하여 출력
})
```
간단한 예제이지만 말하고자 하는 변수의 역할을 잘 설명했다. 사용자로부터 가격을 입력받고 그 결과를 숫자로 형변환하여

처리한 후에 변수에 담는다. 그리고 변수에 담은 값을 HTML을 통해 화면에 출력하는 과정을 갖고있다. 이런 로직은

단순하기에 변수에 의존성이 있더라도 문제가 생기지 않는다. 하지만 의존성이 늘어나기 시작하면 점점 관리하기 어려워진다.

```js
let discount = 0.1;
let price = 1000;

$discountInput.addEventListener("change", (e) => {
  // 할인율 변경 이벤트
  discount = Number(e.target.value) / 100;
  const $result = document.querySelector("#result");

  $result.textContent = `${discounted}원`;
});

$priceInput.addEventListener("change", (e) => {
  // 가격 변경 이벤트
  price = Number(e.target.value);
  const discounted = price * (1 - discount);

  const $result = document.querySelector("#result");

  $result.textContent = `${discounted}원`;
});
```
이 코드에서는 이전 코드와 다르게 discount, price라는 변수가 이벤트 리스너 밖으로 빠져나왔고 이 두 변수에 의존하는

이벤트 리스너가 늘어났다. 이말은 price의 값이 어떻게 결정되고 어떻게 사용되는지 알아보기 위해서 살펴야하는 반경이

넓어졌다는 것을 의미한다. 예를 들어 변수명 price를 regularPrice라는 이름으로 변경하는 간단한 작업을 한다했을 때

이전에는 가격을 변경하는 이벤트 리스너만 봐도 상관없었지만 한인율을 변경하는 이벤트 리스너에 사용되는 price도

신경써야 되는 등 살펴보아야할 범위가 넓어졌다. 또는 price에 값을 할당할 때 Number로 형변환을 하는지 아니면

문자열 그대로 넘기는지 주의 깊게 살펴보아야한다. price가 숫자일 수도 있고 문자열일 수도 있다면 price 변수를

사용하는 모든 곳에서 숫자 및 문자열 등 모든 가능성에 대비해야하기 때문이다. 또 문제는 여기서 끝나지 않는데

만약 화면에 노출하는 경우도 다양해진다는 변수에 의존하는 로직이 더 늘어나면서 문제는 더 심각해진다. 

```js
$discountInput.addEventListener("change", (e) => {
  // 할인율 변경 이벤트
  ...

  // 숫자 그리고 문자열 모두 사용해도 되는지 잘 살펴봐야한다.
  // 코드 라인수가 길다면 이런 단순한 작업도 더 이상 단순하지 않다.
  $result.textContent = `${discounted}원`;
  $discount.textContent = `${discount * 100}%`;
});

$priceInput.addEventListener("change", (e) => {
  // 가격 변경 이벤트
  ...

  $result.textContent = `${discounted}원`;
  $price.textContent = `${price}원`;
});
```
이런 문제가 발생하는 이유는 변수에 접근할 수 있는 범위가 넓어졌기 때문이다. 이전엔 하나의 이벤트 리스너에서 변수에

이젠 두 리스너에서 접근하고 있다. 그리고 다른 함수, 변수, 리스너와 의존성이 발생할 가능성이 생기게 되었다.

이런 의존성 문제는 변수에 접근할 수 있는 범위, 즉 스코프를 제한하여 일정 부분 해소할 수 있다. 

```js
(() => {
  let discount = 0.1;
  let price = 1000;

  const setDiscount = (value) => {
    discount = Number(value) / 100;
  };

  const setPrice = (value) => {
    price = Number(value);
  };

  $discountInput.addEventListener("change", (e) => {
    setDiscount(e.target.value);
    const discounted = price * (1 - discount);

    const $result = document.querySelector("#result");

    $result.textContent = `${discounted}원`;
  });

  $priceInput.addEventListener('change', (event) => {
        // 가격 변경 이벤트
        setPrice(event.target.value);
        const discounted = price * (1 - discount);
  
        const $result = document.querySelector('#result');
  
        $result.textContent = `${discounted}원`;
    });
})();
```
위 코드는 즉시 실행함수인데 이렇게 discoutn와 price의 사용 범위를 감싸면 즉시 실행 함수 외부에서는 discount와

price에 접근하는 걸 제한할 수 있고 수정이 발생할 때 살펴보아야하는 범위도 제한할 수 있다. 또한 setDiscount 그리고

setPrice처럼 변수에 값을 할당하는 방법을 제한함으로써 값을 사용하는 곳에서 예상 가능한 값을 사용할 수 있게된다.

이 vanila js 코드를 react 코드로 바꾸게 되면 이렇게 된다.
```jsx
function Component() {
  const [price, setPrice] = useState(10000);
  const [discount, setDiscount] = useState(0.1);

  return (
    <>
      <input onChange={(e) => setPrice(Number(e.target.value))}/>
      <input onChange={(e) => setDiscount(Number(e.target.value) / 100)} />
      <p>할인된 가격: {price * (1 - discount)}원</p>
    </>
  )
}
```
생각보다 코드가 vanila js보다 간단해 의존성 관리 필요성을 느끼지 못할 수도 있지만 다른 함수나 변수들이 discount와

price와 의존 관계가 발생할 수 있기 때문에 변수의 스코프를 미리 제한하는 게 의존성 관리에 도움이 될 수 있다.

```jsx
const usePrice = (initialValue) => {
  const [price, setPriceAction] = useState(initialValue);
  const setPrice = (value) => {
    setPrice(Number(value));
  };

  return [price, setPrice];
};

const useDiscount = (...) => {...};

function PriceAndDiscount() {
  const [price, setPrice] = usePrice(10000);
  const [discount, setDiscount] = useDiscount(0.1);
  
  return (
    <>
      <input onChange={(e) => setPrice(e.target.value)} />
      <input onChange={(e) => setDiscount(e.target.value)} />
      <p>할인된 가격: {price * (1 - discount)}원</p>
    </>
  );
}

function Component() {
  return (
    <>
      <PriceAndDiscount />
      ...
    </>
  );
}
```

