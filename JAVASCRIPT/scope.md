# Scope
> 변수나 함수에 접근할 수 있는 범위를 나타낸다.  
> Scope에는 두가지 형태가 있는데 하나는 global scope(전역 스코프)와  
> block scope(지역 스코프)가 있다.

# Global Scope
> 전역에 선언되어있어 어느 곳에서든지 접근할 수 있다.

# Block Scope
> 해당 블록(중괄호) 안에서만 접근할 수 있고 바깥에서는 접근할 수 없다.
> JS에서는 함수가 block scope의 예시이다.

# Example
```
let global = "전역스코프입니다!";

function print() {
    let block = "블록스코프입니다!"
    console.log(block); // possible
    console.log(global); // possible
}

print();

console.log(block); // error
console.log(global); // possible
```
