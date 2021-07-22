
import java.util.Scanner;
public class Converter_Of_currencies {

    // TODO Auto-generated constructor stub

    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double BGN=1;
        double USD=1.79549;
        double EUR=1.95583;
        double GBP=2.53405;
        double transfer =0;
        double inputValute1=0;
        double out_valute1 = 0;
        double  t =Double.parseDouble(console.nextLine());
        String inputValute = console.nextLine();
        String out_valute =console.nextLine();

        if (inputValute.equals("BGN")) {
            inputValute1 = BGN;
        }
        if (inputValute.equals("USD")){
            inputValute1 = USD;
        }
        if (inputValute.equals("EUR")){
            inputValute1 = EUR;
        }
        if (inputValute.equals("GBP")){
            inputValute1 = GBP;
        }
        if (out_valute.equals("BGN")){
            out_valute1 = BGN;}
        if (out_valute.equals("USD")){
            out_valute1 = USD;
        }
        if (out_valute.equals("EUR")) {
            out_valute1 = EUR;
        }
        if (out_valute.equals("GBP")){
            out_valute1 = GBP;

        }


        if (inputValute.equals("EUR")|| inputValute.equals("USD") || inputValute.equals("GBP") ){

            transfer=t*inputValute1/out_valute1;
        }
        if (inputValute.equals("BGN") ) {
            transfer=t/out_valute1;
        }

        System.out.printf("%.2f %s", transfer, out_valute);


    }}
