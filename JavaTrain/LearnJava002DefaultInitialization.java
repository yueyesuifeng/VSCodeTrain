/**
 * 基本数据类型的默认值
 * boolean char byte short int long float double
 */
public class LearnJava002DefaultInitialization {
    boolean flag;
    char c;
    byte b;
    short s;
    int i;
    long l;
    float f;
    double d;

    public LearnJava002DefaultInitialization() {//构造函数，这是一个方法
        System.out.println("flage="+flag);
        System.out.println("c=" + c+ "");          
        System.out.println("b="+b);
        System.out.println("s="+s);
        System.out.println("i=" + i);
        System.out.println("l="+l);
        System.out.println("f="+f);
        System.out.println("d="+d);
    }

    public static void main(String[] args) {
        new LearnJava002DefaultInitialization();
    }
}