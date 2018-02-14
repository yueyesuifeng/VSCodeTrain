/**
 * 模拟抛硬币
*/
import java.util.Random;

public class LearnJava017CoinFlipping {
    public static void main(String[] args) {
        Random rand = new Random(47);
        boolean flip = rand.nextBoolean();
        System.out.println("OUTCOME:");
        System.out.println(flip ? "Head" : "TAIL");
    }
}