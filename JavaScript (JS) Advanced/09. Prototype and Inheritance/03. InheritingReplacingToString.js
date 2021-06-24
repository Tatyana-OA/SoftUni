function toStringExtension()  {
    class Person {
        constructor(name,email) {
            this.name = name;
            this.email = email;
        }
        toString() {
            let className = this.constructor.name // this way even though inherited, Person will be Person, teacher will be Teacher an so on.
            return `${className} (name: ${this.name}, email: ${this.email})`
        }
    }
    class Teacher extends Person{ // to take on from class Person
        constructor(name,email,subject) { // all params
            super(name,email) // super + all params from parent class
            this.subject = subject
        }
        
        toString() {
            return `${super.toString().slice(0,-1)}, subject: ${this.subject})` // super.toString() calls everything from the inherited toString
            // slice(0,-1) gets rid of a ")" at the end so it can be added with the subject
        }
    }
    class Student extends Person {
        constructor(name,email,course) {
            super(name,email);
            this.course=course
        }
        toString() {
            return `${super.toString().slice(0,-1)}, course: ${this.course})`
        }
    }
    return {
        Person,
        Teacher,
        Student
    }

}

let person = new Person("Maria", "maria@yahoo.bg");
let teacher = new Teacher("Ivan", "ivan@ivan.bg", "history");
let student = new Student("Pesho", "pesho@gmail.com", "Math");
console.log(person.toString());
console.log(teacher.toString());
console.log(student.toString());
