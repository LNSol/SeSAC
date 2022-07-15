package functionaltest;

import java.util.ArrayList;

public class RobotManager {
	private static ArrayList<Integer> arr = new ArrayList<>();
	
	public static final RemvGo REMOVE = new RemvGo() {
		@Override
		public int doRemoveOrGo(int idx) {
			return arr.remove(idx);
		}
	};
	public static final RemvGo GO = (idx) -> {
		return arr.get(idx).doing();
	};
	
	public int doRemoveOrGo(int idx, RemvGo rg) {
		return rg.doRemoveOrGo(idx);
	
	}
	
	
	public static void main(String[] args) {
		RobotManager rm = new RobotManager();
		rm.doRemoveOrGo(5, RobotManager.REMOVE);
	}
}
