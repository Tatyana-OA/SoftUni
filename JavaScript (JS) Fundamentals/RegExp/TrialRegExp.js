function remove(input){
    let regex= /mushy/g
    let newStuff = input.replace(regex,"sluncho")
    console.log(newStuff)
}
remove('mushy fluffs mushy puffs mushy slushy')
