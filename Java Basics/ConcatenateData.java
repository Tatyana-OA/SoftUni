import java.util.Scanner;

/**
 * Created by tatya on 3/9/2017.
 */
public class ConcatenateData {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String name = console.nextLine();
        String surname = console.nextLine();
        int age = Integer.parseInt(console.nextLine());
        String town = console.nextLine();

        System.out.println("You are " + name + " " + surname + ", a " + age + "-years old person from " + town + ".");
    }
}
