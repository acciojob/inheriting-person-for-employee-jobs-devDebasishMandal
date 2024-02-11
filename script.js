class Person{
	constructor(name, age) {
		this.name=name;
		this.age=age;
	}
	greet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
	}
} 

class Employee extends Person  {
	constructor(name,age,jobTitle){
		super(name,age);
		this.jobTitle=jobTitle;
	}
	jobGreet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this._jobTitle}.`);
	}
}
// Hello, my name is Alice and I am 25 years old.
const person = new Employee("Bob", 30, "Manager");
const employee = new Person("Alice", 25); 


// Do not change code below this line
window.Person = Person;
window.Employee = Employee;