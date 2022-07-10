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
		return super.buy(this.getSalePrice(price)); // Customer Class의 buy(int price) 메서드 호출
	}
	
	@Override
	public int buy(Merchandise m) {
		if(this.buy(m.getPrice()) < 0) {
			return -1;
		}
		m.accCount();
		return this.getAmount();
	}
	
	public int getSalePrice(int price) {
		return price - (int) Math.round(price * saleRate);
	}
}
