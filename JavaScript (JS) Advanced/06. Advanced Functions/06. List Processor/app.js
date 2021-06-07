// function solve(input) {
//     let result = []
//     for (line of input) {
//         let [command,string] = line.split(" ")
//         if (command==='add') {
//         result.push(string)
//         }else if (command==='remove') {
//         result = result.filter(x => x!==string)
//         }else if (command==='print') {
//             console.log(result.join(","))
//         }
//     }

// }
// solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])

function solve(input) {
    let innerCollection = [];
    for (const line of input) {
      let [command, str] = line.split(" ");
      if (command === `add`) {
        add(str);
      }
      if (command === `remove`) {
        remove(str);
      }
      if (command === `print`) {
        print();
      }
    }
  
    function add(param) {
      innerCollection.push(param);
    }
    function remove(param) {
      innerCollection = innerCollection.filter((x) => x !== param);
    }
    function print() {
      console.log(innerCollection.join(","));
    }
  }
  solve(["add hello", "add again", "remove hello", "add again", "print"]);
