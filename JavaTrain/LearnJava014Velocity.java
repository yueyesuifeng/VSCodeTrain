public class LearnJava014Velocity{
    public static void main(String[] args) {
        if(args.length < 2){
            System.err.println("calculate velocity require two numbers");
            System.exit(-1);
        }
        float distance = Float.parseFloat(args[0]);
        float time = Float.parseFloat(args[1]);
        System.out.print("Velocity = ");
        System.out.print(distance / time);
        System.out.print("m/s");
    }
}