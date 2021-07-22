import java.util.Scanner;

/**
 * Created by tatya on 3/9/2017.
 */
public class CelciusToFahrenheit {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double degrees = Double.parseDouble(console.nextLine());
        double formula = degrees*1.8 + 32;
        System.out.printf("%.2f", formula);
    }
}
