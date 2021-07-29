import java.util.Scanner;

/**
 * Created by tatya on 12/17/2016.
 */
public class concatenatedata {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String firstname = console.nextLine();
        String lastname = console.nextLine();
        int age = Integer.parseInt(console.nextLine());
        String town = console.nextLine();
       // System.out.printf("You are " + firstname + " " + lastname + ", a" + " " + age  + "-years old person from " + town + ".");

        //"%n" - new line
        //%s - string - text
        // %d - numbers
        //%f - float ; decimals (rounding of decimals  - %.2f - two symbols)
        System.out.printf("You are %s %s, aged %d from %s .",firstname,lastname,age,town);
    }
}
