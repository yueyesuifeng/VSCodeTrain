/**
 * 比较两个对象的实际内容是否相同，必须使用所有对象都适用的特殊方法equals（）
 * 这里只是简单的比较，== 和equals的区别，以下程序看不出有什么区别，第7章详细讨论equals()方法
*/
public class LearnJava016DogsComparison {
    static void compare(LearnJava015Dog dog1, LearnJava015Dog dog2) {
        System.out.println("== on top reference: " + (dog1 == dog2));
        System.out.println("equals() on top reference: " + dog1.equals(dog2));
        System.out.println("== on names: " + (dog1.name == dog2.name));
        System.out.println("equals() on names: " + dog1.name.equals(dog2.name));
        System.out.println("== on says: " + (dog1.says == dog2.says));
        System.out.println("equals() on names: " + dog1.says.equals(dog2.says));
    }

    public static void main(String[] args) {
        LearnJava015Dog dog1 = new LearnJava015Dog();
        LearnJava015Dog dog2 = new LearnJava015Dog();
        LearnJava015Dog dog3 = dog1;
        dog1.name = "spot";
        dog1.says = "Ruff!";
        dog2.name = "scruffy";
        dog2.says = "Wurf!";
        System.out.println("Comparing dog1 and dog2 objects...");
        compare(dog1, dog2);
        System.out.println("Comparing dog1 and dog3 objects...");
        compare(dog1, dog3);
        System.out.println("Comparing dog2 and dog3 objects...");
        compare(dog2, dog3);
    }
}