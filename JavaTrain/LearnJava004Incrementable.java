/**
 * 当声明一个事物是static时，就意味着这个域或方法不会与包含它的那个类的任何对象实例关联在一起
 */
class StaticTest {
    static int i = 47;
}

public class LearnJava004Incrementable {
    static void increment() {
        StaticTest.i++;
    }

    public static void main(String[] args) {
        LearnJava004Incrementable sf = new LearnJava004Incrementable();
        sf.increment();
        LearnJava004Incrementable.increment();
        increment();
        System.out.println(StaticTest.i);
    }
}