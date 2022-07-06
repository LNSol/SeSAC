//���� �� ���ϱ�
//2012ms
package prefixsum;

import java.util.Scanner;

public class Q1_11659 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n1 = sc.nextInt(); // ���� ��
		int n2 = sc.nextInt(); // ���� ��
		
		int[] A = new int[n1];    // �Է��� ���� ����
		int[] S = new int[n1+1];  // ������ �迭
		int[] rS = new int[n2];   // ��� �迭 �Է� ������ �������� ��� ����ؾ� �ϴ� �� �˾���.�Ѥ�
		
		for(int i=0; i<n1; i++) { 
			A[i] = sc.nextInt();  //�Է� ���� a�迭�� ����
		}
		S[0] = 0;  // �̰� ��� ��. �迭 �����ϸ� 0���� �ʱ�ȭ ��.
		for(int i=0; i<n1; i++) {
			S[i+1] = S[i] + A[i];  // ������ �迭�� �� ����
		}
		

		for(int i=0; i<n2; i++) {
			int start = sc.nextInt();  // ������ ���� ��
			int end = sc.nextInt();    // ������ �� ��
			
			rS[i] = S[end] - S[start-1];
		}
		
		for(int i=0; i<n2; i++) {
			System.out.println(rS[i]);
		}

	}
}
