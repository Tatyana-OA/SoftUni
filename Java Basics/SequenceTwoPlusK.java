import java.util.Scanner;

/**
 * Created by tatya on 2/20/2017.
 */
public class SequenceTwoKPlusOne {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int n = Integer.parseInt(console.nextLine());
        int num = 1;
        System.out.println(num);
        for (int i = 1; i <n; i++) {

                num = (num * 2) + 1;
            if ( num <= n) {
                System.out.println(num);
            }
            else if ( num > n)
            {
                break;
            }
        }
    }
}
