# Meaning
> TypeScript는 JavaScript에 Type을 적용 시키는 것
> 자바스크립트는 동적 타입의 인터프리터 언어로 런타임에서 오류를 발견할 수 있는데 타입스크립트는 정적 타입의 컴파일 언어로  
> 코드 작성단계에서 오류를 발견한다. 타입스크립트는 실행할 때 타입스크립트 컴파일러나 바벨(Babel)을 통해 자바스크립트 코드로 변환됨.

`let num:number`  
 
## 반환값이 있을 때
```
function add(num1:number, num2:number):number {
  const result:number=num1+num2;
  return result;
}
```

## 반환값이 없을 때
```
function add(num1:number, num2:number):void {
  console.log(num1+num2);
}
```

---

* 장점
> 자바스크립트보다 빠르게 오류를 잡아내 고칠 수 있고 타입을 미리 지정하기 때문에 실행 속도가 빠름

* 단점
> 코드 작성 시 매번 타입을 써줘야 하기 때문에 번거롭고 코드량이 증가하여 컴파일 시간이 오래 걸림
