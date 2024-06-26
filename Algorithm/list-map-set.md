# list
list는 순서와 중복이 허용되는 자료구조이다.  
내부적으로 index를 가지고 있고 데이터에 순서가 존재한다.  
list에서 제공하는 기능들은
- 처음, 중간, 끝에 요소를 추가하고 삭제
  삭제를 통해 빈 공간이 생겼을 경우에는 하나씩 밀리면서 채워짐
- 데이터가 존재하는지 체크
- 리스트의 모든 데이터에 접근

동적으로 크기가 변하기 때문에 가변적이고 비어있는 데이터가 존재할 수 없다.  
장점은 많지만 순서가 존재하는 자료구조이기에 찾으려는 데이터가 뒤쪽에 있다면 **순회**로 인해  
속도 면에서 좋지 못 하다.

# Map
순서가 보장되지 않으며 key와 value 쌍으로 저장되는 자료구조이다.  
list는 값만 저장할 수 있으며 인덱싱으로 key를 사용할 수 있지만 Map은  
아예 key와 value를 같이 저장할 수 있다.

여기서 value는 중복될 수 있지만 key는 중복될 수 없다. index처럼.  
iterator를 사용해 인덱싱과 다른 방법으로 원하는 요소를 찾을 수 잇다.

# Set
입력 순서를 유지하지 않으며 데이터의 중복을 허용하지 않는 자료구조이다.
Map처럼 index가 존재하지 않아 iterator를 사용하여 조회한다.
