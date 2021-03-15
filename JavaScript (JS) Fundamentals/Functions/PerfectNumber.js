function perf(num) {
    let result = 0;
    let perfectScore = 0;
    let isPerfect = false;
    for (let i=0; i<num; i++) {
        if (result = num%i==0) {
            perfectScore+=i;
            if (perfectScore==num) {
                isPerfect=true;
            }
        }
    }
    if (isPerfect) {
        console.log ("We have a perfect number!")
    } else {
        console.log ("It's not so perfect.")
    }
}
perf (1236498)
perf(2)
