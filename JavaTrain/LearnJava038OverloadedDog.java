/**
 * 带两个参数的重载方法
*/
class LearnJava038Dog {
    public void bark(int i, double d) {
        System.out.println("int,double bark");
    }

    public void bark(double d, int i) {
        System.out.println("double,int bark");
    }
}

public class LearnJava038OverloadedDog {
    public static void main(String[] args) {
        LearnJava038Dog dog = new LearnJava038Dog();
        dog.bark(1, 2.2);
        dog.bark(2.2, 1);
    }
}