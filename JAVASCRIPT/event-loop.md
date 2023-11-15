# Single Thred
스레드에는 싱글 스레드, 멀티 스레드 2가지가 있는데 js는 싱글 스레드이다. 

싱글 스레드란 한 번에 한 가지 작업만 할 수 있는 것을 뜻한다. 하지만 js는 한 번에 여러 개의 작업을 동시에 처리한다.

js는 Run-To-Completion: 하나의 함수의 실행이 끝날 때 까지 다른 작업은 수행되지 않는다라는 특성이 있다.

```js
setTimeout(() => {console.log("learn"}, 0);
while(1) console.log("single");
console.log("thred");
```
위 코드는 2번째 줄 -> 1번째 줄 -> 3번째 줄 의 순으로 실행 되는데 이걸 브라우저에서 실행시키면 2번째 줄만 계속 출력되고

다른 코드는 실행되지 않는다. 이걸 통해 js는 확실하게 싱글 스레드라는 것을 확인할 수 있다.

js는 비동기로 처리해야 해야한다면 자신이 처리하지 않고 WEB API에게 이 작업을 위임한다음 자신은 그 다음 코드를 실행한다.

이때 WEB API에서 처리된 내용은 Callback Queue라는 곳으로 들어가고 Callback Queue는 3갸지로 나뉘게된다.
1. Callback Queue
2. Animation Frames
3. Microtask Queue
빠져나가는 우선순위는 3 2 1 순서이다. 빠져나간다고 했는데 큐에서 요소들이 빠져나갈 수 있는 이유는 이벤트 루프 때문이다.

## Event Loop
이벤트 루프는 js엔진의 **Call Stack** 을 지속적으로 바라보고 있다가 Call Stack이 비면 우선순위에 따라 각각의

Queue들에서 대기중인 요소들을 Call Stack으로 넣어준다. 여기서 js가 싱글 스레드라는 말은 하나의 Call Stack을 가졌다는 말이랑 같다.

이렇게 한다면 여러 동작들을 동시에 처리하는 것처럼 보이게 할 수 있다.
