package basic2_inheritance;

public class RobotTest {
	public static void main(String[] args) {
		RobotManager rm = RobotManager.getInstance();
		Robot atom = new Atom("�谡�Ƹ��");
		Robot taekwonV = new TaekwonV("��齽���̾�");
		
		rm.addRobot(atom);
		rm.addRobot(taekwonV);
		
		rm.go(0);
		rm.go(1);
		
		System.out.println(rm);
	}
}
