# Atomic Design Pattern
> 화학적 관점에서 영감을 얻은 디자인 시스템이다. `atom(원자)`으로 이루어져 있고 `atom`들이
> 결합하여 `molecule(분자)`가 되고 `molecule`는 더 복잡한 `organism(유기체)`로 결합하여 궁극적으로
> 모든 물질을 생성한다. 이것이 화학적 관점이라면 아토믹 디자인에서는 이 내용을 기반으로 컴포넌트를
> 아래와 같이 5가지 단계로 나눈다.
![image](https://github.com/likegitman/TIL/assets/105215297/8fcd5e37-0cff-4f99-8bb8-3c4efb5a554b)

## Atom
> 더 이상 분해할 수 없는 기본 컴포넌트이다. `button`, `input` 등이 있고 기본 HTML 요소와
> 태그, 글꼴, 애니메이션, 컬러 팔레트, 레이아웃과 같이 추상적인 요소도 포함될 수 있다.
> `atom`은 모든 기본 스타일을 한눈에 보여주므로 디자인 시스템을 개발할 때 유용하게 사용된다.
> 또한 추상적인 개념도 표현할 수 있다. 이것을 단일 컴포넌트로 사용하기에는 어려운 경우가 있는데
> 레이아웃과 같이 `atom`그 자체로는 실제 페이지에서 바로 사용하기에는 유용하지 않기도하다.
![image](https://github.com/likegitman/TIL/assets/105215297/bcd26c80-3db5-4700-ac6c-25c04248f816)

## Molecule
> 여러개의 atom을 결합하여 자신의 고유한 특성을 가진다. `atom`들을 결합할 경우에 `buttton`과 `input`
> `atom`을 결합하여 `form molecule`을 만들 수 있다. `molecule`의 중요한 점은 한 가지 일을 하는 것이다.
> `SRP`원칙으로 인하여 키워드 전송 기능이 필요한 곳에서 재사용될 수 있다. `molecule`의 `SRP`는 재사용성과
> UI에서의 일관성 및 테스트하기 쉬운 조건이라는 이점을 가진다.
> ![image](https://github.com/likegitman/TIL/assets/105215297/f7d9ba3d-64de-4671-8fdb-e05989a1cbe1)

## Organism
> `molecule`보다 좀 더 복잡하고 서비스에서 표현될 수 있는 명확한 영역과 특정 `context`를 가진다.
> `organism`은 `atom`, `molecule`, `organism`으로 구성될 수 있다. header라는 context에는
> `logo(atom)`, `navigation(molecule)`, `form(molecule)`을 포함할 수 있다. `atom`과 `molecule`에 비해
> 좀 더 구체적으로 표현되고 `context`를 가지기 때문에 상대적으로 재사용성이 낮다는 특징이 있다.
> ![image](https://github.com/likegitman/TIL/assets/105215297/d04a0a99-ac5d-4e29-b932-5f3ae1a02adf)

## Template
> `page`를 만들 수 있도록 여러개의 `molecule`, `organism`으로 구성될 수 있다. 실제 컴포넌트를
> 레이아웃에 배치하고 구조를 잡는 와이어 프레임이다. 즉 실제 콘텐츠가 없는 `page`라고 할 수 있다.
> ![image](https://github.com/likegitman/TIL/assets/105215297/3e84c77a-5e20-4d72-b421-997cf5d85dab)

## Page
> 유저가 볼 수 있는 콘텐츠를 담고 있어서 `template`의 `instance`라고 할 수 있다. 장바구니 페이지에
> 유저가 담은 상품이 없거나 특정 개수를 담는 다양한 `template`의 `instance`라고 할 수 있다.
> ![image](https://github.com/likegitman/TIL/assets/105215297/66e5bf6b-44a5-4f95-a517-8c03b28bebd2)
