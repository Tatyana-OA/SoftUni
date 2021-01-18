function solveArea (type, measurementOne, measurementTwo)
{
    measurementOne=Number(measurementOne)
    measurementTwo=Number(measurementTwo)
    if (type=="square") {
        let squareArea= measurementOne*measurementOne;
        console.log (squareArea.toFixed(3))
    }else if (type=="rectangle") {
        let rectangleArea = measurementOne*measurementTwo;
        console.log(rectangleArea.toFixed(3))
    } else if (type=="circle") {
        let circleArea = measurementOne*measurementOne*Math.PI;
        console.log (circleArea.toFixed(3))
    } else if (type=="triangle") {
        let triangleArea = measurementOne*measurementTwo/2;
        console.log(triangleArea.toFixed(3))
    }
}
solveArea("triangle",
"4.5",
"20")
