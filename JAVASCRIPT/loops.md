# Loops
### while
```
let i = 0;

while(i < 10) {
  console.log(`${i}`); //0 ~ 9
  i++;
}
```

### for
```
for(let i = 0; i < 10; i++;) {
    console.log(`${i}`); //0 ~ 9
}
```

### for in
```
// array

let arr = [1, 2, 3, 4, 5];

for (let i in arr) {
    // arr의 index가 i에 할당 됨
    console.log(i);
}

// object
let obj = {
    fish: '물고기',
    bird: '새',
};

for (let i in obj) {
    // obj의 key가 i에 할당 
    console.log(i);
}
```

### for of
```
let arr = [10, 20, 30, 40, 50];

for(let i of arr) {
    // arr의 배열값이 i에 할당 됨
    console.log(i);
}
```

### forEach
```
let arr = [1, 2, 3, 4, 5]
// forEach()는 주어진 callback을 배열에 있는 각 요소에 대해 오름차순으로 한 번씩 실행한다.
arr.forEach(item => console.log(item))
```
