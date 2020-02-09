/*
function Employee(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
}
Employee.prototype.showInfos = () => console.log("Name : " + this.name + "Age : " + this.age + "Salary : " + this.salary);

const emp = new Employee("Mustafa", 25, 4000);

console.log(emp);
*/

class Employee {

    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    showInfos = () => console.log("Name : " + this.name + ", Age : " + this.age + ", Salary : " + this.salary);

}

const emp = new Employee("Sertac", 28, 4000);

console.log(emp);
emp.showInfos();