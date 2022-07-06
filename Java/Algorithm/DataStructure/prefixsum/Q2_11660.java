// 2차원 구간 합
package prefixsum;

import java.util.StringTokenizer;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class Q2_11660 {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine()); // 2 4
		int n1 = Integer.parseInt(st.nextToken()); // 2
		int n2 = Integer.parseInt(st.nextToken()); // 4
		
		
		int[][] A = new int[n1][n1];      // 입력 배열
		for(int i=0; i<n1; i++) {
			st = new StringTokenizer(br.readLine()); // 1 1 1 1
			for(int j=0; j<n1; j++) {
				A[i][j] = Integer.parseInt(st.nextToken());
			}
		}

		int[][] D = new int[n1+1][n1+1];  // 구간 합 배열
		// 구간 합 배열 생성
		for(int i=1; i<=n1; i++) {
			for(int j=1; j<=n1; j++) {
				D[i][j] = D[i][j-1] + D[i-1][j] - D[i-1][j-1] + A[i-1][j-1];
			}
		}
		
		// 쿼리 입력
		for(int i=0; i<n2; i++) {
			st = new StringTokenizer(br.readLine()); // 2 2 3 4 => (2, 2) (3, 4)
			int x1 = Integer.parseInt(st.nextToken());
			int y1 = Integer.parseInt(st.nextToken());
			int x2 = Integer.parseInt(st.nextToken());
			int y2 = Integer.parseInt(st.nextToken());
			
			int result = D[x2][y2] - D[x2][y1-1] - D[x1-1][y2] + D[x1-1][y1-1];
			System.out.println(result);
		}
	}
}
