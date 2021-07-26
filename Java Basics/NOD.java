import java.util.Scanner;

/**
 * Created by tatya on 2/20/2017.
 */
public class NOD {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int a = Integer.parseInt(console.nextLine());
        int b = Integer.parseInt(console.nextLine());

        int biggerNumber = Math.max(a, b);

        while (a% biggerNumber !=0 || b % biggerNumber !=0){
            biggerNumber--;

        }
        System.out.println(biggerNumber);
    }
}
