/**
 * 驼峰命名法
 */
public class LearnJava009AlllTheColorOfTheRainbow{
    int anIntegerRepresentingColors;
    void changeTheHueOfTheColor(int newHue){
        anIntegerRepresentingColors = newHue;
    }
    public static void main(String[] args) {
        LearnJava009AlllTheColorOfTheRainbow all = new LearnJava009AlllTheColorOfTheRainbow();
        all.changeTheHueOfTheColor(25);
        System.out.println("all.anIntegerRepresentingColors =" + all.anIntegerRepresentingColors);
    }
}