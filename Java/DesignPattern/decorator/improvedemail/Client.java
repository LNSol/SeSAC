package decorator.improvedemail;

public class Client {
	public static void main(String[] args) {
		EMail basicEmail = new BasicEMailContent("Hello");
		EMail externalEmail = new ExternalDecorator(basicEmail);
		EMail secureEmail = new SecureDecorator(externalEmail);
		
		System.out.println(basicEmail.getContent());
		System.out.println(externalEmail.getContent());
		System.out.println(secureEmail.getContent());
	}
}
