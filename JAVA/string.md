# String

## Dclaration and Assignment
```
String s1 = "Hi, Java!";
String s2 = "Hi, Java!";
String s3 = new String("Hi, Java!");
String s4 = "hi, java!";
String s5 = "Hi, Python!";
```

## Same?
```
String s1 = "Hi, Java!";
String s2 = "Hi, Java!";
String s3 = new String("Hi, Java!");
String s4 = "hi, java!";
String s5 = "Hi, Python!";
		       
// ==, =!는 같은 객체(같은 주소공간 사용)인지 비교함.
// String 클래스에서 제공하는 다양한 메소드들
System.out.println("s1과 s2는 같은 객체인가? " + (s1 == s2)); // true
// new로 생성한 객체는 다른 주소에 있다고 판정
System.out.println("s1과 s3은 같은 객체인가? " + (s1 == s3)); // false
// equals는 내용자체를 비교함
System.out.println("s1과 s2는 같은 내용인가? " + s1.equals(s2)); // true
System.out.println("s1과 s3은 같은 내용인가? " + s1.equals(s3)); // true

System.out.println("s1과 s4에 대하여 대소문자를 무시하고 비교 " + s1.equalsIgnoreCase(s4)); // true

// compareTo는 같으면 0을 출력 아니면 0이아닌 다른 수
System.out.println("s1과 s5 비교(결과값은 문자값의 차이) " + s1.compareTo(s5)); // -6
```

## Various Methods
```
String str1 = "Hi,";
String str2 = " Java!";

// charAt concat contains indexOf isEmpty length subsstring
// charat은 괄호안의 index number를 넣어 그 index의 값을 출력한다
System.out.println(str1.charAt(2)); // ,
// concat은 괄호안의 문자열을 이어준다
System.out.println(str1.concat(str2)); // Hi! Java!
// contains는 괄호안의 문자열이 포함되어있는지 검사한다
System.out.println(str2.contains("!")); // true
// indexOf는 괄호안의 문자열이 어느 index에 들어있는지 알려준다 
System.out.println(str2.indexOf("!")); // 5
// length는 문자열의 길이를 알려준다
System.out.println(str2.length()); // 6
// substring은 string 객체의 시작 인덱스로부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환한다
System.out.println(str1.concat(str2).substring(5)); // ava!
```
