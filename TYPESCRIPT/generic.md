# Generic
> 한가지 타입을 받는게 아닌 여러개의 타입을 받을 때 유용하게 사용함

# Example
## generic을 쓰지 않을 때
> 함수를 호출할 때마다 다른 배열을 인자로 주고싶을 때  
> 이런 방식들은 번거로울 수 있다.
  
```
function getSize(arr:number[] | string[] | boolean[]):number {
    return arr.length;
}

const arr1 = [1, 2, 3];
getSize(arr1);
const arr2 = ["a", "b", "c"];
getSize(arr2);
const arr3 = [false, true, false];
getSize(arr3);
```

```
interface SuperPrint{
    (arr:number[]):void;
    (arr:boolean[]):void;
    (arr:string[]):void;
}

const superPrint:SuperPrint=(arr)=>{
    arr.forEach(i=>console.log(i));
}

superPrint([1,2,3,4]);
superPrint([true,false,true,false]);
superPrint(["a", "b", "c", "d"]);
```

## generic을 사용할 때
> 위의 방식보다 확실히 코드가 간단해지고 유연성이 증가한다.  
> (꼭 T라고 쓰지 않아도 되지만 T라고 쓰는것이 보편적)
  
```
function getSize<T>(arr: T[]): number {
    return arr.length;
}

const arr1 = [1, 2, 3];
getSize(arr1);
const arr2 = ["a", "b", "c"];
getSize(arr2);
const arr3 = [false, true, false];
getSize<boolean>(arr3);
getSize(arr3); // 굳이 <type>을 안 써도 TS는 어떤 타입인지 안다.
```

```
interface SuperPrint{
    <T>(arr:T[]):void;
}

const superPrint:SuperPrint=(arr)=>{
    arr.forEach(i=>console.log(i));
}

superPrint([1,2,3,4]);
superPrint([true,false,true,false]);
superPrint(["a", "b", "c", "d"]);
```
