# Portal
> 부모 컴포넌트의 DOM 계층 구조 바깥에 있는 DOM 노드로 자식을 렌더링하는 최고의 방법을 제공한다.  
> 외부에 존재하는 DOM노드가 React App DOM 계층 안에 존재한느 것처럼 연결을 해주는 기능을 제공하고  
> 이 말은 컴포넌트들의 상하관계 구조를 가지고 있는 DOM 상에서 자식 컴포넌트를 부모 컴포넌트의 바깥에 있는  
> 다른 컴포넌트에 전달할 수 있다라고 말할 수 있다.


## Portal의 사용이유

### 1. 독립적인 구조와 함께 부모 자식 관계 유지
React는 기본적으로 부모 컴포넌트가 렌더링 되면 자식 컴포넌트도 같이 렌더링이된다. 이러면 렌더링이 될 필요가 없어도  
자식 컴포넌트가 렌더링이 일어날 수 있고 부모 컴포넌트의 스타일링에 제약을 받아 z-index같은 후처리를 해야하는 수고가 발생한다.  
이럴 때 Portal을 사용해 독립적인 구조와 부모와 자식의 관계를 동시에 유지할 수 있기 때문에 Portal을 사용한다.

### 2. Modal
만약 Modal을 사용한다 했을 때 Modal이 독립적인 컴포넌트가 아니고 부모의 DOM노드 안에서 렌더링이 되는 것은 Modal의 의미나  
간결한 HTML구조를 가졌는지의 관점으로 보면 좋지 않다. Modal이란 페이지 위에 OverLay이다. 그래서 전체 페이지에 대한 OverLay이기  
때문에 모든것에 위에 있는것인데 Modal이 다른 HTML코드안에 중첨되어 있다면 기술적으로 스타일링 덕분에 작동할지는 몰라도  
좋은 코드가 아니고 좋은구조도 아니게 된다. 그래서 React에서 OverLay내용이 있는 Modal이 깊게 중첨되면 안 되는  
문제를 해결할 수 있는 방법이 Portal이다.

## Portal을 사용할 때
> 보통 React를 설치할 때 생기는 index.html파일의 `<div id="root"></div>`외에 다른 root에  
> Modal이나 Dialog, Tooltip 을 띄우기 위해 사용된다.

## Use

### Modal이 렌더링 될 위치를 index.html파일에서 지정해준다.
```html
<body>
  <div id="root">...</div>
  <div id="modal"></div>
</body>
```

### Potal을 해줄 파일을 만들고 div와 연결시킨 뒤 createPortal을 사용한다.

```javascript
import ReactDom from "react-dom";

function ModalPortal({children}) {
  const el = document.getElementById("modal");
  return ReactDom.createPortal(children, el);
}

export default ModalPortal;
```

#### ReactDom.createPortal
> 첫 번째 인자는 element, 문자열, fragment같은 렌더링 할 수 있는 React의 자식이 들어간다.  
> 두 번째 인자는 DOM element가 들어가는데 Portal의 목적지를 뜻한다. children에 넣은 컴포넌트는 렌더링 될 때  
> 두 번째 인자에 넣어놓은 컴포넌트에서 렌더링이 일어나게된다.

### Modal컴포넌트가 있는 파일에 Portal을 연결시켜주기

```javascript
import ModalPortal from "../portals/ModalPortal";

function SuccessModal() {
  return (
    <ModalPortal>
      ...
    </ModalPortal>
  );
}
```
