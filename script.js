// complete this js code
class Person{
	constructor(name, age) {
		this._name=name;
		this._age=age;
	}
	greet(){
		console.log(`Hello, my name is ${this._name}, I am ${this.age} years old.`)
	}
} 

class Employee extends Person  {
	constructor(name, age, jobTitle){
		super(name,age);
		// this._name=name;
		// this._age=age;
		this._jobTitle=jobTitle;
	}
	jobGreet(){
		console.log(`Hello, my name is ${name}, I am ${age} years old, and my job title is ${this._jobTitle}.`)
	}
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
