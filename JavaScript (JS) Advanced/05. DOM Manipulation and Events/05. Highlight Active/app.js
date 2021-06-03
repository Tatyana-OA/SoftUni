function focus() {
    // select all input fields and add a listener to each one to check if focused
    let inputFields = Array.from(document.getElementsByTagName('input')).forEach(input => {
        input.addEventListener('focus', onFocus)
        input.addEventListener('blur', onBlur)
    })
    // for focus and blur, select the field's parent and attach class to it
    function onFocus(ev) {
        //ev.target is the input, it's parentNode is the div
       ev.target.parentNode.className = 'focused'

    }

    function onBlur(ev) {
        ev.target.parentNode.className = ''
    }
}
