function solve (initialPoints) {
    initialPoints=Number(initialPoints);
    let addedPoints= 0.0; // когато ще натрупваме стойност, създаваме отгоре с "let", после я "запълваме" без "let"
    if (initialPoints<=100) {
        addedPoints = 5;  
        
    } else if (initialPoints>100 && initialPoints<=1000) {
        addedPoints= 0.2*initialPoints;
      
    } else if (initialPoints>1000) {
        addedPoints= 0.1*initialPoints;
        
    }
    if (initialPoints%2==0) {
        addedPoints=addedPoints+1;
    } else if (initialPoints%10==5) { // Дали завършва на 5
        addedPoints=addedPoints+2;
    }

    console.log(addedPoints);
    console.log(addedPoints+initialPoints)
}
solve ("20")
