/**
 * 对象的基本概念
*/
class LearnJava015Dog {
    String name;
    String says;
}

public class LearnJava015Dogs {
    public static void main(String[] args) {
        LearnJava015Dog dog1 = new LearnJava015Dog();
        LearnJava015Dog dog2 = new LearnJava015Dog();
        dog1.name = "spot";
        dog1.says = "Ruff!";
        dog2.name = "scruffy";
        dog2.says = "Wurf!";
        System.out.println("dog1.name：" + dog1.name + "says:" + dog1.says);
        System.out.println("dog2.name：" + dog2.name + "says:" + dog2.says);
    }
}