public class LearnJava002DefaultInitialization {
    int i;
    char c;

    public LearnJava002DefaultInitialization() {//构造函数，这是一个方法
        System.out.println("i=" + i);
        System.out.println("c=[" + c + "]");
        System.out.println("这是一个git测试");
    }

    public static void main(String[] args) {
        new LearnJava002DefaultInitialization();
    }
}