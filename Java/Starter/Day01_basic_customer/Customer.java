/*
 * float �� ������ �� ���� : 0.02f
 * �Ҽ��� �ݿø�
 *  1) Math.round() : Math.round(n * 100.0) / 100.0
 *  2) String.format("%.2f", n);
 */
package basic1_customer;

public class Customer {
	private int id;			// �� ���̵�
	private String name;	// �� �̸�
	private int amount;		// �ܾ�
	private double rate;	// ������
	private int point;		// ���� ����Ʈ
	
	public Customer(int id, String name, int amount) { // Customer Class�� ������ (id, name, amount)�� ����.
		this.id = id;
		this.name = name;
		this.amount = amount;
		this.rate = 0.02;	// ������ : 2%
		this.point = 0;		// �ʱ� ����Ʈ : 0P
	}
	
	public int buy(int price) {
		if(price > this.amount) {
			return -1;
		}
		this.amount = this.amount - price;
		this.point = this.point + (int)Math.ceil(price * this.rate);
		
		return this.amount;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getRate() {
		return rate;
	}

	public void setRate(float rate) {
		this.rate = rate;
	}

	public int getPoint() {
		return point;
	}

	public void setPoint(int point) {
		this.point = point;
	}
	
}
