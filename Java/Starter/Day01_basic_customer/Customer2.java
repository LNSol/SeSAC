package basic1_customer;

public class Customer2 {
	private int id;			// 고객 아이디
	private String name;	// 고객 이름
	private int amount;	// 잔액
	private double rate;	// 적립율
	private int point;	// 포인트
	
	public Customer2(int id, String name, int amount) {
		this.id = id;
		this.name = name;
		this.amount = amount;
		this.rate = 0.02;	// 적립율: 2%
		this.point = 0;		// 초기 포인트: 0P
	}
	
	public int buy(int price) {
		if(this.amount < price) {
			return -1;
		}
		this.amount = this.amount - price;
		this.point = this.point + (int)(Math.ceil(price * this.rate));
		
		return this.amount;
	}
	
	// Merchandise Class를 받는 buy() 추가. (Overloading)
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
