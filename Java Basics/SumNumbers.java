import java.util.Scanner;

/**
 * Created by tatya on 2/4/2017.
 */
public class Sum_Numbers {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int numbercount = Integer.parseInt(console.nextLine());
        int sum = 0;
        for (int i = 0; i <  numbercount ; i++) {

        int currentnumber = Integer.parseInt(console.nextLine());
        sum += currentnumber;
        }
        System.out.println(sum);
    }
}
