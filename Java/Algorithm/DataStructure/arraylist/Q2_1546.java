//평균 구하기
package arraylist;

import java.util.Scanner;

public class Q2 {
	public static void main(String[] args) {
		long millis = System.currentTimeMillis();
		
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		float max = 0;
		float sum = 0;
		
		for(int i=0; i<n; i++) {
			int score = sc.nextInt();
			sum += score;
			if(score > max) {
				max = score;
			}
		}
		System.out.println(sum*100/max/n);
		
		millis = System.currentTimeMillis() - millis;
		System.out.println(millis);
	}
}
