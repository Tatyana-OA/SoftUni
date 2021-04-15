function solve(input){
    let users = {};

    for (line of input) {
        if (line===`Statistics`) {
            break;
        }
    let [action, userName,message] = line.split("->")
    //console.log(action,userName,message)
    if (action===`Add`) {
        if (!users.hasOwnProperty(userName)) {
            users[userName] = {
                emails : []
            }
        }else {
            console.log(`${userName} is already registered`)
        }
    }
    else if (action===`Send`) {
        users[userName].emails.push(message)
    }
    else if (action===`Delete`) {
        if (users.hasOwnProperty(userName)) {
            delete users[userName];
        } else {
            console.log(`${userName} not found!`)
        }
    }
    }
    //console.log(users)
    //sort desc count of emails, asc name
    let toArr = Object.entries(users)
    //console.log(toArr)
    let sorted = toArr.sort((a,b) =>{
        let userA=a[0];
        let userB=b[0];
      
        let emailsA = Object.values(a[1])[0].length
        let emailsB = Object.values(b[1])[0].length
        
        

        return emailsB-emailsA || userA.localeCompare(userB)
    })
  //  console.log(sorted)
    console.log(`Users count: ${sorted.length}`)
    for (user of sorted) {
        let userName = user[0];
        console.log(userName)
        let emailsArr = Object.values(user[1])
       // console.log(emailsArr)
        for (email of emailsArr) {
            for (single of email) {
                if (single.length>0) {
                    console.log(`   - ${single}`)
                }
                
            }
        }
    }

}
solve(["Add->Mike",
    "Add->George",
    "Send->George->Hello World",
    "Send->George->Some random test mail",
    "Send->Mike->Hello, do you want to meet up tomorrow?",
    "Send->George->It would be a pleasure",
    "Send->Mike->Another random test mail",
    "Send->Mike->It would be a pleasure",
    "Send->Mike->It would be a pleasure",
    "Statistics"])


    // solve(["Add->Mike",
    //     "Add->George",
    //     "Send->George->Hello World",
    //     "Send->George->Your loan is overdue",
    //     "Add->Mike",
    //     "Send->Mike->Hello, do you want to meet up tomorrow?",
    //     "Delete->Peter",
    //     "Send->George->I'm busy",
    //     "Send->Mike->",
    //     "Delete->George",
    //     "Statistics"])

        // solve (["Add->Annie",
        //     "Add->George",
        //     "Send->George->Hello World",
        //     "Send->George->Some random test mail",
        //     "Send->Annie->Hello, do you want to meet up tomorrow?",
        //     "Send->George->It would be a pleasure",
        //     "Send->Annie->Another random test mail",
        //     "Delete->Annie",
        //     "Delete->George",
        //     "Statistics"])
