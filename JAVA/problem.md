# Problem

## 삼각형 넓이 구하는 class구현
```
package homework;

class Triangle {
	double bottom;
	double high;
	
	public Triangle(){}
	
	public Triangle(double bottom, double high){
		this.bottom=bottom;
		this.high=high;
	}
	
	public double findArea() {
		return (bottom*high)/2;
	}
	
}

public class TriangleTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Triangle t=new Triangle(10.0, 5.0);
		System.out.println(t.findArea()); // output: 25.0
	}

}
```

## 삼각형 넓이를 비교해 같은지 다른지 구별하는 class구현
```
package homework;

class Triangle {
	double bottom;
	double high;
	
	public Triangle(){}
	
	public Triangle(double bottom, double high){
		this.bottom=bottom;
		this.high=high;
	}
	
	public double findArea() {
		return (bottom*high)/2;
	}
	
	public boolean isSameArea(Triangle obj) {
		if(this.findArea()==obj.findArea())
			return true;
		else
			return false;
	}
	
}

public class TriangleTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Triangle t1=new Triangle(10.0, 5.0);
		Triangle t2=new Triangle(5.0, 10.0);
		Triangle t3=new Triangle(8.0, 8.0);
		System.out.println(t1.isSameArea(t2)); // output:true
		System.out.println(t2.isSameArea(t3)); // output:false
	}

}
```

## 골프채 모델링 class구현
```
package homewok;

class GolfClub {
	int num;
	String str;
	
	public GolfClub() {
		this.num=7;
		this.str="아이언";
	}
	
	public GolfClub(int num) {
		this.num=num;
		this.str="아이언";
	}
	
	public GolfClub(String str) {
		this.num=-1;
		this.str=str;
	}
	
	public void print() {
		if(num < 0)
			System.out.println(str +"입니다.");
		else
			System.out.println(num+"번"+str+"입니다.");
	}
}

public class GolfClubTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		GolfClub g1=new GolfClub();
		g1.print();
		GolfClub g2=new GolfClub(8);
		g2.print();
		GolfClub g3=new GolfClub("피터");
		g3.print();
	}

}
```
