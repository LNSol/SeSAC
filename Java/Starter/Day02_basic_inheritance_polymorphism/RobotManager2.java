package basic2_inheritance;

import java.util.ArrayList;

public class RobotManager2 {
	private static RobotManager2 instance = null;
	private static ArrayList<Robot> robotList = new ArrayList<>();
	
	public static final RemoveGo REMOVE = new RemoveGo() {
		@Override
		public void doRemoveOrGo(int idx) {
			robotList.remove(idx);
		}
	};
	public static final RemoveGo GO = (idx) -> {
		robotList.get(idx).doing();
	};
	
	private RobotManager2() {}
	
	public static RobotManager2 getInstance() {
		if(instance == null) {
			instance = new RobotManager2();
		}
		return instance;
	}
	
	public boolean addRobot(Robot r) {
		return robotList.add(r);
	}
	
	public int removeOrGo(int idx, RemoveGo rg) {
		if(idx >= robotList.size()) {
			return -1;
		}
		rg.doRemoveOrGo(idx);
		return 0;
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
