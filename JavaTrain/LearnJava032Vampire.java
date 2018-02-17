//吸血鬼数字
public class LearnJava032Vampire {

	public static void main(String[] args) {
		int[] startDigit = new int[4];
		int[] productDigit = new int[4];
		for (int num1 = 10; num1 <= 99; num1++) {
			for (int num2 = num1; num2 <= 99; num2++) {
				int product = num1 * num2;
				 // Pete Hartley's theoretical result:
                // If x·y is a vampire number then
                // x·y == x+y (mod 9)
				if ((product % 9 != (num1 + num2) % 9)||(product<1000))
					continue;
				startDigit[0] = num1 / 10;// num1的十位数
				startDigit[1] = num1 % 10;// num1的个位数
				startDigit[2] = num2 / 10;// num2的十位数
				startDigit[3] = num2 % 10;// num2的个位数
				productDigit[0] = product / 1000;// product的千位
				productDigit[1] = (product % 1000) / 100;// product的百位
				productDigit[2] = product % 1000 % 100 / 10;// product的十位
				productDigit[3] = product % 1000 % 100 % 10;// product的各位
				int count = 0;
				for (int x = 0; x < 4; x++) {
					for (int y = 0; y < 4; y++) {
						if (productDigit[x] == startDigit[y]) {
							count++;
							startDigit[y] = -1;//防止再次查找
							break;//找到之后，就跳出去了
						}
					}
				}
				if (count == 4) {
					System.out.println(num1 + "*" + num2 + ":" + product);
				}
			}
		}
	}

}
