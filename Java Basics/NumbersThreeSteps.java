import java.util.Scanner;

/**
 * Created by tatya on 2/20/2017.
 */
public class NumbersThreeSteps {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int n = Integer.parseInt(console.nextLine());
        for (int i = n; i >=1 ; i--) {
            System.out.println(i);

        }
    }
}
