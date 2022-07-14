/*
 * Use ArrayList
 * MEM: 22288KB
 * TIME: 352ms
 */
package bubblesort;

import java.util.Scanner;
import java.util.ArrayList;

public class Baekjoon_2750_ArrayList {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		ArrayList<Integer> A = new ArrayList<>();
		int N = sc.nextInt();
		
		for(int i=0; i<N; i++) {
			A.add(sc.nextInt());
		}
		
		A.stream().sorted().forEach(n -> System.out.println(n));
	}
}
