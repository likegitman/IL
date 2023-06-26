# Web Storage
> HTML5에는 웹의 데이터를 클라이언트에 저장할 수 있는 새로운 자료구조인 Web Storage 스펙이 포함되어있다.  
> Web Storage의 개념은 `key / value`의 쌍으로 데이터를 저장하고 키를 기반으로 데이터를 조회하는 식으로 되어있다.  
> 그리고 LocalStorage와 SessionStorage를 따로 두어 데이터의 __지속성__ 을 구분할 수 있어서 응용 환경에 맞는  
> 선택이 가능하다. 

## LocalStorage
> 저장한 데이터를 명시적으로 지우지 않는 이상 Web Storage에 영구적인 저장이 가능하다. 이 말은 브라우저를 꺼도  
> 데이터가 저장된다는 뜻이다. 도메인마다 별도로 localStorage가 생성되고 Windows 전역 객체의 LocalStorage라는  
> collection을 통해 저장과 조화가 이루어진다.

## SessionStorage
> 데이터의 지속성과 access 범위에 특수한 제한이 존재한다. localStorage와 마찬가지로 도메인별로 sessonStorage가 생성되지만  
> 현재 페이지가 브라우징되고 있는 브라우저 컨텍스트 내에서만 데이터가 유지된다. 이 말은 브라우저를 끄면 SessionStorage도  
> 사라진다는 것을 의미한다. Windows전역 객체의 SessionStorage라는 collection을 통해 저정과 조화가 이루어진다. 
