import java.util.Scanner;

/**
 * Created by tatya on 2/20/2017.
 */
public class SequenceTwoKPlusOneWhile {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int n = Integer.parseInt(console.nextLine());
        int num = 1;
        System.out.println(num);

        while (num <= n)
        {
            num = (2*num) + 1;
            System.out.println(num);
        }
    }
}
