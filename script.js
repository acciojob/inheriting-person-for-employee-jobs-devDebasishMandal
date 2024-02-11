class Person{
	constructor(name, age) {
		this._name=name;
		this._age=age;
	}
	greet(){
		console.log(`Hello, my name is ${this._name}, I am ${this._age} years old.`);
	}
} 

class Employee extends Person  {
	constructor(jobTitle){
		super(name,age);
		this._jobTitle=jobTitle;
	}
	jobGreet(){
		console.log(`Hello, my name is ${this._name}, I am ${this._age} years old, and my job title is ${this._jobTitle}.`);
	}
}
// Hello, my name is Alice and I am 25 years old.
const person = new Employee("Bob", 30, "Manager");
const employee = new Person("Alice", 25); 


// Do not change code below this line
window.Person = Person;
window.Employee = Employee;