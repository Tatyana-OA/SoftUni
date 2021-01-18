function convert (number, mNow, mThen) {
    number=Number(number);
    let result = 0.0;

    if (mNow=="mm" && mThen=="cm") {
        result = number/10;
    } else if (mNow=="mm" && mThen=="m") {
        result =number/1000;
    }else if (mNow=="cm" && mThen=="m") {
        result = number/100;
    }else if (mNow=="cm" && mThen=="mm") {
        result = number*10;
    }else if (mNow=="m" && mThen=="mm") {
        result =number*1000; 
    }else if (mNow=="m" && mThen=="cm") {
        result = number*100;
}
console.log (result.toFixed(3))
}
convert("45", "cm", "mm")
