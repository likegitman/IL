# Callback

## Base
```
console.log('1');
// web API
setTimeout(() => console.log('2'), 1000);
console.log('3');
```

## Synchronous
```
function printImmediately(print) {
    print();
}
// 바로 print를 콘솔창에 출력
printImmediately(() => console.log('print'));
```

## Asynchronous
```
function printDelay(print, timeout) {
    setTimeout(print, timeout);
}

// 2초 뒤에 print2를 콘솔창에 출력
printDelay(() => console.log('print2'), 2000);
```

## Complex Callback Function
```
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
