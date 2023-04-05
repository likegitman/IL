# DOM
* Document Object Model의 약자
> 객체로 문서 구조를 표현하는 방법으로 XML이나 HTML로 작성하고
  웹브라우저는 DOM을 활용하여 CSS, JS를 적용한다.
  
# Virtual DOM
* React에서 사용하는 것으로 실제 DOM으로 접근하는 게 아닌 추상화한 JS객체를 구성하여 사용한다.
1. 데이터를 업데이트하면 UI를 Virtual DOM에 리렌더링.
2. 이전 Virtual DOM에 있던 내용과 현재 내용을 비교.
3. Virtual DOM과 실제 DOM을 비교하여 바뀐 부분만 실제 DOM에 적용.
