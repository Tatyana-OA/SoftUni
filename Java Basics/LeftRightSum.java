import java.util.Scanner;

/**
 * Created by tatya on 2/4/2017.
 */
public class Left_Right_Sum {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int n= Integer.parseInt(console.nextLine());
        int leftsum = 0;
        int rightsum =0;

        for (int i = 0; i <n ; i++) {
    int currentNum = Integer.parseInt(console.nextLine());
    leftsum += currentNum;
        }
        for (int i = 0; i <n ; i++) {
            int currentNum = Integer.parseInt(console.nextLine());
            rightsum += currentNum;
        }
        if (leftsum==rightsum)
        {
            System.out.println("Yes, sum = " + leftsum);
        }
else
        {
            System.out.println("No, diff = " + Math.abs(leftsum-rightsum));
        }
    }}
