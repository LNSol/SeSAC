package decorator.email;

public class ExternalEMailContent extends BasicEMailContent {
	
	public ExternalEMailContent(String content) {
		super(content);
	}
	
	public String getContent() {
		String content = super.getContent();
		String externalContent = addExternal(content);
		return externalContent;
	}
	
	private String addExternal(String content) {
		return content + " External mail";
	}
}
