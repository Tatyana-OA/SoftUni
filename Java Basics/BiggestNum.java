import java.util.Scanner;

/**
 * Created by tatya on 2/4/2017.
 */
public class BiggestNUM {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int NumbersCount = Integer.parseInt(console.nextLine());
        int largest = Integer.MIN_VALUE;
        for (int i = 0; i <NumbersCount ; i++) {
            int currentnumber = Integer.parseInt(console.nextLine());
            if (currentnumber>largest)
            {
                largest=currentnumber;
            }


        }
        System.out.println(largest);
    }
}
