package basic2_inheritance;

public class RobotTest2 {
	public static void main(String[] args) {
		RobotManager2 robotManager = RobotManager2.getInstance();
		
		Robot atom = new Atom("�谡�Ƹ��");
		Robot taekwonV = new TaekwonV("��齽���̾�");
		Robot lim = new Atom("������");
		Robot gang = new TaekwonV("������");
		
		robotManager.addRobot(atom);
		robotManager.addRobot(taekwonV);
		robotManager.addRobot(lim);
		robotManager.addRobot(gang);
		System.out.println(robotManager);
		System.out.println("-------------------");
		
		robotManager.removeOrGo(2, robotManager.REMOVE);
		System.out.println(robotManager);
		
		robotManager.removeOrGo(2, robotManager.GO);
	}
}
