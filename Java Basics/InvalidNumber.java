import java.util.Scanner;

/**
 * Created by tatya on 1/21/2017.
 */
public class InvalidNumber {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int number= Integer.parseInt(console.nextLine());
        boolean isinrange = (number>= 100 && number <=200 ) || (number == 0);
        if (!isinrange)
        // if (!(number>= 100 && number <=200 ) || (number == 0))
        {
            System.out.println("");
        }
        else if (number <100 || number>200)
        {
            System.out.println("invalid");
        }
    }
}
