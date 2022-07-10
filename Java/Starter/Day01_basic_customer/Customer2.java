package basic1_customer;

public class Customer2 {
	private int id;			// �� ���̵�
	private String name;	// �� �̸�
	private int amount;	// �ܾ�
	private double rate;	// ������
	private int point;	// ����Ʈ
	
	public Customer2(int id, String name, int amount) {
		this.id = id;
		this.name = name;
		this.amount = amount;
		this.rate = 0.02;	// ������: 2%
		this.point = 0;		// �ʱ� ����Ʈ: 0P
	}
	
	public int buy(int price) {
		if(this.amount < price) {
			return -1;
		}
		this.amount = this.amount - price;
		this.point = this.point + (int)(Math.ceil(price * this.rate));
		
		return this.amount;
	}
	
	// Merchandise Class�� �޴� buy() �߰�. (Overloading)
	public int buy(Merchandise m) {
		int price = m.getPrice();
		if(this.buy(price) > 0) {
			m.accCount();
		}
		return this.amount;
	}
	
	@Override
	public String toString() {
		return this.id + " : " + this.name;
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

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}
	
}
