function solve (input) {
    let tabs = Number(input[0]); 
    let salary = Number(input[1]); 
    let fbFine= 0;
    let instaFine=0;
    let reddFine=0;
    let fb=150.00;
    let insta=100.00;
    let redd=50.00;
    let salaryLeft=0;

    for (i=2; i<input.length; i++) 
    {
        let randomTab = input[i];
        if (randomTab==="Facebook") {
            fbFine++
        } else if (randomTab==="Instagram") {
            instaFine++;
        } else if (randomTab==="Reddit") {
            reddFine++
        } 
    }
    fb=fb*fbFine;
    insta=insta*instaFine;
    redd=redd*reddFine;

    salaryLeft= salary - (fb+insta+redd);

    if (salaryLeft<=0){
        console.log (`You have lost your salary.`)
    } else {
       
        console.log (salaryLeft)
    }

  
}

solve (["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])
