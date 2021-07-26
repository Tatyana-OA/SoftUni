import java.util.Scanner;

/**
 * Created by tatya on 2/4/2017.
 */
public class SmallestNum {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int NumbersCount = Integer.parseInt(console.nextLine());
        int smallest = Integer.MAX_VALUE;
        for (int i = 0; i <NumbersCount ; i++) {
            int currentNum =Integer.parseInt(console.nextLine());
            if (currentNum< smallest) {
            smallest=currentNum;}

        }
        System.out.println(smallest);
    }
}
