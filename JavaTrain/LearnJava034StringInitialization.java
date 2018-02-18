public class LearnJava034StringInitialization {
    String s1 = "Initialized at definition";
    String s2;

    public LearnJava034StringInitialization(String s2i) {
        s2 = s2i;
    }

    public static void main(String[] args) {
        LearnJava034StringInitialization si = new LearnJava034StringInitialization("Initialized at construction");
        System.out.println("si.s1 = " + si.s1);
        System.out.println("si.s2=" + si.s2);
    }
}