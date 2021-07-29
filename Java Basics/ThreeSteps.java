import java.util.Scanner;

/**
 * Created by tatya on 2/20/2017.
 */
public class ThreeSteps {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int n = Integer.parseInt(console.nextLine());
        for (int i = 1; i <=n ; i =i+3) {
            System.out.println(i);

        }
    }
}
