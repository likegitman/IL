# Rendering
> React가 컴포넌트에게 props와 state의 조합을 기반으로 UI가 어떻게 생겼으면 좋겠는지 설명하도록  
> 요청하는 프로세스라고 리액트는 묘사한다.  
> `컴포넌트는 주방에서 재료로 요리를 만드는 요리사`  
> `리액트는 고객의 요청을 접수하고 주문을 가져오는 웨이터`  
> 역할을 수행한다

# Rendering Step
### 1. Triggering a render (렌더링이 발생하는 경우)
1. initial render (컴포넌트의 초기 렌더링)  
> 리액트에서는 초기 렌더링이 일어날 때 index에 있는 createRoot함수와 render함수를 통해  
> 이루어지게 된다.

2. Re-renders when state updates (리액트의 상태 변화로 인한 리렌더링)
> 리액트에서는 컴포넌트의 setState함수가 state를 업데이트하면 추가적으로 리렌더링을 시켜준다.  
> 공식문서에서는 레스토랑에서 손님이 첫 주문 후 갈증, 배고픔에 따라 다양한 음식을 주문하는것으로  
> 비유한다.

### 2. Rendering the Component

### 3. Committing to the DOM

