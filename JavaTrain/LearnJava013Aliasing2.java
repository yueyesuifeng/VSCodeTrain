/**
 * 方法调用的别名问题
 * Create a class containing a float and use it to demonstrate aliasing during method calls
*/
public class LearnJava013Aliasing2 {
    static void f(LearnJava012Integral y) {
        y.f = 1.0f;
    }

    public static void main(String[] args) {
        LearnJava012Integral x = new LearnJava012Integral();
        x.f = 2.0f;
        System.out.println("1: x.f:" + x.f);
        f(x);
        System.out.println("2: x.f:" + x.f);
    }
}