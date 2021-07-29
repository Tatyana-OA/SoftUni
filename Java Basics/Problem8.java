import java.util.Scanner;

/**
 * Created by tatya on 12/17/2016.
 */
public class Problem8 {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double x1 = Double.parseDouble(console.nextLine());
        double y2 = Double.parseDouble(console.nextLine());
        double x2 = Double.parseDouble(console.nextLine());
        double y1 = Double.parseDouble(console.nextLine());


        double result1 = Math.abs((x2) - (x1));
        double result2 = Math.abs ((y2) - (y1));

        double area = Math.abs(result1 * result2);
        double perimeter =Math.abs(2* (result1 + result2));


        System.out.printf(" %s  %s ",area,perimeter);


    }
}
