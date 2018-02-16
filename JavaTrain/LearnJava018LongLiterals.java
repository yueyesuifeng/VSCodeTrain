public class LearnJava018LongLiterals {
    public static void main(String[] args) {
        long l1 = 0x2f;//十六进制小写
        System.out.println("l1:" + Long.toBinaryString(l1));
        long l2 = 0x2F;//十六进制大写
        System.out.println("l2: " + Long.toBinaryString(l2));
        long l3 = 0177;//八进制
        System.out.println("l3: " + Long.toBinaryString(l3));//八进制转二进制
    }
}