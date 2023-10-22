# UUID
> Universally Unique IDentifier 범용 고유 식별자의 약자이다. 중앙관리식으로 유일성을 보장하는 방식이 아니다.  
> 32개의 16진수로 표시되고 `8-4-4-4-12`개의 그룹으로 구분된다.  
`550e8400-e29b-41d4-a716-446655440000`  
> 고유한 아이디 값을 생성할 때 사용할 수 있는 표준이고 특히 컴포넌트에고유한 key를 요구하는 React에서 유용하게
> 사용할 수 있다. 사용하는 모듈로는 `react-uuid`가 있는데 이 모듈을 이용해 UUID를 생성하는 함수를 제공한다.

## Install

### npm
`npm install uuid`

### yarn
`yarn add uuid`

## Example
```js
import { v4 as uuidv4 } from "react-uuid";

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

# ULID
> 대소문자를 구분하지않는 시간을 나타내는 26자 글자와 16글자의 임으의 값으로 구성되어있다.  
`01ARZ3NDEKTSV4RRFFQ69G5FAV`  
> `ULID`는 생성 순서를 `ms` 단위로 기록할 수 있어서 생성 순서대로 정렬할 때 유용하다. `UUID`는 `timestamp` 없이
> 무작위의 값을 생성하여 이벤트 발생 시간추적이 어렵고 정렬도 힘들 수 있다. 하지만 `database key`같이 고유성을
> 고려하는 경우엔 `timestamp`가 없는 `UUID`가 더 좋을 수도 있다. 그래도 `ULID`는 `UUID`의 이러한 단점을 극복하고자
> 만들어진 것이기에 `UUID`보다 나은성능을 보여주기는한다. `ULID`는 충돌가능성이 있는데 `monotonic option`을 사용해
> 충돌을 피하게 할 수 있다.
```js
import { monotonicFactory } from 'ulid'

const ulid = monotonicFactory()

// Assume that these calls occur within the same millisecond
ulid() // 01BX5ZZKBKACTAV9WEVGEMMVRZ
ulid() // 01BX5ZZKBKACTAV9WEVGEMMVS0
```
