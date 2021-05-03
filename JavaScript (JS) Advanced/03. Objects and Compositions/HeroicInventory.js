function hero(input) {
    let heroData = {}
    let result = []
    for (let line of input) {
        let [name,level,itemsStash] = line.split(' / ');
        level = Number(level);
        // if there are items at all, split them, if not - []
        items = itemsStash ? itemsStash.split(", ") : []
        heroData = {
            name,
            level,
            items
        }
        result.push(heroData)
        
    }
    
    return JSON.stringify(result)
}

console.log(hero(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
))
