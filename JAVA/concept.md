# Concept

## 객체
> 현실 세계에서 구체적이거나 추상적인 사물(개념)을 의미한다.

## 클래스
> 객체를 받아서 PGT설계도(java)를 설계

## 인스턴스
> 클래스를 통해 생성한 것

## 캡슐화
> 관련된 필드와 메서드를 하나의 캡슐처럼 포장해 세부 내용을  
  외부에서 알 수 없도록 감추는 것

* 관련된 것
> getter
> setter
> private

## 상속
> 상위 객체를 상속받은 하위 객체가 상위 객체의 필드와 메서드를  
  사용할 수 있는 것

## 다형성
> 대입되는 객체에 따라서 메서드를 다르게 동작하도록 구현하는 기술이다.

## 메서드 오버로딩
> 기능은 같은데 데이터 타입이 다를 때  
> 함수의 이름은 같게하고 매개변수만 변화를 주어 메서드를 사용하는 것

```
package OverLoading;


public class OverLoadDemo {
	
	public static int max(int n1, int n2){
		int result=n1>n2?n1:n2;
		return result;
	}
	
	public static double max(double n1, double n2){
		double result=n1>n2?n1:n2;
		return result;
	}
	
	public static int max(int n1, int n2, int n3){
		return max(max(n1,n2), n3);
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int i1=3, i2=7, i3=10;
		double d1=7.0, d2=3.0;
		
		System.out.printf("max(%d, %d) = %d \n", i1, i2, max(i1, i2));
		System.out.printf("max(%.1f, %.1f) = %.1f \n", d1, d2, max(d1, d2));
		System.out.printf("max(%d, %d, %d) = %d \n", i1, i2, i3, max(i1, i2, i3));
	}

}

/*결과:
	 * max(3, 7)=7
	 * max(3.0, 7.0)=7.0
	 * max(3, 7, 10)=10
	 * */
```
