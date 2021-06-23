function personAndTeacher()  {
    class Person {
        constructor(name,email) {
            this.name = name;
            this.email = email;
        }
    }
    class Teacher extends Person{ // to take on from class Person
        constructor(name,email,subject) { // all params
            super(name,email) // super + all params from parent class
            this.subject = subject
        }
    }

    return {
        Person,
        Teacher
    }
}

console.log(personAndTeacher()) 
