function solve (input) {
    let floors = Number(input[0]) 
    let apartmentsPerFloor = Number(input[1]) 
    let iseven= false;
    let isodd=false;
    let islast=false;

    
    for (let i=floors; i>=1; i--) //    i=1; i<=floors; i++
    {
        for (let j=apartmentsPerFloor-1; j>=0; j-- ) //      j=0; j<apartmentsPerFloor; j++
        {
            if (i%2===0 && i!=floors) {
               
                // console.log(`0${i}${j}`)
               let line = `0${i}${j}`
                process.stdout.write(line + " ");
                
            } else if (i%2!=0 && i!=floors) {
               let line2 = `А${i}${j}`
               // console.log (`А${i}${j}`)
               process.stdout.write(line2 + " ");
            }
            if (i===floors) {
                let line3= `L${i}${j}`
                //console.log ((`L${i}${j}`))
                process.stdout.write(line3 + " ");
            }
            
        }
   
    }
   

    
}

solve (["9", "5"])
