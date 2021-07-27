import java.util.Scanner;

/**
 * Created by tatya on 2/20/2017.
 */
public class SumOfDigitsInANumber {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        int num = Integer.parseInt(console.nextLine());
        int last = (num % 10);
        while (last > 0)
        {
            last += last;
          int  wtf = last / 10;
            System.out.println(wtf);
        }

   }




    }

