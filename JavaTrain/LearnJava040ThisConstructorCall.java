/**
 * 在构造器中调用另一个构造器，尽管可以用this调用一个构造器，但却不能调用两个
 * 必须将构造器调用放在最起始处，否则编译器会报错
*/
public class LearnJava040ThisConstructorCall {
    public LearnJava040ThisConstructorCall(String s) {
        System.out.println("s=" + s);
    }

    public LearnJava040ThisConstructorCall(int i) {
        // System.out.println("test");//必须将构造器调用放在最起始处，否则编译器会报错
        this("i=" + i);
    }

    public static void main(String[] args) {
        System.out.println("test");
        new LearnJava040ThisConstructorCall("String call");
        new LearnJava040ThisConstructorCall(47);
    }
}