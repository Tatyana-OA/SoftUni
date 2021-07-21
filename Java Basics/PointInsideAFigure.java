import java.util.Scanner;

/**
 * Created by tatya on 1/22/2017.
 */
public class PointInsideAFigure {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int h = Integer.parseInt(console.nextLine());
        int x =Integer.parseInt(console.nextLine());
        int y = Integer.parseInt(console.nextLine());
        boolean inside1 = ((x>0 && x< 3*h )&& (y > 0&& y<h));
        boolean inside2 =( y>0 && y< 4*h && x>h && x <2*h);

        boolean border1 = (x==0 && y <= h && y >= h) || (x==h && y<= 4*h && y>=h) ||(x==0 && y <= h);
        boolean border2 = (x==3*h && y <= h && y >= 0) || (x==2*h && y<= 4*h && y>=h);
        boolean border3 = x >= h && x <=2*h && y == 4*h;
        boolean border4 = x >= 0 && x <= 3*h && y==0;
        boolean border5 = y==h && (x >=0 && x<= h) || (x>= 2*h && x<= 3*h) && y==h;

        if (inside1 || inside2)
        {
            System.out.println("Inside");
        }
else if (border1 || border2 || border3 || border4 || border5)
        {
            System.out.println("Border");
        }
        else
        {
            System.out.println("Outside");
        }
    }
}
