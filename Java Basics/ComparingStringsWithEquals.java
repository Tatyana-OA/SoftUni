import java.util.Scanner;

/**
 * Created by tatya on 1/21/2017.
 */
public class ComparingStringsWithEquals {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String colour = console.nextLine();
        String colour2 = console.nextLine();
        if (colour.equals(colour2))
        {
            System.out.println("Equal strings");
        }
        else
        {
            System.out.println("Try again!");
        }
    }
}
