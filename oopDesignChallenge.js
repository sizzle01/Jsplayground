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
    var worker = new Worker(0, 10, "Bob", 21, 110);

    worker.goToWork();

    return worker;
    
}

// Task 4: Code a manager object, methods
function manager() {
    var manager = new Worker(100, 30, "Alice", 30, 120)

    manager.doSomethingFun();

    return manager;
}
intern();
manager();