class StaticTest{
    static int i = 47;
}
public class LearnJava004Incrementable{
    static void increment(){
        StaticTest.i++;
    }
    public static void main(String[] args){
        LearnJava004Incrementable sf =new LearnJava004Incrementable();
        sf.increment();
        LearnJava004Incrementable.increment();
        increment();
        System.out.println(StaticTest.i);
    }
}