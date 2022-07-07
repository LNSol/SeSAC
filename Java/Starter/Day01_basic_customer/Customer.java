/*
 * float 형 변수에 값 대입 : 0.02f
 * 소수점 반올림
 *  1) Math.round() : Math.round(n * 100.0) / 100.0
 *  2) String.format("%.2f", n);
 */
package basic1_customer;

public class Customer {
	private int id;			// 고객 아이디
	private String name;	// 고객 이름
	private int amount;		// 잔액
	private double rate;	// 적립율
	private int point;		// 적립 포인트
	
	public Customer(int id, String name, int amount) { // Customer Class의 생성자 (id, name, amount)를 받음.
		this.id = id;
		this.name = name;
		this.amount = amount;
		this.rate = 0.02;	// 적립율 : 2%
		this.point = 0;		// 초기 포인트 : 0P
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
