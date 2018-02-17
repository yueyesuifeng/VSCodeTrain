/**
 * 找max以下的质数的快速方法
 * 你仅仅只需要测试奇数，因为2是唯一的偶数质数
 * 建立一个长度为max+1的数组判断对应位置上的数字是不是质数
 * */
import static java.lang.Math.*;

public class LearnJava028FindPrimes2 {
	public static void main(String[] args) {
		int max = 100;
		if (args.length != 0) {//如果参数中提供了最大数，则从命令行中获取
			max = Integer.parseInt(args[0]);
		}
		boolean[] sieve = new boolean[max + 1];//默认值是false
		int limit = (int) floor(sqrt(max));
		System.out.print(1 + " ");//1是质数
		if (max > 1)//max比1大，2也是质数
			System.out.print(2 + "");
		//这里用来做判断
		for (int i = 3; i < limit; i += 2) {//判断比2大的所有奇数，那些是质数
			if (!sieve[i])
				for (int j = 2 * i; j <= max; j += i)//这里用的是排除法
					sieve[j] = true;
		}
		//下面这一段用来输出
		for (int i = 3; i <= max; i += 2) {
			if (!sieve[i])//是false的是质数
				System.out.print(i + " ");
		}
	}
}
