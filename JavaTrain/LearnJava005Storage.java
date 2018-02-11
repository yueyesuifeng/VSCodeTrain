/**
 * 不要用JavaScript的思想写方法
 * Java中的方法  除静态方法外，要通过对象调用
 * 调用方法的行为通常称为发送消息给对象，那么return的后面，就是对象调用该方法返回的消息
 */
public class LearnJava005Storage {
    int Storage(String s) {
        return s.length() * 2;
    }

    public static void main(String[] args) {
        LearnJava005Storage st = new LearnJava005Storage();
        System.out.println(st.Storage("Hello World!"));
    }
}
