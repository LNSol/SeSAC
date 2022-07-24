package decorator;

public class CrossingDecorator extends Decorator {
	
	public CrossingDecorator(Display decoratedDisplay) {
		super(decoratedDisplay);
	}
	
	public void draw() {
		super.draw();
		drawCrossing();
	}
	
	public void drawCrossing() {
		System.out.println("\t교차로 표시");
	}
}
