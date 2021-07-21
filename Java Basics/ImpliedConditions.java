import java.util.Scanner;

/**
 * Created by tatya on 1/21/2017.
 */
public class ImpliedConditons {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        boolean condition1 = true;
        boolean condition2 = false;
        // boolean holds only true or false

        if (condition1) // ne slagame == true, zashtoto gore e true i e boolean
        {
            System.out.println("Condition1 Triggered");
            if (condition2)
            {
                System.out.println("Condition2 Triggered");
            }
            else
            {
                System.out.println("Something fishy!");
            }
        }
    }
}
