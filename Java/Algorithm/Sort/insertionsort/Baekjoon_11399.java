/*
 * Me - No ArrayList
 * Q4_11399
 * MEM : 15312KB
 * TIME : 148ms
 */
package insertsort;

//import java.util.ArrayList;
import java.util.StringTokenizer;
import java.io.InputStreamReader;
import java.io.BufferedReader;
import java.io.IOException;

public class Baekjoon_11399 {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		int N = Integer.parseInt(st.nextToken());
		st = new StringTokenizer(br.readLine());
		
		int[] A = new int[N];
		int[] S = new int[N+1];
		int time = 0;
		
		// 입력 배열
		for(int i=0; i<N; i++) {
			A[i] = Integer.parseInt(st.nextToken());
		}
		
		// 정렬
		for(int i=1; i<N; i++) {
			for(int j=0; j<i; j++) {
				if(A[i] < A[j]) {
					int tmp = A[i];
					
					// shift
					for(int z=i-1; z>=j; z--) {
						A[z+1] = A[z];
				
					}
					//insert
					A[j] = tmp;
				}
			}
		}
		
		// 구간합 배열
		for(int i=1; i<=N; i++) {
			S[i] = S[i-1] + A[i-1];
			time += S[i];
		}
		System.out.println(time);
	}
}
