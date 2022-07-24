package decorator.improvedemail;

public class SecureDecorator extends Decorator {

	public SecureDecorator(EMail email) {
		super(email);
	}
	
	public String getContent() {
		return addSecure() + super.getContent();
	}
	
	private String addSecure() {
		return "[Secure Mail]";
	}
}
