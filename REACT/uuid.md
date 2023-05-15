# UUID
> Universally Unique IDentifier 범용 고유 식별자의 약자이다. 고유한 아이디 값을 생성할 때  
> 사용할 수 있는 표준이고 특히 컴포넌트에 고유한 key를 요구하는 React에서 유용하게 사용할 수 있다.  
> 사용하는 모듈로는 `react-uuid`가 있는데 이 모듈을 이용해 UUID를 생성하는 함수를 제공한다.

# Example
> 꼭 map에서만 쓸 수 있는 것은 아니고 간단한 예제이다.
```
import uuid from "react-uuid";

function Foods({array}) {
  return (
    <h2>Foods</h2>
    <ul>
      {array.map((item)=>(
        <li key={uuid()}>{item}</li>
      ))}
    </ul>
  );
}
```
