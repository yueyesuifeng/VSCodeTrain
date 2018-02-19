/**
 * 方法的重载
*/
class LearnJava037Dog {
    public void bark() {
        System.out.println("Default bark!");
    }

    public void bark(int i) {
        System.out.println("int bark = howl");
    }

    public void bark(double d) {
        System.out.println("double bark = yip");
    }
}

public class LearnJava037OverloadedDog {
    public static void main(String[] args) {
        LearnJava037Dog dog = new LearnJava037Dog();
        dog.bark();
        dog.bark(1);
        dog.bark(1.1);
    }
}