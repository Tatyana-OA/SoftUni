import java.util.Scanner;

/**
 * Created by tatya on 3/9/2017.
 */
public class InchToCentimeters {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        double n = Double.parseDouble(console.nextLine());
        double result = n*2.54;
        System.out.println(result);

    }
}
