public class LearnJava024CompareStrings {
    public static void p(String s, boolean b) {
        System.out.println(s + ":" + b);
    }

    public static void compare(String lval, String rval) {
        p("lval==rval:", lval == rval);
        p("lval!=rval:", lval != rval);
        p("lval.equals(rval)", lval.equals(rval));
    }

    public static void main(String[] args) {
        compare("Hello", "Hello");
        System.out.println("****8****");
        String s = new String("Hello");
        compare("Hello", s);
        System.out.println("****8****");
        compare("Hello", "Goodbye");
    }
}