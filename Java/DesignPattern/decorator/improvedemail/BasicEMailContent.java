package decorator.improvedemail;

public class BasicEMailContent extends EMail {
	private String content;
	
	public BasicEMailContent(String content) {
		this.content = content;
	}
	
	public String getContent() {
		return this.content;
	}
}
