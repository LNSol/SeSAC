/*
 * Me - Use ArrayList
 * MEM : 14552KB
 * TIME : 144ms
 */
package insertsort;

import java.io.InputStreamReader;
import java.io.BufferedReader;
import java.io.IOException;
import java.util.StringTokenizer;
import java.util.ArrayList;
import java.util.Arrays;

public class Baekjoon_11399_ArrayList {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		int N = Integer.parseInt(st.nextToken());
		ArrayList<Integer> A = new ArrayList<>();
		ArrayList<Integer> P = new ArrayList<>();
		int[] S = new int[N+1];
		int total = 0;
		
		// 사용자 입력 배열
		st = new StringTokenizer(br.readLine());
		for(int i=0; i<N; i++) {
			int num = Integer.parseInt(st.nextToken());
			A.add(num);
		}
		
		// 사용자 입력 배열 정렬
		A.stream().sorted().forEach((num) -> {
			P.add(num);
		});
		
		// 구간합 배열
		for(int i=1; i<=N; i++) {
			S[i] = S[i-1] + P.get(i-1);
			total += S[i];
		}
		
		System.out.println(total);
		
	}
}
