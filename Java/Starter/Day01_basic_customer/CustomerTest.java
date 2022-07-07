package basic1_customer;

public class CustomerTest {
	public static void main(String[] args) {
		Customer c1 = new Customer(1, "Lim", 300000);
		
		System.out.println("Amount : " + c1.buy(15000));
		System.out.println(c1.getPoint());
		
		System.out.println("Amount : " + c1.buy(160000));
		System.out.println(c1.getPoint());
		
		System.out.println("Amount : " + c1.buy(43050));
		System.out.println(c1.getPoint());
		
		System.out.println("Amount : " + c1.buy(78000));
		System.out.println(c1.getPoint());
		
		System.out.println("Amount : " + c1.buy(130));
		System.out.println(c1.getPoint());
		
		System.out.println("Amount : " + c1.buy(9));
		System.out.println(c1.getPoint());
	}
}
