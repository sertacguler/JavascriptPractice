class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showInfos() { console.log("Name : " + this.name + ", Age : " + this.age); }
}

class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    toString() {
        console.log("Employee");
    }
}

const emp = new Employee("Sertac", 25, 4000);

emp.showInfos();
emp.toString();