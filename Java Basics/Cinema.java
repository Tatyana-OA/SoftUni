import java.util.Scanner;

/**
 * Created by tatya on 1/21/2017.
 */
public class Cinema {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String movie =console.nextLine();
        int rows = Integer.parseInt(console.nextLine());
        int columns = Integer.parseInt(console.nextLine());
        int result= rows*columns;
        switch (movie)
        {
            case "Premiere":
                System.out.printf("%.2f leva",result*12.00 ); break;
            case"Normal":
                System.out.printf("%.2f leva", result*7.50); break;
            case"Discount":
                System.out.printf("%.2f leva", result*5.00); break;
        }
    }
}
