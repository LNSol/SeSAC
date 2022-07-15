package basic2_inheritance;

public class RobotTest2 {
	public static void main(String[] args) {
		RobotManager2 robotManager = RobotManager2.getInstance();
		
		Robot atom = new Atom("배가아몬드");
		Robot taekwonV = new TaekwonV("대면슬레이어");
		Robot lim = new Atom("임은하");
		Robot gang = new TaekwonV("임졸갱");
		
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
