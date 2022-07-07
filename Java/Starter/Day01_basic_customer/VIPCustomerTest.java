package basic1_customer;

public class VIPCustomerTest {
	public static void main(String[] args) {
		VIPCustomer vip = new VIPCustomer(3, "Hong", 400000);
		
		Merchandise tv = new Merchandise(1, "TV", 100000);
		Merchandise pc = new Merchandise(2, "PC", 50000);
		Merchandise laptop = new Merchandise(3, "laptop", 800000);
		
		System.out.println("Amount : " + vip.buy(tv));
		System.out.println("Point : " + vip.getPoint());
		
		System.out.println("Amount : " + vip.buy(pc));
		System.out.println("Point : " + vip.getPoint());
		
		System.out.println("Amount : " + vip.buy(pc));
		System.out.println("Point : " + vip.getPoint());
		
		System.out.println("Amount : " + vip.buy(laptop));
		System.out.println("Point : " + vip.getPoint());
		
		System.out.println("TV : " + tv.getCount());
		System.out.println("PC : " + pc.getCount());
		System.out.println("Laptop : " + laptop.getCount());
	}
}
