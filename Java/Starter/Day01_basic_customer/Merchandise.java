package basic1_customer;

public class Merchandise {
	private int id;			// 상품 아이디
	private String name;	// 상품 이름
	private int price;		// 상품 가격
	private int count;		//누적 판매 수량
	
	public Merchandise(int id, String name, int price) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.count = 0;  // 초기 누적 판매 수량: 0
	}
	
	public void accCount() { // 판매 수량 +1
		this.count += 1;
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
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}
	
	
}
