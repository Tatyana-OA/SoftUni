import java.util.Scanner;

/**
 * Created by tatya on 3/9/2017.
 */
public class USD_To_BGN {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double dollar = Double.parseDouble(console.nextLine());
        double lev = dollar*1.79549;
        System.out.printf("%.2f", lev);
    }
}
