public class LearnJava020BitewiseOperators {
    public static void main(String[] args) {
        int i1 = 0xaaaaaaaa;
        int i2 = 0x55555555;
        System.out.println("i1 = " + Integer.toBinaryString(i1));//toBinaryString转换成二进制的字符串形式显示
        System.out.println("i1 = " + Integer.toBinaryString(i1));
        System.out.println("i2 = " + Integer.toBinaryString(i2));
        System.out.println("~i1 = " + Integer.toBinaryString(~i1));//取反运算
        System.out.println("~i2 = " + Integer.toBinaryString(~i2));
        System.out.println("i1 & i1 = " + Integer.toBinaryString(i1 & i1));//按位与
        System.out.println("i1 | i1 = " + Integer.toBinaryString(i1 | i1));//按位或
        System.out.println("i1 ^ i1 = " + Integer.toBinaryString(i1 ^ i1));//按位异或
        System.out.println("i1 & i2 = " + Integer.toBinaryString(i1 & i2));
        System.out.println("i1 | i2 = " + Integer.toBinaryString(i1 | i2));
        System.out.println("i1 ^ i2 = " + Integer.toBinaryString(i1 ^ i2));
    }
}