package decorator;

public class TrafficDecorator extends Decorator {
	
	public TrafficDecorator(Display decoratedDisplay) {
		super(decoratedDisplay);
	}
	
	public void draw() {
		super.draw();
		drawTraffic();
	}
	
	public void drawTraffic() {
		System.out.println("\t교통량 표시");
	}
}
