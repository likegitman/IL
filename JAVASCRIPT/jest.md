# JEST
> JavaScript Test의 약자로 JS코드가 제대로 동작하는지를 확인하는 test case를 만드는 테스팅 프레임워크이다.
> lint가 코드 스타일에 규칙을 정하는 것이라면 jest는 코드가 올바른 기능을 하는 지 체크할 수 있다.  

# 기본 문법
> test파일을 만든다. 그 test 파일의 이름은 `테스트함수의파일명.test.js`로 해준다.
```javascript
describe("계산 테스트", () => {
  const a = 1;
  const b = 2;
  
  test("a + b는 3이다.", () => {
    expect(a + b).toEqual(3);
  });
});

// output:
// 계산 테스트
// ✅a + b는 3이다.
```
> describe는 테스트 그룹을 묶어주는 역할을 하고, callback함수 내에 test에 쓰일  
> 가짜 변수, 객체들을 일회용으로 사용한 것이다.M 
