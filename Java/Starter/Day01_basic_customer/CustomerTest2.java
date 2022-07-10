package basic1_customer;

public class CustomerTest2 {
	public static void main(String[] args) {
		Customer2 c1 = new Customer2(2, "Kim", 2000000);
		
		Merchandise tv = new Merchandise(1, "TV", 100000);
		Merchandise pc = new Merchandise(2, "PC", 50000);
		Merchandise laptop = new Merchandise(3, "laptop", 800000);
		
		System.out.println("Amount : " + c1.buy(tv));
		System.out.println("Point : " + c1.getPoint());
		
		System.out.println("Amount : " + c1.buy(pc));
		System.out.println("Point : " + c1.getPoint());
		
		System.out.println("Amount : " + c1.buy(laptop));
		System.out.println("Point : " + c1.getPoint());
		
		System.out.println("Amount : " + c1.buy(laptop));
		System.out.println("Point : " + c1.getPoint());
		
		System.out.println("Amount : " + c1.buy(laptop));
		System.out.println("Point : " + c1.getPoint());
		
		System.out.println(tv.getCount());
		System.out.println(pc.getCount());
		System.out.println(laptop.getCount());
	}
}
