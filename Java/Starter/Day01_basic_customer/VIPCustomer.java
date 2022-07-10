package basic1_customer;


public class VIPCustomer extends Customer2 { //Customer2 Class ���
	private double saleRate;	// ������ (VIP ���� 3% ���ε� �ݾ����� ����)
								// ���� VIP ���� 2% ������ 3% ���� ������ ����.
	
	public VIPCustomer(int id, String name, int amount) {
		super(id, name, amount);
		this.saleRate = 0.03;	// ������: 3%
	}
	
	@Override
	public int buy(int price) {
		return super.buy(this.getSalePrice(price)); // Customer Class�� buy(int price) �޼��� ȣ��
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
