# Loops
* while
```
let i = 0;

while(i < 10) {
  console.log(`${i}`); //0 ~ 9
  i++;
}
```

* for
```
for(let i = 0; i < 10; i++;) {
    console.log(`${i}`); //0 ~ 9
}
```

* for in
```
// if array

let arr = [1, 2, 3, 4, 5];

for (let i in arr) {
    // arr의 index가 i에 할당 됨
    console.log(i);
}

// if object
let obj = {
    fish: '물고기',
    bird: '새',
};

for (let i in obj) {
    // obj의 key가 i에 할당 
    console.log(i);
}
```

* for of
```
let arr = [10, 20, 30, 40, 50];

for(let i of arr) {
    // arr의 배열값이 i에 할당 됨
    console.log(i);
}
```
