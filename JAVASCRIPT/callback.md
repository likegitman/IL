# Callback
> 파라미터로 함수를 전달받아 함수의 내부에서 실행하는 함수를 말한다.
> callback 함수는 익명의 함수를 사용한다. ex) map, forEach 익명의 함수를 쓰는 이유는
> 함수의 내부에서 실행되기에 이름을 붙이지 않아도 되기 때문이다.

## Example
```js
console.log('1');
// web API
setTimeout(() => console.log('2'), 1000);
console.log('3');
```

### Synchronous
```js
function printImmediately(print) {
    print();
}
// 바로 print를 콘솔창에 출력
printImmediately(() => console.log('print'));
```

### Asynchronous
```js
function printDelay(print, timeout) {
    setTimeout(print, timeout);
}

// 2초 뒤에 print2를 콘솔창에 출력
printDelay(() => console.log('print2'), 2000);
```

## Complex Callback Function
```js
class UserStorage {
    loginUser(id, pwd, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'woonrin' && pwd === 'thisme')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'woonrin') {
                onSuccess({ name: 'woonrin', role: 'student' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000)
    }
}
const userStorage = new UserStorage();
const id = prompt('enter your id');
const pwd = prompt('enter your pwd');
userStorage.loginUser(
    id,
    pwd,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(
                    `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                );
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);
```
