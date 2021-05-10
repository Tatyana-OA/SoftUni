function colorize() {
    let tableChildren = document.querySelectorAll('table tr')
    tableChildren = Array.from(tableChildren)
    tableChildren.shift()
    for (let i = 0; i<tableChildren.length; i+=2) {
        let singleRow = tableChildren[i]
        singleRow.style.backgroundColor = 'teal';
    }
}
