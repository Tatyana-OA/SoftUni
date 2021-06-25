function solve () {

    let tasks = {
        'Junior' : [' is working on a simple task.',],
            'Senior': [' is working on a complicated task.',
                       ' is taking time off work.',
                    ' is supervising junior workers.'],
                'Manager': [' scheduled a meeting.',
                ' is preparing a quarterly report.']

    }
    class Employee{
        constructor(name,age) {
            this.name = name;
            this.age = age;
            this.salary = 0
            this.tasks = []
        }
        work () {
            let currentTask = this.tasks.shift()
           console.log(`${this.name}${currentTask}`)
           this.tasks.push(currentTask)
        }
        collectSalary () {
            console.log(`${this.name} received ${this.salary} this month.`)
        }

    }
    class Junior extends Employee{
        constructor(name,age) {
            super(name,age)
            this.tasks = tasks.Junior
        }
    }
    class Senior extends Employee{
        constructor(name,age) {
            super(name,age)
            this.tasks = tasks.Senior
        }
    }
    class Manager extends Employee{
        constructor(name,age) {
            super(name,age)
            this.dividend = 0
            this.tasks = tasks.Manager
        }
        collectSalary () {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`)
        }

    }




    return {Employee,Junior,Senior,Manager}
}

let result = solve();

var guy1 = new result.Junior('dragan', 23);

var guy2 = new result.Senior('petkan', 24);


guy2.work()
guy2.work()
guy2.work()
guy2.work()
guy2.work()
guy2.work()
guy2.work()

