# Promise
> 장시간의 기능을 수행한 후 정상적으로 수행됐다면 결괏값, 아니라면 error를 전달

## Producer
```
// 새로운 promise가 만들어질 때 전달된 executor라는 함수가 바로 실행이 자동적으로 됨
const promise = new Promise((resolve, reject) => {
    console.log('doing something...');
    setTimeout(() => {
        // 성공
        resolve('woonrin');
        // 실패(error)
        reject(new Error('no network'));
    }, 2000);
});
```

## Consumers: then, catch, finally
```
const promise = new Promise((resolve, reject) => {
    console.log('doing something...');
    setTimeout(() => {
        // 성공
        resolve('woonrin');
        // 실패(error)
        // reject(new Error('no network'));
    }, 2000);
});

// promise안의 값이 정상적으로 수행이 된다면
promise // 
.then(value => {
    // 2초 후 output: woonrin
    console.log(value);
})

// reject가 활성화 되어 있을 때
// error가 발생했을 때
.catch(error => {
    // 2초 후 output: Error: no network
    console.log(error);
})

// 성공, 실패의 관계여부에 상관없이 무조건 마지막에 호출이 됨
.finally(() => {
    // 2초 후 무조건 output: finally 출력
    console.log('finally');
});
```

## Promise Chaning 
```
const promise = new Promise((resolve, reject) => {
    console.log('doing something...');
    setTimeout(() => {
        // 성공
        resolve('woonrin');
        // 실패(error)
        // reject(new Error('no network'));
    }, 2000);
});


const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber //
    .then(num => num * 2) // 2
    .then(num => num * 3) // 6
    .then(num => {
        // 새로운 promise 호출
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        })
    })
    .then(num => console.log(num)); // output: 5
```

## Error Handling
```
// resolve 일때
const getTop = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('↑'), 1000);
    });
const getTriangle = top =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${top} => ▲`), 1000)
    });
const add = triangle =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${triangle} => ♠`), 1000);
    });

// getTop()
// .then(top => getTriangle(top))
// .then(triangle => add(triangle))
// .then(tree => console.log(tree));

// 생략
getTop() //
    .then(getTriangle)
    .then(add)
    .then(console.log); // output: ↑ => ▲ => ♠
```

```
// reject 일때
const getTop = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('↑'), 1000);
    });
const getTriangle = top =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${top} => ▲`)), 1000)
    });
const add = triangle =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${triangle} => ♠`), 1000);
    });

// getTop()
// .then(top => getTriangle(top))
// .then(triangle => add(triangle))
// .then(tree => console.log(tree));

// 생략
getTop() //
    .then(getTriangle)

    // error가 발생했다면 ▲ 을 ■로 리턴
    .catch(error => {
        return '■';
    })
    .then(add)
    .then(console.log) // error가 발생했기 때문에 no output
    .catch(console.log); // output: ■ => ♠
```

## Simple Callback(previous improvements)
```
class UserStorage {
    loginUser(id, pwd) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'woonrin' && pwd === 'thisme')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'woonrin') {
                    resolve({ name: 'woonrin', role: 'student' });
                } else {
                    reject(new Error('no access'));
                }
            }, 1000)
        });
    }
}
const userStorage = new UserStorage();
const id = prompt('enter your id');
const pwd = prompt('enter your pwd');
userStorage //
    .loginUser(id, pwd)
    .then(userStorage.getRoles)
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);
```
