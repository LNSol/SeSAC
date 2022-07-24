package decorator;

public class Client {
	public static void main(String[] args) {
		Display roadDisplay = new RoadDisplay();
		Display roadDisplayWithLane = new LaneDecorator(roadDisplay);
		Display roadDisplayWithLaneTraffic = new TrafficDecorator(new LaneDecorator(new RoadDisplay()));
		Display roadDisplayWithLaneTrafficCrossing = new CrossingDecorator(roadDisplayWithLaneTraffic);
		
		
//		roadDisplay.draw();
//		roadDisplayWithLane.draw();
		roadDisplayWithLaneTraffic.draw();
		roadDisplayWithLaneTrafficCrossing.draw();
	}
}
