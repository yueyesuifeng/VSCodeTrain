public class LearnJava036OverloadedConstructor {
    LearnJava036OverloadedConstructor() {
        System.out.println("Default Constructor");//默认的构造函数
    }

    LearnJava036OverloadedConstructor(String s) {//重载的构造函数
        System.out.println("String arg Constructor");
        System.out.println(s);
    }

    public static void main(String[] args) {
        new LearnJava036OverloadedConstructor();//调用默认的构造函数
        new LearnJava036OverloadedConstructor("Overloaded");//调用重载的构造函数
    }
}