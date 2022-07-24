package decorator;

public class LaneDecorator extends Decorator {
	
	public LaneDecorator(Display decoratedDisplay) {
		super(decoratedDisplay);
	}
	
	public void draw() {
		super.draw();
		drawLane();
	}
	
	public void drawLane() {
		System.out.println("\t차선 표시");
	}
}
