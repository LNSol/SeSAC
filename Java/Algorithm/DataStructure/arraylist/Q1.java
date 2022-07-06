package arraylist;

import java.util.Scanner;

public class Q1 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int n = sc.nextInt();
		String sNum = sc.next();
		char[] cNums = sNum.toCharArray();
		
		int sum = 0;
		for(int i=0; i<n; i++) {
			sum += (cNums[i] - '0');
			
		}
		
		System.out.println(sum);
	}
}