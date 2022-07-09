package basic2_inheritance;

public class Atom extends Robot {
	public Atom(String name) {
		super(name);
	}
	
	@Override
	public void move() {
		System.out.println("Atom fly");
	}
	@Override
	public void attack() {
		System.out.println("Atom punch");
	}
}
