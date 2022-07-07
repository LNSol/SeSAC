package basic1_customer;

public class Merchandise {
	private int id;			// ��ǰ ���̵�
	private String name;	// ��ǰ �̸�
	private int price;		// ��ǰ ����
	private int count;		//���� �Ǹ� ����
	
	public Merchandise(int id, String name, int price) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.count = 0;  // �ʱ� ���� �Ǹ� ����: 0
	}
	
	public void accCount() { // �Ǹ� ���� +1
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
