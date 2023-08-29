# JEST
> JavaScript Test의 약자로 JS코드가 제대로 동작하는지를 확인하는 test case를 만드는 테스팅 프레임워크이다.
> lint가 코드 스타일에 규칙을 정하는 것이라면 jest는 코드가 올바른 기능을 하는 지 체크할 수 있다.  

## Example
```js
const sum = require('./sum')

test('1 + 2는 3입니다.', () => {
  expect(sum(1, 2)).toBe(3)
})
```

## Matchers
> 테스트 코드에서 기대하는 결과를 검증하기 위해 사용되는 함수이며 테스트 대상 코드의  
> 실행 결과나 값을 기대하는 값과 비교하여 일치 여부를 판단하는 역할을 한다.  
> Jest는 다양한 Matcher 함수를 제공하여 다양한 종류의 테스트 검증을 수행할 수 있도록 도와준다.

### toBe(value)
> 기본 값을 비교하거나 개체 인스턴스의 참조 ID를 확인하는 데 사용한다.  
> `toBe(value)`는 값과 타입(데이터 유형)을 모두 바교한다.  
> 그렇기에 값과 타입이 정확하게 일치해야 테스트가 성공한다.
```js
const User = {
  name: 'Mike',
  age: 25,
};

describe('The User', () => {
  test('User의 나이는 25입니다. ', () => {
    expect(User.age).toBe(25);
  }); // 성공

  test('User의 이름은 Mike입니다.', () => {
    expect(User.name).toBe('Mike');
  }); // 성공

  test('이름은 Mike입니다.', () => {
    expect({ name: 'Mike' }).toBe({ name: 'Mike' });
  }); // 실패 (내요이 같아도 서로 다른 메모리이다.)
});
```

### toEqual(value)
> 개체 인스턴스의 모든 속성을 재귀적으로 비교하는 데 사용한다. 값이 일치하는지 비교한다는 점에서  
> `toBe(value)`와 헷갈릴 수 있지만 `toEqual(value)`은 값의 내용(값 자체)을 비교한다.  
```js
const User1 = {
  name: 'Jane',
  age: 20,
};
const User2 = {
  name: 'Jane',
  age: 20,
  gender: undefined
};

describe('The User', () => {
  test('User1의 값과 User2의 값이 일치한다.', () => {
    expect(User1).toEqual(User2);
  }); // 성공

  test('User1의 값과 User2의 값이 일치한다.', () => {
    expect(User1).toStrictEqual(User2);
  }); // 실패
});
```

### [더 많은 Matchers](https://jestjs.io/docs/using-matchers)

## 비동기
### Calback
#### 함수 파일
```js
const fn = {
  getName: (callback) => {
    const name = 'Woonrin'
    setTimeout(() => {
      callback(name)
    }, 2000)
  }
}

module.exports = fn
```

#### 테스트 파일
> done은 Jest에게 테스트할 코드가 비동기 코드라는 것을 알려주며 콜백의 호출까지  
> 마무리가 되었다(done)는 것을 알려주는 것이다.
```js
const fn = require('./fn')

// done을 호출하지 않으면 test는 빠르게 통과되어 모든 test가 정답이라고 처리한다.
describe('The Callback', () => {
  test('2초 후에 받아오는 나이는 20살입니다.', (done) => {
    function callback(name) {
      try {
        expect(name).toBe('Woonrin')
        done()
      } catch (e) {
        done(e)
      }
    }
    fn.getName(callback)
  }) 
});
```

### Promise
#### 함수 파일
```js
const fn = {
  getAge: () => {
    const age = 20
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(age)
        }, 2000)
      })
  }
}

module.exports = fn
```

#### test 파일
##### then catch
```js
const fn = require('./fn')

describe('The Async', () => {
  test('2초 후에 받아오는 나이는 20살입니다.', () => {
    return fn.getAge().then((age) => {
      expect(age).toBe(20)
    })
  }) 
});
```

##### async, await
```js
const fn = require('./fn')

describe('The Async', () => {
  test('2초 후에 받아오는 나이는 20살입니다.', async () => {
    const age = await fn.getAge()
    expect(age).toBe(20)
  }) 
});
```
