import java.util.Scanner;

/**
 * Created by tatya on 3/9/2017.
 */
public class GreetingsByName {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String name = console.nextLine();
        System.out.println("Hello, " + name + "!");
    }
}
