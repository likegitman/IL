# slice()
> 어떤 배열의 `begin`부터 `end`까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환한다.  
> 하지만, 원본 배열을 바꾸지는 않는다.

## Example
```js
const foods = ['Pizza', 'Sushi', 'Burger', 'Pasta', 'Donuts'];

console.log(foods.slice(1));
// output: Array ['Sushi', 'Burger', 'Pasta', 'Donuts']

console.log(foods.slice(2, 4));
// output: Array ['Burger', 'Pasta']

console.log(foods.slice(1, 5));
// output: Array ['Sushi', 'Burger', 'Pasta', 'Donuts']

console.log(foods.slice(-3));
// output: Array ['Burger', 'Pasta', 'Donuts']

console.log(foods.slice(1, -1));
// output: Array ['Sushi', 'Burger', 'Pasta']

console.log(foods.slice());
// output: Array ['Pizza', 'Sushi', 'Burger', 'Pasta', 'Donuts']
```
