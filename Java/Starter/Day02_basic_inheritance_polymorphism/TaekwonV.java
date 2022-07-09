package basic2_inheritance;

public class TaekwonV extends Robot {
	public TaekwonV(String name) {
		super(name);
	}
	
	@Override
	public void move() {
		System.out.println("TaekwonV walk");
	}
	@Override
	public void attack() {
		System.out.println("TaekwonV missile");
	}
}
