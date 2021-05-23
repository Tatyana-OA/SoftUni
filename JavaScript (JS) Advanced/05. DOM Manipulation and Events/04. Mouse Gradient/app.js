function attachGradientEvents() {
    let gradient = document.getElementById('gradient-box')
    gradient.addEventListener('mousemove', gradientMove)
    gradient.addEventListener('mouseout', gradientOut)

    function gradientMove (event) {
        //get the width of the box
        let width = event.target.clientWidth; 
        //X coordinate of the mouse pointer between that event and the padding edge of the target node
        let offSet = event.offsetX;
        // as percentage
        let final = offSet/(width-1)
        //gets rid of the .053953 part
        let percentage = Math.trunc(final*100)
        document.getElementById('result').textContent = `${percentage}%`

    }
    function gradientOut(event) {
        document.getElementById('result').textContent = ''
    }
}
