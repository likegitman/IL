# Redux Keyword

# 1. 액션
> 상태에 어떤 변화가 필요하면 액션이란 것이 발생한다.  
> 액션은 객체로 표현하는데 액션 객체는 type필드를 반드시 가져야하고 이 값이 액션의 이름이다.  
> 그 외의 값들은 상태 업데이트 때 참고해야 할 값들이어서 작성자 마음대로 적을 수 있다.

## 객체 형태
```javascript
{
  type: "ADD_TODO",
  data : {
    id: 1,
    text: "리덕스 배우기"
  }
}

{
  type: "CHANGE_INPUT",
  text: "안녕하세요"
}
```

# 2. 액션 생성 함수
> 액션 객체를 만들어 주는 함수이다.
```javascript
// function
function addTodo(data) {
  return  {
    type: "ADD_TODO",
    data
  };
}

// Arrow function
const changeInput = text => ({
  type: "CHANGE_INPUT",
  text
});
```

# 3. 리듀서
> 변화를 일으키는 함수입니다. 액션을 만들어서 발생시키면  
> 리듀서가 현재 상태와 전달받은 액션 객체를 파라미터로 받아온다.  
> 그리고 두 값을 참고하여 새로운 상태를 만들어서 반환해준다.
```javascript
const initialState = {
  cnt: 1
};
function reducer(state = initialState, action) {
  switch(action.type) {
    case INCREMENT:
      return {
        cnt: state.cnt + 1
      };
    default:
      return state;
  }
}
```

# 4. 스토어
> 프로젝트에 Redux를 적용하기 위해 스토어를 만든다.  
> 한 개의 프로젝트는 단 하나의 스토어만 가질 수 있고  
> 스토어 안에는 현재 애플리케이션 상태와 리듀서가 들어가 있으며  
> 그 외에도 몇 가지 중요한 내장 함수를 지닌다.

# 5. 디스패치
> 디스패치는 스토어의 내장 함수 중 하나이다. 디스패치는 `액션을 발생시키는 것`  
> 형태는 dispatch(action)로 액션 객체를 파라미터로 넣어서 호출한다.

# 6. 구독
> 스토어의 내장 함수 중 하나이다. subscribe 함수 안에  
> listener 함수를 파라미터로 넣어서 호출해 주면, listener 함수가 action이 dispatch되어  
> 상태가 업데이트 될 때마다 호출된다. 
