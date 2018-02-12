/**
 * 无论创建某个特定类的多少个对象，这个类中的某个特定的static域只有一个实例
*/
public class LearnJava006StaticTest{
    static int i =47;
    public static void main(String[] args){
        LearnJava006StaticTest st1 = new LearnJava006StaticTest();
        LearnJava006StaticTest st2 = new LearnJava006StaticTest();
        System.out.println(st1.i+"=="+st2.i);
        st1.i++;
        System.out.println(st1.i+"=="+st2.i);
    }
}