function fishtank (cmLength, cmWidth, cmHeight, percentage) {
    let area= Number(cmLength*cmWidth*cmHeight); // cm2
    let volumeL = Number(area*0.001) // Volume in liters
    let percentageLoss = 0.01*percentage;
    let afterPercentageLoss = Number(volumeL-(percentageLoss*volumeL));

    console.log (afterPercentageLoss)

}
fishtank ("85","75","47","17")
