public class LearnJava041FinalizeCall{
    protected void finalize(){
        System.out.println("finalize args[]");
    }
    public static void main(String[] args) {
        new LearnJava041FinalizeCall();
    }
}