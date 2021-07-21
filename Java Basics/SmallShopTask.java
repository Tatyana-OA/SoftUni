import java.util.Scanner;
import java.util.SortedMap;

/**
 * Created by tatya on 1/21/2017.
 */
public class SmallShopTask {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        System.out.println("Enter a product:");
        String product = console.nextLine();
        System.out.println("Enter a city:");
        String city = console.nextLine();
        System.out.println("Enter a quantity:");
        Double quantity = Double.parseDouble(console.nextLine());

        double price = 0;

        if (city.equals("Sofia")) {
            if (product.equals("coffee"))
                price = 0.50;
         else if (product.equals("water")) {
            price = 0.80;
        } else if (product.equals("beer")) {
            price = 1.20;
        } else if (product.equals("sweets")) {
            price = 1.45;
        } else if (product.equals("peanuts")) {
            price = 1.60;
        } }


        if (city.equals("Plovdiv"))
        {
            if (product.equals("coffee"))
                price = 0.40;

        else if (product.equals("water")) {
            price = 0.70; }
        else if (product.equals("beer")) {
            price = 1.15; }
        else if (product.equals("sweets")) {
            price = 1.30; }
        else if (product.equals("peanuts")) {
            price = 1.50; } }

        if (city.equals("Varna"))
        {
            if (product.equals("coffee"))
                price = 0.45;

        else if (product.equals("water")) {
            price = 0.70; }
        else if (product.equals("beer")) {
            price = 1.10; }
        else if (product.equals("sweets")) {
            price = 1.35; }
        else if (product.equals("peanuts")) {
            price = 1.55; } }

            double total = price*quantity;
        System.out.println(total);

    }
}
