package decorator;

public abstract class Decorator extends Display {
	private Display decoratedDisplay;
	
	public Decorator(Display decoratedDisplay) {
		this.decoratedDisplay = decoratedDisplay;
	}
	
	@Override
	public void draw() {
		decoratedDisplay.draw();
	}
}
