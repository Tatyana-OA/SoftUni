import java.util.Scanner;

/**
 * Created by tatya on 1/21/2017.
 */
public class Pupies {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        Double x1 = Double.parseDouble(console.nextLine());
        Double y1 = Double.parseDouble(console.nextLine());
        Double x2 = Double.parseDouble(console.nextLine());
        Double y2 = Double.parseDouble(console.nextLine());
        Double x = Double.parseDouble(console.nextLine());
        Double y = Double.parseDouble(console.nextLine());
        boolean xInside = (x >= x1 && x <=x2);
                boolean yInside = (y>=y1 && y<=y2);
        if (xInside && yInside )
        {
            System.out.println("Inside");
        }
        else
        {
            System.out.println("Outside");
        }
    }
}
