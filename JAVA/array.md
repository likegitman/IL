# Array

## Declaration
```
package chap_05;

public class Array_01 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		// 배열 선언 1
		// int[] == 배열의 자료형
		int[] num = new int[5];
		num[0] = 1;
		num[1] = 2;

		// 배열 선언 2
		int[] num2 = new int[] { 1, 2, 3, 4, 5 };

		// 배열 선언 3
		int[] num3 = { 1, 2, 3, 4, 5 };

		// 배열 선언 4
		int[] num4;
		// num4 = new int[5]; // ok
		num4 = new int[] { 1, 2, 3, 4, 5 }; // ok
		// num4 = new int[5] {1,2,3,4,5}; // error
		// num4 = {1,2,3,4,5}; // error

		for (int i = 0; i < num4.length; i++) {
			System.out.print(num4[i] + " "); // output: 1 2 3 4 5
		}
	}
}

```

## Input and Output
```
package chap_05;

import java.util.Scanner;

public class Array_02 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner sc = new Scanner(System.in);

		// 입력 받아서 출력
		int[] num = new int[5];

		for (int i = 0; i < num.length; i++) {
			System.out.println("input num >");
			num[i] = sc.nextInt(); // input: 1 2 3 4 5
		}

		for (int i = 0; i < num.length; i++) {
			System.out.print(num[i] + " "); // output: 1 2 3 4 5
		}

		System.out.println();

		// 향상된 for
		int[] nums = { 1, 2, 3, 4, 5 };

    // 배열 타입 변수 : 배열이름 
		for (int n : nums) {
			System.out.print(n);
		}
	}
}
```

## String array
```
package chap_05;

import java.util.Scanner;

public class Array_03 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
    
		String[] str = { "c", "java", "pytheon" };

		for (String s : str) {
			System.out.println(s); // output: c java pytheon
		}

		String[] str2 = new String[3];

		for (int i = 0; i < str2.length; i++) {
			System.out.println("문자열을 입력해주세요: "); 
			str2[i] = sc.next(); // input: 떡볶이 튀김 순대
		}

		for (String s : str2) {
			System.out.println(s); // output: 떡볶이 튀김 순대
		}

	}

}

```

## Average
```
package chap_05;

import java.util.Scanner;

public class Array_04 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);

		int sum = 0;

		int[] score = new int[5];

		for (int i = 0; i < score.length; i++) {
			score[i] = sc.nextInt(); // input: 100 90 80 70 60
			sum += score[i]; // +=100 90 80 70 60
		}

		System.out.println("평균은 " + sum / score.length); // output: 80

    // 평균에 따른 등급 출력
		for(int i=0;i<score.length;i++) {
			if(score[i]>=90) System.out.println("grade: A");
			else if(score[i]>=80) System.out.println("grade: B");
			else if(score[i]>=70) System.out.println("grade: C");
			else System.out.println("grade: D");
		}

		for (int n : score) {
			if (n >= 90)
				System.out.println("grade: A");
			else if (n >= 80)
				System.out.println("grade: B");
			else if (n >= 70)
				System.out.println("grade: C");
			else
				System.out.println("grade: D");
		}

	}

}

```

## Multidimensional Array
```
package chap_05;

import java.util.Scanner;

public class Array_05 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		// 다차원 배열
		int[][] nums = { { 100, 100, 100 }, { 90, 90, 90 }, { 80, 80, 80 } };

		// 다차원 배열이기 때문에
		// 향상된 for를 사용한 이중 for문은
		// 1차원 배열로 받고, int형으로 받는다

		for (int[] num : nums) {
			for (int n : num) {
				System.out.println(n + " ");
			}
			// 줄바꿈
			System.out.println();
		}

		for (int i = 0; i < nums.length; i++) {
			for (int j = 0; j < nums[i].length; j++) {
				System.out.println(nums[i][j]);
			}
			System.out.println();
		}

		// 가변 배열
		// 각 배열 행마다 index를 다르게
		int[][] arr = new int[5][];
		arr[0] = new int[2];
		arr[1] = new int[3];
		arr[2] = new int[4];
		arr[3] = new int[1];
		arr[4] = new int[5];

	}

}

```
