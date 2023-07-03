# Store
> 앱의 전체 상태 트리를 가지고 있다. store안의 상태를 바꾸는 방법은 이 store에 action을 보내는 방법뿐이다.  
> store는 class가 아니고 몇가지 메서드가 들어있는 객체이다. store를 생성하기 위해서는 root reducer함수를  
> createStore에 전달하면 된다.

## Method
### 1. getState()
> Application의 현재 상태 트리를 반환한다. store의 reducer가 마지막으로 반환한 값과 동일하다.  

### 2. dispatch
> action을 보낸다. 이 dispatch가 action을 보내기 때문에 store의 상태 변경을 일으키기 위한 유일한 방법이다.
> store의 reducer 함수는 getState()의 현재 결과와 주어진 action과 함께 동기적으로 호출이 된다. 반환된 값이  
> 다음 상태가 되어 이제부터 getState() 에서 반환될 것이고 상태 변경 listener들은 즉시 알림을 받을것이다.

#### 전달인자 : action
> action 앱의 변경사항을 기술하는 평범한 객체이다. action은 store로 데이터를 보내는 유일한 방법이기 때문에 UI이벤트나  
> 네트워크 callback, 웹소켓 등 다른 어떤 source에서 오는 데이터든 간에 action을 통해 보내져야한다. action은 반드시  
> 어떤 형태의 action이 행해질지 지시하는 type 필드를 가져야하는데 type에는 Symbols 보다는 문자열을 사용하는 편이 직렬화가  
> 가능하기 때문에 더 낫다. type외에 액션 객체의 구조는 우리가 정할 수 있다.

### 3. subscribe(listener)
> 변경사항에 대한 listener를 추가한다. listener는 action이 보내져서 상태 트리의 일부가 변경될 수 있을 때마다 호출된다.  
> callback 안에서 현재 상태 트리를 읽으려면 `getState()`를 호출하면 된다.

#### 전달인자 : listener
> action이 보내져서 상태 트리가 바뀔게 될 때마다 호출할 callback이다. 현재 상태 트리를 읽기 위해 callback 내에서  
> `getState()`를 호출할 수 있다. store의 reducer는 순수한 함수일 것이므로 상태 트리의 값이 변경되었는지 확인하기 위해  
> 
