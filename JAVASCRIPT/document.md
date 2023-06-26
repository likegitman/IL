# Document
> DOM트리의 최상위 객체이고 브라우저는 HTML 문서를 로드하기 전에 document 객체를 먼저 만든다.
> 그리고 document 객체를 뿌리로 하는 DOM 트리를 만든다.

## propperty
### Example
* title
* body
* head
* URL
* location
* referrer

## method
### Example
* createElement()
지정된 HTML 요소를 생성한다.
* getElementById()  
아이디 명으로 첫 번재 DOM 객체를 리턴한다.
* getElementsByTagName()  
특정 태그명을 가진 모든 태그를 컬렉션 형태로 리턴한다.
* getElementBytClassName()  
특정 클래스명을 가진 모든 태그를 컬렉션 형태로 리턴한다.
* write()
* writelen()  
document에 HTML 콘텐츠를 삽입하고 ln이 붙으면 write()후 `\n`을 추가 출력한다는 의미이다.
