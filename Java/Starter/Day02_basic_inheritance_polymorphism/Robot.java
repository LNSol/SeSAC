package basic2_inheritance;

public class Robot {
	private String name;
	
	public Robot(String name) {
		this.name = name;
	}
	
	public void move() {
		System.out.println("Robot move");
	}
	public void attack() {
		System.out.println("Robot attack");
	}
	public void doing() {
		move();
		attack();
	}
	
	@Override
	public String toString() {
		return "My name is " + this.name + ".";
	}
	
	public String getName() {
		return this.name;
	}
	public void setName(String name) {
		this.name = name;
	}
}
