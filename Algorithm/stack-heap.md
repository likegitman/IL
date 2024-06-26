# 왜?
변수와 값은 메모리에 저장된다.  
모든 프로그램은 값을 변수에 넣고 계산해 처리하는 과정의 반복이다.  
모든 프로그램은 `Stack`과 `Heap`이라는 2 공간에 값을 저장한하는데 두 공간의 차이점이 뭐길래 구분하는 걸까?

일단 간단하게 두 공간에 대해서 알아보자.

## Stack
Stack은 정말 많이 사용되는 알고리즘이고 유명하다.  
뜻은 의미대로 쌓아놓은 더미인데 쌓여있는 점시나 상자 등의 모든 것이 Stack에 포함된다.

### LIFO ( Last In First Out )
접시나 상자에서 보통 어떻게 하나하나 제거하지?  
위에서 부터 하나씩 뺀다.  
즉, **가장 마지막에 쌓아놓은 것을 먼저**뺀다.  
이것을 Stack의 특징 중 하나인 후입선출(LIFO)이라고 한다.  
프로그램 측면에서는 가장 최근에 들어온 데이터가 가장 먼저 나가는 것이다.  
Stack을 js로 구현한 코드는 [여기](https://github.com/likegitman/IL/blob/main/Algorithm/stack-queue-tree.md).

### 스택의 활용
- 함수 호출  
js에서는 Call Stack이 있다.  
호출된 함수의 프레임이 쌓이며 가장 마지막에 호출된 함수가 빠져나가는 이름대로 Stack의 작업 흐름이다.  
함수 호출이 발생하면 호출한 함수 수행에 필요한 지역 변수, 매개 변수, 복귀 주소 등의 정보들을 스택 프레임에 저장하여 시스템 스택에 삽입한다.  
이후 함수의 수행이 끝나면 pop되어 프레임에 저장된 복귀 주소로 복귀한다.  
- 브라우저 방문 기록 및 모바일 기록

## Heap
특정한 순서에 따라 정렬된 요소들을 저장하는 트리 기반의 자료구조이다.  
Heap은 일반적으로 binary heap, priority queue와 같은 다른 자료 구조에 사용된다.

### 특징
1. 완전 이진 트리  
Heap은 완전 이진 트리의 형태를 가진다.  
-> 마지막 레벨을 제외한 모든 레벨이 완전히 채워져있고 마지막 레벨은 왼쪽부터 채워져 있는 형태.  
2. 부모-자식 노드 관계
최대 힙에서는 모든 부모 노드가 자식 노드보다 크거나 같은 값을 가져야하고 최소 힙에서는 모든 부모 노드가 자식 노드보다 작거나 같은 값을 가져야한다.

Heap에 대해 완전히 파헤치려는게 아니기에 여기까지만 알아보자.  

# 변수의 크기
만약 어떤 변수에 1을 할당했을 때 나는 1이 아닌 2, 3, 4 등의 다른 **숫자**가 들어가겠구나를 생각할 수 있다.  
어떤 값이 들어갈 지 안다면 얼마까지 저장될 지 한계치의 크기가 필요하고 여러 타입 중 하나를 정해야한다.  

### Int
정수형 타입이다.  
4바이트 용량이고 