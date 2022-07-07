package basic1_customer;


public class VIPCustomer extends Customer2 { //Customer2 Class 상속
	private double saleRate;	// 할인율 (VIP 고객은 3% 할인된 금액으로 구매)
								// 따라서 VIP 고객은 2% 적립과 3% 할인 혜택을 받음.
	
	public VIPCustomer(int id, String name, int amount) {
		super(id, name, amount);
		this.saleRate = 0.03;	// 할인율: 3%
	}
	
	@Override
	public int buy(int price) {
		int salePrice = price - (int)Math.round(price * saleRate); // 3% 할인가 구함
		return super.buy(salePrice); // Customer Class의 buy(int price) 메서드 호출
	}
	
	@Override
	public int buy(Merchandise m) {
		int price = m.getPrice();		// 상품의 가격을 구함
		int result = this.buy(price);	// 위 메서드(this.buy(int price) 호출. 즉, super의 buy(int price)메서드가 호출됨.
		if(result != -1) {				// 구매 성공 시 상품의 누적 판매 수량 증가
			m.accCount();
		}
		return result;
	}
}
