import java.util.Scanner;

/**
 * Created by tatya on 3/9/2017.
 */
public class TriangleArea {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double a = Double.parseDouble(console.nextLine());
        double h = Double.parseDouble(console.nextLine());
        double result = (a*h)/2;
        System.out.println(result);

    }
}
