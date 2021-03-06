/**
 * create a class containing a float and use it to demonstrate aliasing
 * 将一个对象赋值给另一个对象，实际上是将“引用”从一个地方复制到另一地方
*/
class LearnJava012Integral {
    float f;
}

public class LearnJava012Aliasing {
    public static void main(String[] args) {
        LearnJava012Integral n1 = new LearnJava012Integral();
        LearnJava012Integral n2 = new LearnJava012Integral();
        n1.f = 9f;
        n2.f = 47f;
        System.out.println("1:n1.f:" + n1.f + " n2.f:" + n2.f);
        n1 = n2;
        System.out.println("2:n1.f:" + n1.f + " n2.f:" + n2.f);
        n1.f = 27f;
        System.out.println("3:n1.f:" + n1.f + " n2.f:" + n2.f);
    }
}