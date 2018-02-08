public class LearnJava003Storage {
    String s = "Hello World!";

    int storage(String s) {
        return s.length() * 2;
    }

    void print() {
        System.out.println("storage(s)=" + storage(s));
    }

    public static void main(String[] args) {
        LearnJava003Storage st = new LearnJava003Storage();
        st.print();
    }
}