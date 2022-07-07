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
		int salePrice = price - (int)Math.round(price * saleRate); // 3% ���ΰ� ����
		return super.buy(salePrice); // Customer Class�� buy(int price) �޼��� ȣ��
	}
	
	@Override
	public int buy(Merchandise m) {
		int price = m.getPrice();		// ��ǰ�� ������ ����
		int result = this.buy(price);	// �� �޼���(this.buy(int price) ȣ��. ��, super�� buy(int price)�޼��尡 ȣ���.
		if(result != -1) {				// ���� ���� �� ��ǰ�� ���� �Ǹ� ���� ����
			m.accCount();
		}
		return result;
	}
}
