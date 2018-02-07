public class Flower {
	private int peatalCount = 0;
	private String s = new String("null");

	Flower(int petals) {
		peatalCount = petals;
		System.out.println("Constructor w/ int arg only, peatlCount=" + peatalCount);
	}

	Flower(String ss) {
		System.out.println("Constructor w/ String arg only, ss=" + ss);
		s = ss;
	}

	Flower(String s, int petals) {
		this(petals);
		this.s = s;
		System.out.println("String & int args");
	}

	Flower() {
		this("hi", 47);
		System.out.println("default constructor(no args)");
	}

	void print() {
		System.out.println("peatlCount" + peatalCount + "s=" + s);
	}

	public static void main(String[] args) {
		Flower x = new Flower();
		x.print();
	}
}
