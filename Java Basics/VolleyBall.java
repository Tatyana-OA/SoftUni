import java.util.Scanner;

/**
 * Created by tatya on 1/22/2017.
 */
public class Volleyball {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String year = console.nextLine();
        int p =Integer.parseInt(console.nextLine());
        int h = Integer.parseInt(console.nextLine());
        // 48 - h = weekends in Sofia
        // (weekends in Sofia* 3/4 )+ 2/3p- Saturdays he plays in Sofia
        // h - broi na igrite v rodniq grad
        // (h+ weekends in Sofia * 3/4 + 2/3p) - igri za normalna
        // (h + weekends in Sofia * 3/4 + 2/3p) + 0.15 (2/3p+ h + weekends in Sofia* 3/4) - igrite za visokosna

       Double WeekendsInSofia = 48.00-h;
        Double SaturdaysHePlaysInSofia = (WeekendsInSofia *3.00/4.00) + (2.00/3.00*p);
        Double IgriNormalna = h + SaturdaysHePlaysInSofia;
        Double IgriVisokosna = IgriNormalna + (0.15 *(IgriNormalna));

        if (year.equals("leap"))
        {
            System.out.printf("%.0f",Math.floor(IgriVisokosna));
        }
        else if (year.equals("normal"))
        {
            System.out.printf("%.0f",Math.floor(IgriNormalna));
        }

    }
}
