import java.util.Scanner;

/**
 * Created by tatya on 12/17/2016.
 */
public class aritmetic {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double num1 = Double.parseDouble(scanner.nextLine());
        double num2 = Double.parseDouble(scanner.nextLine());

        //int result = num1 +/- num2;
       // double result = num1 / num2;
        double result = num1 * num2;

        System.out.println(result);
    }
}
// "/" - целочислено деление; не работи
