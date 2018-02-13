/**
 * Java接受命令行参数
 * 要使用命令行的方式传递三个参数，直接点击运行的话，会出现错误
 * 这样运行java LearnJava008ShowArgs A B C
 */
public class LearnJava008ShowArgs {
    public static void main(String[] args) {
        if(args.length<3){
            System.err.println("Need 3 arguments");
            System.exit(1);//终端当前运行的Java虚拟机，这个方法不是正常的返回，按照规定，一个非0的状态吗
            //表明了非正常的终端
        }
        System.out.println(args[0]);
        System.out.println(args[1]);
        System.out.println(args[2]);
    }
}