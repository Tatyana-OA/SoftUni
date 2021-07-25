import java.util.Scanner;

/**
 * Created by tatya on 2/4/2017.
 */
public class Even_Odd_Sum {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int n = Integer.parseInt(console.nextLine());
int sumOdd = 0;
int sumEven =0;
        for (int i = 1; i <=n ; i++) {
            int currentn = Integer.parseInt(console.nextLine());
            boolean isEvenPosition = (i % 2 ==0);
            if (isEvenPosition)
            {
                sumEven+= currentn;
            } else {
                sumOdd +=currentn;
            }
            if (sumEven==sumOdd)
            {
                System.out.println("Yes");
                System.out.println("Sum " + sumEven);}

            else {
                System.out.println("No");
                System.out.println("Diff " +Math.abs(sumEven-sumOdd));
            }

        }
    }
}
