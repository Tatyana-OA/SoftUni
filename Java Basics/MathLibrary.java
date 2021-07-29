/**
 * Created by tatya on 12/17/2016.
 */
public class MathLibrary {
    public static void main(String[] args) {
        double a = 3.14158;
        System.out.printf("%.2f%n", a);
        System.out.println(Math.round(a));
        System.out.println(Math.ceil(a)); // up -> 4
        System.out.println(Math.floor(a)); // down -> 3

    }
}
