import java.util.Scanner;

/**
 * Created by tatya on 3/9/2017.
 */
public class CoordinateSystemRectangleArea {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double x1 = Double.parseDouble(console.nextLine());
        double y1= Double.parseDouble(console.nextLine());
        double x2 = Double.parseDouble(console.nextLine());
        double y2 = Double.parseDouble(console.nextLine());

        double area = Math.abs(x2-x1) * Math.abs(y1-y2);
        double perimeter = 2* Math.abs(x2-x1) + 2* Math.abs(y1-y2);
        System.out.println(area);
        System.out.println(perimeter);
    }
}
