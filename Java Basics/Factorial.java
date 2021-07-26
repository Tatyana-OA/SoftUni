import java.util.Scanner;

/**
 * Created by tatya on 2/20/2017.
 */
public class Factorial {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        long n = Integer.parseInt(console.nextLine());
        long fact = 1;
        do {
fact = fact * n;
n--;
        } while (n > 0);
        System.out.println(fact);
        }
    }
