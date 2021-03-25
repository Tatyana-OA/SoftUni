function solve(arr){
    let heroes = []//масив, в който ще пазим всички герои
    for (const line of arr) {
        //обикаляме инпута, за да деструктурираме и да съберем имена на герои, левъли и предмети
        let [hero, level, items]=line.split(' / ')
        level = Number(level); // по условие да е число
        items = items.split(', ').sort( (a,b) => a.localeCompare(b)).join(', ');
        //items ги сплитваме, за да ги сортираме по азбучен ред без значение от малка/главна, а после пак ги join-ваме, защото така ги изисват

        let heroObj = {
            Hero: hero, // пишем по този начин, защото в условието държат да е с главна буква
            level, //не слагаме стойност за key, защото value и key са едно и също (не се искат главни)
            items //аналогично
        }
        heroes.push(heroObj); 
        // на всяка итерация попълваме големия масив с обекта за всеки hero
    }

    heroes
    .sort((a,b) => a.level - b.level) // последно по условие сортираме output-a по левъли от най-нисък към най-висок; ползваме а., защото сортираме от обект
    .forEach(hero =>{
        console.log(`Hero: ${hero.Hero}`)
        console.log(`level => ${hero.level}`)
        console.log(`items => ${hero.items}`)
    })
}
