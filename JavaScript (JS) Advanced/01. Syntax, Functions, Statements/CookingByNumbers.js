function cooking(num,...args){
    num = Number(num)
    let result =0;
    for (arg of args) {
        if (arg==='chop'){
            result = num/2;
            num=result;
            console.log(result)
        }else if (arg==='dice'){
            result = Math.sqrt(num)
            num=result;
            console.log(result)
        }else if (arg==='spice'){
            result = num + 1;
            num=result;
            console.log(num)
        }else if (arg==='bake'){
            result = num*3;
            num=result;
            console.log(result)
        }else if (arg==='fillet') {
            result = 0.8*num;
            num=result;
            console.log(result)
        }
    }

}
//cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
