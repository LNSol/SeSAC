package prefixsum;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;
import java.io.IOException;

public class Q1_book_11659 {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine()); //5 3
		int n1 = Integer.parseInt(st.nextToken()); // 5
		int n2 = Integer.parseInt(st.nextToken()); // 3
		
		int[] s = new int[n1+1];
		st = new StringTokenizer(br.readLine()); // 5 4 3 2 1
		for(int i=1; i<=n1; i++) {
			s[i] = s[i-1] + Integer.parseInt(st.nextToken());
		}
		
		for(int i=0; i<n2; i++) {
			st = new StringTokenizer(br.readLine());
			int start = Integer.parseInt(st.nextToken());
			int end = Integer.parseInt(st.nextToken());
			System.out.println(s[end] - s[start-1]);
		}
		
	}
}
