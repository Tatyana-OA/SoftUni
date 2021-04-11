function tour(input) {
    let stops = input.shift();

    for (line of input) {
        if (line===`Travel`) {
            console.log(`Ready for world tour! Planned stops: ${stops}`)
            break;
        }
        let [command,...args]=line.split(":")
        if (command===`Add Stop`) {
        let atIndex = args[0];
        let newStop = args[1];
        if (atIndex>=0 && atIndex<stops.length) {
            let firstPart = stops.substring(0,atIndex)
            let lastPart = stops.substring(atIndex,)
            stops = firstPart+newStop+lastPart;
            console.log(stops)
        } else {
            console.log(stops)
        }
        }else if  (command===`Remove Stop`) {
            let startAt = args[0];
            let endAt = Number(args[1]);
            if (startAt>=0 && startAt<stops.length
                && endAt>=0 && endAt<stops.length) {
                    let toRemove = stops.substring(startAt,endAt+1)
                    stops=stops.replace(toRemove,"")
                    console.log(stops)
                }
                else {
                    console.log(stops)
                }

        }else if (command===`Switch`) {
            let oldString = args[0];
            let newString = args[1];
            if (stops.includes(oldString)) {
                let pattern = new RegExp(oldString, "g");
                stops = stops.replace(pattern, newString);
              }
            console.log(stops)
        }
    }

}
tour(['Hawai::Cyprys-Greece',
   'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
    ])
