public class LearnJava32Fibonacci {
	static int fib(int n) {
		if (n <= 2) {
			return 1;
		}
		return fib(n - 1) + fib(n - 2);
	}

	public static void main(String[] args) {
		int n = 10;
		if (args.length != 0) {
			n = Integer.parseInt(args[0]);
			if (n < 0) {
				System.out.println("不能使用负数");
			}
		}
		for (int i = 2; i < n; i++) {
			System.out.println(fib(i) + ", ");
		}
	}

}
