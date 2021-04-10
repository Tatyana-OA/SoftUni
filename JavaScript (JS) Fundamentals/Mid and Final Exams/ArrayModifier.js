function modifier(input){
    let array = input.shift().split(" ").map(x => Number(x))

    for (let i=0; i<input.length; i++){
        let command = input[i]
        if (command==='End') {
            break;
        }else {
            let [action, index1, index2]=command.split(" ")

            if (action==='swap') {
                let replaceable = array[index1];
                let replaceable2 = array[index2];
                array.splice(index1,1,replaceable2)
                array.splice(index2,1,replaceable)

            }else if (action==='multiply') {
                array[index1]= array[index1]*array[index2]

            }else if (action==='decrease'){
              for (let j=0; j<array.length; j++){
                  array[j]-=1;
              }
            }
        }
    }
    console.log(array.join(", "))


}
modifier( [
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]
  )
