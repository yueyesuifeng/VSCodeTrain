/**
 * 在构造器中调用另一个构造器
*/
public class LearnJava040ThisConstructorCall {
    public LearnJava040ThisConstructorCall(String s) {
        System.out.println("s=" + s);
    }

    public LearnJava040ThisConstructorCall(int i) {
        this("i=" + i);
    }

    public static void main(String[] args) {
        new LearnJava040ThisConstructorCall("String call");
        new LearnJava040ThisConstructorCall(47);
    }
}