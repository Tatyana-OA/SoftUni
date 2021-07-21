import java.util.Scanner;

/**
 * Created by tatya on 1/21/2017.
 */
public class MrMissMasterTask {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double  age = Double.parseDouble(console.nextLine());
        String gender = console.nextLine();

        if (gender.equals("f") && age<16)
        {
            System.out.println("Miss");
        }
        else if (gender.equals("f") && age>=16)
        { System.out.println("Ms.");}

       if (gender.equals("m") && age<16)
        {
            System.out.println("Master");
        }
        if (gender.equals("m") && age>=16)
        {
            System.out.println("Mr.");
        }
    }
}
