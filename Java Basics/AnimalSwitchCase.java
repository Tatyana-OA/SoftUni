
import java.util.Scanner;

/**
 * Created by tatya on 1/21/2017.
 */
public class AnimalSwitchCase {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String animal = console.nextLine();
        switch (animal)
        {
            case "dog" :
                System.out.println("mammal"); break;
            case "crocodile":
            case "tortoise":
            case "snake":
                System.out.println("reptile"); break;
            default:
                System.out.println("unknown");
        }

    }
}
