package decorator.improvedemail;

public class ExternalDecorator extends Decorator {
	
	public ExternalDecorator(EMail email) {
		super(email);
	}
	
	public String getContent() {
		return addExternal() + super.getContent();
	}
	
	private String addExternal() {
		return "[External Mail]";
	}
}
