function solve (grade) {
    if (grade<3) {
        console.log (`Fail (2)`)
    } else if (grade>=3 && grade <=3.49) {
        console.log (`Poor (${grade.toFixed(2)})`)
    }else if (grade>=4 && grade <=4.49) {
        console.log (`Good (${grade.toFixed(2)})`)
    }else if (grade>=4.50 && grade <=5.49) {
        console.log (`Very good (${grade.toFixed(2)})`)
    }else if (grade>=5.50 && grade <=6.00) {
        console.log (`Excellent (${grade.toFixed(2)})`)
    }
}
solve (3.33)
solve (4.50)
solve (2.99)
