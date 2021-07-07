//alert('A staticly loaded js script that works!')

document.querySelector('.cube-list').addEventListener('click',(e) => {
    if (e.target.tagName=='BUTTON') {
        const foldable =  e.target.parentNode.querySelector('.cube-description')
        if (foldable.style.display=='block') {
            foldable.style.display='none';
            e.target.textContent = 'SEE MORE'
        }else  {
            foldable.style.display='block'
            e.target.textContent = 'SEE LESS'
        }
    }
})

