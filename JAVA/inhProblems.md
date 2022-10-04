# 상속 문제들

## 영조와 사도세자
```
package sangsi065;

class Parent{
	String name;
	
	Parent(){
		name="영조";
	}
	
	void print() {
		System.out.println(name);
	}
	
}

class Child extends Parent{
	String name;
	
	Child(){
		name="사도세자";
	}
	
	void print() {
		System.out.println("나는 "+name+"이다");
	};
}

public class OvershadowTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Parent p = new Child();
		System.out.println(p.name);
    // output: 영조
		p.print();
    // output: 나는 사도세자이다
	}

}
```

## 사람의 정보

```
package sangsi065;

class Person{
	String name;
	int age;
	
	Person(){}
	
	Person(String name, int age){
		this.name=name;
		this.age=age;
	}
	
	void show(){
		System.out.println("사람[이름 : "+ name +", 나이 : " + age+"]");
	}
	
}

class Student extends Person{
	
	int num;
	
	Student(){
		
	}
	
	Student(int num){
		this.num=num;
	}
	
	Student(String name, int age, int num){
		super(name, age);
		this.num=num;
	}
	
	void show() {
		System.out.println("학생[이름 : "+name+", 나이 : "+age+", 학번 : "+num+"]");
	}
}

class ForeignStudent extends Student{
	String from;
	
	ForeignStudent(String from){
		this.from=from;
	}
	
	ForeignStudent(String name, int age, int num, String from){
		super(num);
		this.name=name;
		this.age=age;
		this.from=from;
	}
	
	void show() {
		System.out.println("학생[이름 : "+name+", 나이 : "+age+", 학번 : "+num+", 국적 : " + from +"]");
	}
}

public class PersonTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Person p1=new Person("이운린", 17);
		Person s1=new Student("이운린", 17, 1412);
		Person f1=new ForeignStudent("이운린", 17, 1412, "한국");
		p1.show();
    // output: 사람[이름 : 이운린, 나이 : 17]
		s1.show();
    // output: 학생[이름 : 이운린, 나이 : 17, 학번 : 1412]
		f1.show();
    // output: 학생[이름 : 이운린, 나이 : 17, 학번 : 1412, 국적 : 한국]
	}

}
```

## 원의 정보
```
package sangsi065;

class Circle{
	int radius;
	
	Circle(int radius){
		this.radius=radius;
	}
	
	void show() {
		System.out.println("반지름이 "+radius+"인 원이다.");
	}
}

class ColoredCircle extends Circle{
	String color;
	
	ColoredCircle(int radius, String color){
		super(radius);
		this.color=color;
	}
	
	void show() {
		System.out.println("반지름이 "+radius+"인 " +color+" 원이다.");
	}
}

public class CircleTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Circle c1=new Circle(5);
		Circle c2=new ColoredCircle(10, "빨간색");
		c1.show();
    // output: 반지름이 5인 원이다.
		c2.show();
    // output: 반지름이 10인 빨간색 원이다.
	}

}
```

## 폰
```
package test;

public class Phone {
	protected String owner;
	
	Phone(){
		owner="없음";
	}
	
	Phone(String owner){
		this.owner=owner;
	}
	
	void talk() {
		System.out.println(owner+"가 통화 중이다.");
	}
	
	
}

public class TelePhone extends Phone {
	private String when;
	
	TelePhone(){
		// owner="없음"을 하지 않아도 super();가 자동으로
		when="미정";
	}
	
	TelePhone(String when){
		this.when=when;
	}
	
	TelePhone(String owner, String when){
		super(owner);
		this.when=when;
	}
	
	void autoAnsering() {
		System.out.println(owner+"(이)가 없다. "+when +" 전화 줄래.");
	}
	
}

package sangsi;

public class SmartPhone extends TelePhone{
	// String owner;
	private String game;
	
	SmartPhone(){
		game="미정";
	}
	
	SmartPhone(String game){
		this.game=game;
	}
	
	SmartPhone(String owner, String game){
		this.owner=owner;
		this.game=game;
	}
	
	void playGame() {
		System.out.println(owner+"(이)가 " + game +"게임을 하는 중이다.");
	}
}

public class PhoneTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Phone[] phones = {new Phone("황진이"), new Telephone("길동이", "내일"), new Smartphone("민국이", "갤러그")};
		
		for(Phone p:phones) {
			if(p instanceof Smartphone) {
				((Smartphone)p).playGame();;
			}
			else if(p instanceof Telephone) {
				((Telephone)p).autoAnswering();
			}
			else if(p instanceof Phone) {
				p.talk();
			}
		}
	}

}

```
