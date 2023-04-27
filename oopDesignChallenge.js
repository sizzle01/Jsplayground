// Task 1: Code a Person class
class Person{
    constructor(name = 'Tom', age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy
    }

    sleep() {
        this.energy += 10;
    }
    doSomethingFun() {
        this.energy -= 10;
    }
}
// Task 2: Code a Worker class

class Worker extends Person{
    constructor(xp = 0, hourlyWage = 0, name, age, energy) {
        super(name,age, energy)
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }

    sleep() { super.sleep() }

    doSomethingFun() { super.doSomethingFun }

    goToWork() {
        this.xp += 10
    }

}
// Task 3: Code an intern object, run methods
function intern() {
    var intern = new Worker(name = "Bob", age = 21, energy = 110, xp = 0, hourlyWage = 10);
    console.log(intern);
}

// Task 4: Code a manager object, methods
function manager() {
    var manager = new Worker(name = "Alice", age = 30, energy = 130, xp = 100, hourlyWage = 30);
    console.log(manager)
}
intern();
manager();