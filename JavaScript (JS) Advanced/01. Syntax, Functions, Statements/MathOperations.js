function operations(one,two,operator) {
    let first= Number(one);
    let second = Number(two);
    let result = 0;

    if (operator==='+') {
        result = first+second;
    }else if (operator==='-'){
        result = first-second;
    }else if (operator==='*'){
        result = first*second
    }else if (operator==='/'){
        result = first/second;
    }else if (operator==='%') {
        result = first%second;
    }else if (operator==='**') {
        result = first**second;
    }
    
    console.log(result)

}
operations(5, 6, '+')
operations(3, 5.5, '*')
