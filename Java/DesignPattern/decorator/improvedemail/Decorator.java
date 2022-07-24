package decorator.improvedemail;

public abstract class Decorator extends EMail {
	private EMail decoratedEMail;
	
	public Decorator(EMail email) {
		this.decoratedEMail = email;
	}
	
	public String getContent() {
		return this.decoratedEMail.getContent();
	}
}
