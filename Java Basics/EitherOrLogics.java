import java.util.Scanner;

/**
 * Created by tatya on 1/21/2017.
 */
public class EitherOrLogics {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String input = console.next();
        if (input.equals("banana") || input.equals("kiwi")
            || input.equals("cherry") || input.equals("grapes")
            || input.equals("lemon") || input.equals("apple"))
        {
            System.out.println("fruit");
        }
        else if (input.equals("tomato") || input.equals("pepper") || input.equals("cucumber")
            || input.equals("carrot"))
        {
            System.out.println("vegetable");

        }
        else {
            System.out.println("unknown");
        }
    }
}
