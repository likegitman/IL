# Hash Map

## Hash Table
Hash란 데이터를 다루는 기법 중 하나로 검색과 저장에서 속도적으로 뛰어난 성능을 보인다.  
Hash Table은 key와 value 쌍이며 key 값이 배열의 인덱스로 변환되기 때문에   
검색과 저장에서 key 값만 사용하면 속도적으로 큰 효율을 얻을 수 있다. (key 값은 문자열도 가능)
-> Hash Function을 사용하여 빠른 탐색이 가능하다. -> 시간 복잡도: O(1)

## Hash Function
key와 연결되어 있는 value를 삽입, 삭제, 탐색하는 알고리즘 함수이다.  
대표적으로 MDS 함수라는 것이 존재한다.  
key를 받게되면 랜덤으로 주소 값을 생성하여 해당 주소값에 key와 value를 저장한다.
하지만 해시 충돌이 일어날 수 있다.

## JS에서 Hash Table
Object와 Map, Set이 존재한다.
원래는 Object만 있었지만 ES6부터 Map과 Set이 추가되었다.

### Map
Map과 Set 모두 key와 value 쌍으로 이루어진 Hash Map이다.  
key는 당연하게 단 하나만 존재할 수 있고 value는 여러 값이 존재할 수 있다.  
만약 새로운 key 값을 설정하면 기존의 값은 사라지고 해당 key 값으로 고정되게 된다.  


#### Map의 메서드
- get: key를 인자로 받아 value를 가져옴
- set: key값과 value를 인자로 전달받아 값 생성
- has: key를 인자로 받아 value가 존재하는지 판단 (reutrn: boolean)
- delete: key 값을 인자로 받아 key에 해당하는 value 삭제

### Set
Set은 Map과 거의 동일하지만 차이점이 있다.
바로 중복 된 값을 허용하지 않는다. Map은 중복 값을 허용하였다는 것과 잘 비교해서 기억하자.

#### Set의 메서드
- add: key와 vlaue를 받거나 객체를 전달받아 값 생성 (add로 동일한 값을 추가할 수 있지만 내부적으로 중복 값을 제거)
- delete: Map과 동일
- has: Map과 동일
- clear: 모든 Set을 지움
