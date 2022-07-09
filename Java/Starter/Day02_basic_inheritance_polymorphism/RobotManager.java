package basic2_inheritance;

import java.util.ArrayList;

public class RobotManager {
	private static RobotManager instance = null;
	private static ArrayList<Robot> robotList;
	
	private RobotManager() {}
	
	public static RobotManager getInstance() {
		if(instance == null) {
			instance = new RobotManager();
			robotList = new ArrayList<>();
		} else {
			System.out.println("B");
		}
		return instance;
	}
	
	public boolean addRobot(Robot r) {
		return robotList.add(r);
	}
	public boolean removeRobo(Robot r) {
		return robotList.remove(r);
	}
	
	public void go(int idx) {
		robotList.get(idx).doing();
	}
	
	@Override
	public String toString() {
		StringBuilder st = new StringBuilder();
		for(Robot r : robotList) {
			st.append(r + "\n");
		}
		return st.toString();
	}
}
