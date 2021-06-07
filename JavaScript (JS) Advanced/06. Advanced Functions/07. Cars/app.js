function solve (input) {
    for (let line of input) {
        let [command,name,...args] = line.split(" ")
       // console.log(command, name, args)
       if (command==='create') {
           if (args.length>0) {
            let inheritWho = args[1]
            createInherit(name,inheritWho)
           } else {
            create(name)
           }
       } else if (command==='set') {
           if (args[0]=='color') {
               let color = args[0]
               let colorType = args[1]
               setColor(name,color,colorType)
           } else {
               let model = args[0]
               let state = args[1]
               setModel(name,model,state)
           }
       } else {
           print(name)
       }
    }
    function create (objName) {
        objName= new Object()
    }
    function createInherit (objName,someOtherName) {
        someOtherName = Object.create(objName)
    }
    function setModel (objName,model,state) {
        objName[model]=state
    }
    function setColor (objName,color,colorType) {
        objName[color]=colorType
    }
    function print (objName) {
        console.log(objName)
    }

}

solve (['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
)
