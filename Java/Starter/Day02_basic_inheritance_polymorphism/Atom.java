package basic2_inheritance;

public class Atom extends Robot {
	public Atom(String name) {
		super(name);
	}
	
	@Override
	public void move() {
		System.out.println("Fly~~~!!!");
	}
	@Override
	public void attack() {
		System.out.println("Punch!!!");
	}
}
