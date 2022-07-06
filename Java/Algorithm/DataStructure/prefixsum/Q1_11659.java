//구간 합 구하기
//2012ms
package prefixsum;

import java.util.Scanner;

public class Q1_11659 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n1 = sc.nextInt(); // 숫자 수
		int n2 = sc.nextInt(); // 쿼리 수
		
		int[] A = new int[n1];    // 입력한 숫자 저장
		int[] S = new int[n1+1];  // 구간합 배열
		int[] rS = new int[n2];   // 결과 배열 입력 끝나고 마지막에 결과 출력해야 하는 줄 알았음.ㅡㅡ
		
		for(int i=0; i<n1; i++) { 
			A[i] = sc.nextInt();  //입력 값을 a배열에 저장
		}
		S[0] = 0;  // 이거 없어도 됨. 배열 생성하면 0으로 초기화 됨.
		for(int i=0; i<n1; i++) {
			S[i+1] = S[i] + A[i];  // 구간합 배열에 값 저장
		}
		

		for(int i=0; i<n2; i++) {
			int start = sc.nextInt();  // 구간합 시작 값
			int end = sc.nextInt();    // 구간합 끝 값
			
			rS[i] = S[end] - S[start-1];
		}
		
		for(int i=0; i<n2; i++) {
			System.out.println(rS[i]);
		}

	}
}
