function solve(input){
    let unmodifiedKey = input.shift();
    for (let command of input) {
        if (command==='Generate') {
            console.log(`Your activation key is: ${unmodifiedKey}`)
            break;
        }
        let [action,...args]=command.split(">>>")
        if (action==='Slice') {
            let startingIndex = args[0];
            let endIndex = args[1];
            let slicedPart = unmodifiedKey.substring(startingIndex,endIndex)
            unmodifiedKey = unmodifiedKey.replace(slicedPart,"")
            console.log(unmodifiedKey)
        }else if (action==='Flip'){
            let toMode = args[0];
            let startAt = args[1];
            let endAt = args[2];
            let toChangeMode = unmodifiedKey.substring(startAt,endAt);
            // console.log(toChangeMode)
            if (toMode==='Upper'){
                toChangeModeUppered=toChangeMode.toUpperCase();
                unmodifiedKey = unmodifiedKey.replace(toChangeMode,toChangeModeUppered)
            }else {
                toChangeModeLowered=toChangeMode.toLowerCase();
                unmodifiedKey = unmodifiedKey.replace(toChangeMode,toChangeModeLowered)
            }
            console.log(unmodifiedKey)
        }else if (action==='Contains') {
            let check = unmodifiedKey.includes(args[0])
            if (check) {
                console.log(`${unmodifiedKey} contains ${args[0]}`)
            } else {
                console.log(`Substring not found!`)
            }
        }
    }


}
// solve(['abcdefghijklmnopqrstuvwxyz',
//     'Slice>>>2>>>6',
//     'Flip>>>Upper>>>3>>>14',
//     'Flip>>>Lower>>>5>>>7',
//     'Contains>>>def',
//     'Contains>>>deF',
//     'Generate']
//     )

    solve(['134softsf5ftuni2020rockz42',
        'Slice>>>3>>>7',
        'Contains>>>-rock',
        'Contains>>>-uni-',
        'Contains>>>-rocks',
        'Flip>>>Upper>>>2>>>8',
        'Flip>>>Lower>>>5>>>11',
        'Generate',
        ])
