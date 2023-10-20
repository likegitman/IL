# Timer Method

## setTimeout
> `JavaScript`에서 어떤 실행문을 바로 실행하지 않고 일정 시간이 지난 후 실행해야 하는 경우가 생길 때 사용하는 함수이다.  
> 첫 번째 인자로 실행문을 담고있는 함수 (`callback` || `function`)를 받고 두 번째 인자로 일정 시간을 `ms` 단위로 받는다.

### callback
```js
console.log(1)
console.log(3)
setTimeout(() => console.log(2), 1000)

// output
// 1
// 3
// 2 1초뒤에 실행
```

### function
```js
function add (x, y) {
  console.log(x + y)
}

console.log(1)
console.log(3)
setTimeout(add, 1000, 2, 2)

// output
// 1
// 3
// 4 1초 뒤에 실행
```

## clearTimeout
> `setTimeout`으로 생성한 `timeout`을 취소한다. 인자는 `setTimeout`이 반환하는 `timeoutID`를 인자로 받는다.  
> `timeoutID`는 취소할 `timeout`의 식별자로 취소할 `timeout`을 설정했던 `setTimeout`이 반환한 값과 같아야한다.
```js
const timeoutId = setTimeout(() => console.log(2), 2000)
clearTimeout(timeoutId) // output: undefined
```

## setInterval
> 웹페이지의 특정 부분을 주기적으로 업데이트해 주어야 하거나 어떤 `API`로 부터 변경된 데이터를 주기적으로 받아와야 하는 것처럼  
> **주기적**으로 변경이 생기게 하고 싶을 때 사용하는 함수이다. 어떤 코드를 일정한 시간 간격을 두고 계속 **반복**해서 실행하고   
> 싶을 때 사용하는데 인자로 받는것은 `setTimeout`과 같다.
```js
setInterval(() => console.log(Math.floor(Math.random() * 100)), 1000)

// output:
99
36
8
17
... // 1초마다 랜덤한 값 출력
```

## clearInterval
> `clearTimeout`처럼 `clearInterval`이란 함수를 사용하면 `setInterval`의 주기적으로 실행되는 함수를 중단시킬 수 있다.
```js
const intervalID = setInterval(() => console.log(new Date()), 1000)

clearInterval(intervalID) // output: undefined
```
