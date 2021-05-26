function encodeAndDecodeMessages() {
    let main = document.querySelector('main')
    main.addEventListener('click', onClick)

    function onClick (ev) {
        let encodeIt = ev.currentTarget.querySelectorAll('button')[0]
        let decodeIt = ev.currentTarget.querySelectorAll('button')[1]
        let encodedMessage = ''
        let decodedMessage = ''
        let textArea = encodeIt.parentNode.querySelector('textarea')
        let textAreaTwo = decodeIt.parentNode.querySelector('textarea')
        if (ev.target === encodeIt) {
            for (let el of textArea.value) {
                let ascii = Number(el.charCodeAt());
                ascii+=1
                encodedMessage+=String.fromCharCode(ascii)
            }
            textAreaTwo.value = encodedMessage
            textArea.value = ''
        }else if (ev.target ===decodeIt) {
        let received = textAreaTwo.value;
        console.log(received)
        for (let el of received) {
            let ascii = Number(el.charCodeAt());
            ascii-=1
            decodedMessage+=String.fromCharCode(ascii)
        }
        textAreaTwo.value = decodedMessage
            
            console.log(`${decodedMessage}`)
        }
    }
}
