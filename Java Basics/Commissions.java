import java.util.Scanner;
/**
 * Created by tatya on 1/21/2017.
 */
public class Comissions {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String town = console.nextLine();
        Double sales = Double.parseDouble(console.next());
        Double comission = -1.0;
        boolean towns= (town.equals("Sofia") || town.equals("Varna")|| town.equals("Plovdiv"));
        if (town.equals("Sofia")) {
            if (sales >= 0 && sales <= 500) {
                comission = 0.05*sales;
                System.out.printf("%.2f", comission);}
            if (sales > 500 && sales <= 1000) {
                comission = 0.07 * sales;
                System.out.printf("%.2f", comission);}
            if (sales > 1000 && sales <= 10000) {
                comission = 0.08 * sales;
                System.out.printf("%.2f", comission);}
            if (sales >10000) {
                comission = 0.12 * sales;
                System.out.printf("%.2f", comission);}
        }
        else if (town.equals("Varna")) {
            if (sales >= 0 && sales <= 500) {
                comission = 0.045 * sales;
                System.out.printf("%.2f", comission);}
            if (sales >500 && sales <= 1000) {
                comission = 0.075 * sales;
                System.out.printf("%.2f", comission);}
            if (sales > 1000 && sales <= 10000) {
                comission = 0.10 * sales;
                System.out.printf("%.2f", comission);}
            if (sales >10000) {
                comission = 0.13 * sales;
                System.out.printf("%.2f", comission);}
        }
        else  if (town.equals("Plovdiv")) {
            if (sales >= 0 && sales <= 500) {
                comission = 0.055 * sales;
                System.out.printf("%.2f", comission);}
            if (sales > 500 && sales <= 1000) {
                comission = 0.08 * sales;
                System.out.printf("%.2f", comission);}
            if (sales>1000 && sales <= 10000) {
                comission = 0.12 * sales;
                System.out.printf("%.2f", comission);}
            if (sales >10000) {
                comission = 0.145 * sales;
                System.out.printf("%.2f", comission);}

        }
        if ((!towns) || comission<0)
        {

            System.out.printf("error");
        }
    }
}
