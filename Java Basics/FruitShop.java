import java.util.Scanner;

/**
 * Created by tatya on 1/21/2017.
 */
public class FruitSHop {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String fruit = console.nextLine();
        String day = console.nextLine();
        Double quantity = Double.parseDouble(console.nextLine());
        boolean days = (day.equals("Monday")|| day.equals("Tuesday")|| day.equals("Wednesday")|| day.equals("Thursday")|| day.equals("Friday") || day.equals("Saturday")|| day.equals("Sunday"));
        boolean fruits = (fruit.equals("apple") || (fruit.equals("banana")||(fruit.equals("pineapple")||(fruit.equals("kiwi")||(fruit.equals("orange")||(fruit.equals("grapefruit")||(fruit.equals("grapes"))))))));
    if (day.equals("Monday")|| day.equals("Tuesday")|| day.equals("Wednesday")|| day.equals("Thursday")|| day.equals("Friday"))
    {
        if (fruit.equals("apple"))
        {

            System.out.printf("%.2f",quantity *1.20);
        }
        else if (fruit.equals("banana"))
        {

            System.out.printf("%.2f",quantity *2.50);
        }
        else if (fruit.equals("orange"))
        {

            System.out.printf("%.2f",quantity *0.85);
        }
       else if (fruit.equals("grapefruit"))
        {

            System.out.printf("%.2f",quantity *1.45);
        }
       else if (fruit.equals("pineapple"))
        {

            System.out.printf("%.2f",quantity *5.50);
        }
       else if (fruit.equals("kiwi"))
        {

            System.out.printf("%.2f",quantity *2.70);
        }
        else if (fruit.equals("grapes"))
        {

            System.out.printf("%.2f",quantity *3.85);
        }
    }
        if (day.equals("Saturday")|| day.equals("Sunday"))
        {
            if (fruit.equals("apple"))
            {

                System.out.printf("%.2f",quantity *1.25);
            }
            else if (fruit.equals("banana"))
            {

                System.out.printf("%.2f",quantity *2.70);
            }
         else   if (fruit.equals("orange"))
            {

                System.out.printf("%.2f",quantity *0.90);
            }
           else if (fruit.equals("grapefruit"))
            {

                System.out.printf("%.2f",quantity *1.60);
            }
           else if (fruit.equals("pineapple"))
            {

                System.out.printf("%.2f",quantity *5.60);
            }
            else if (fruit.equals("kiwi"))
            {

                System.out.printf("%.2f",quantity *3.00);
            }
          else  if (fruit.equals("grapes"))
            {

                System.out.printf("%.2f",quantity *4.20);
            }
        }
        if ((!days) || (!fruits))
        {
            System.out.println("error");
        }
    }}
