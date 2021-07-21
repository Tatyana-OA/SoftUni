import java.util.Scanner;

/**
 * Created by tatya on 1/21/2017.
 */
public class PointOnARectangle {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        Double x1 = Double.parseDouble(console.nextLine());
        Double y1 = Double.parseDouble(console.nextLine());
        Double x2 = Double.parseDouble(console.nextLine());
        Double y2 = Double.parseDouble(console.nextLine());
        Double x = Double.parseDouble(console.nextLine());
        Double y = Double.parseDouble(console.nextLine());

       boolean onx1 = ((x >= x1 && x <= x2) && y.equals(y1));
       boolean onx2 = ((x >= x1 && x <= x2) && y.equals(y2));
       boolean left = (( y >= y1 && y <= y2)&&  x.equals(x1));
        boolean right = ((y >= y1 && y <= y2) && x.equals(x2));


        if ((onx1 || onx2 || left || right))
        {
            System.out.println("Border");
        }
        else {
            System.out.println("Inside / Outside");
        }
    }
}
