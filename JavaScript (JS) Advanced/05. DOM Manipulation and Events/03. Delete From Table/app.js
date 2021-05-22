function deleteByEmail() {
    let inputMail = document.querySelector('input[name="email"]').value;
    let rows = Array.from(document.querySelectorAll('tbody tr'))
    let result = document.getElementById('result')
    let found = false;
    for (row of rows) {
        let td = row.children[1].textContent
        if (inputMail===td) {
            found = true;
            row.remove();
            result.textContent = 'Deleted.'
        }
    }
    if (found!=true) {
        
        result.textContent = 'Not found.'
    }
    console.log(rows)
    
}
