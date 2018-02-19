/**
 * this关键字只能在方法内部调用，表示对“调用方法的那个对象”的那个对象。
 * 但是要注意，如果在方法内部调用同一个类的另个方法，就不必使用this。
*/
public class LearnJava039ThisMethodCall {
    public void a() {
        b();
        this.b();//this指当前对象
    }

    public void b() {
        System.out.println("b() called");
    }

    public static void main(String[] args) {
        new LearnJava039ThisMethodCall().a();
    }
}