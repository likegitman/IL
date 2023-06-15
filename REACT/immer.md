# immer
> React에서 불변성을 유지하느라 복잡해진 코드를 짧고 간결하게 작성할 수 있도록 도와주는 라이브러리이다.

# 불변성
> 리액트에서는 배열이나 객체를 업데이트 해야할 때 직접 추가, 수정, 삭제 등을 하면 안 되고 불변성을 지켜주며 업데이트를 해야한다.  
```js
const profile = {
  name :  "woonrin",
  age : 17,
};

profile.age = 18;
```
> 이런 식이 아니라 아래 코드처럼 스프레드 연산자 (`...`) 등을 사용해 새로운 배열이나 객체를 만들어야 한다.
```js
const profile = {
  name :  "woonrin",
  age : 17,
};

const newProfile = {
  ...profile,
  age : 18,
};
```
> 여기서 불변성이란 기존의 상태 값을 유지하면서 새로운 상태 값을 추가하는 것을 의미한다.  
> React는 얕은 비교를 하여 새로운 값인지 아닌지를 판단하고 새로운 값이라고 판단하면 컴포넌트가 렌더링된다.
> 예를들어 어떤 배열 state에 `push`를 사용하여 배열을 바꾼다면 React에서는 해당 배열 state가 __새로운 참조값__ 으로 바뀐것이 아니기 때문에  
> push 이전과 이후의 state값이 같다고 판단하여 렌더링하지 않는다. state값을 변경하고 React에게 리렌더링을 원한다고 알리면  
> 새로운 배열을 생성해서 새로운 참조값을 생성하고 그 안에 기존의 값을 넣어줘야한다.

# Example
```js
const initialState = {
  users: [
    {
      id: 1,
      name: 'woonrin',
      action: true
    },
    {
      id: 2,
      name: 'minsu',
      action: false
    },
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case CREATE_USER:
      return produce(state, draft => {
        draft.users.push(action.user);
      });
    case TOGGLE_USER:
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.action = !user.action;
      });
    case REMOVE_USER:
      return produce(state, draft => {
        const index = draft.users.findIndex(user => user.id === action.id);
        draft.users.splice(index, 1);
      });
    default:
      return state;
  }
```
> produce 함수는 immer라이브러리에 내장되어있는 함수인데 첫 번째 파라미터로 수정하고 싶은 상태를 넣고  
> 두 번째 파라미터로는 어떻게 업데이트하고 싶을지 정의하는 함수를 넣어준다. 두 번째로 넣는 함수에서는 불변성에 대해  
> 신경쓰지않고 `push`나 `splice`같은 함수를 사용해도 된다.
