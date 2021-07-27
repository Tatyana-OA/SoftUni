import java.util.Scanner;

/**
 * Created by tatya on 2/20/2017.
 */
public class NumberInTheHundredRange {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        System.out.print("Enter a number in the range [1...100]: ");
        int n = Integer.parseInt(console.next());

        while (n <1 || n>100) {

            System.out.println("Invalid number");
            System.out.print("Enter a number in the range [1...100]: ");
             n= Integer.parseInt(console.next());
        }

                System.out.println("The number is: " + n);

    }
}
