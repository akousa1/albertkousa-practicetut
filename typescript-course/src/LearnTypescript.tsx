import React from "react";

const LearnTypescript = () => {
  // Basic Types
  let id: number = 5;
  // id = '5'; // Throws error as type string not assignable to type number
  id = 5; // Works fine
  console.log("Id: ", id); //ID: 5

  let company: string = "Albertkousa";
  console.log("Company: ", company); //Company: Albertkousa

  let isPublished: boolean = true;
  console.log("Is Published: ", isPublished); //Is Published: true

  let x: any = "Hello";
  console.log("X: ", x);

  let ids: number[] = [1, 2, 3, 4, 5];
  console.log("IDs: ", ids); //IDs: [1, 2, 3, 4, 5]
  //ids.push('6'); // Throws error as type string not assignable to type number
  let arr: any[] = [1, true, "Hello"];
  console.log("Arr: ", arr); //Arr: [1, true, "Hello"]

  // Tuple
  let person: [number, string, boolean] = [1, "Brad", true];
  console.log("Person: ", person); //Person: [1, "Brad", true]

  // Tuple Array
  let employee: [number, string][];
  employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"],
  ];
  console.log("Employee: ", employee);
  //Employee: [[1, "Brad"], [2, "John"], [3, "Jill"]]

  // Union
  let pid: string | number = 22;
  pid = "22";
  console.log("PID: ", pid); //PID: 22

  // Enum
  enum Direction1 {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right",
  }
  console.log("Direction1: ", Direction1.Up); //Direction1: Up
  //Below variables will have been set to their respective string values

  // Objects
  type User = {
    id: number;
    name: string;
  }; //This is a type alias for an object with id and name properties
  const user: User = {
    id: 1,
    name: "John",
  }; //This is an object of type User

  // Type Assertion
  let cid: any = 1;
  let customerId = cid as number; //This is a type assertion that tells
  // the compiler that cid is of type number

  //customerId = '1'; // Throws error as type string not assignable to
  // type number

  // Functions
  function addnum(x: number, y: number): number {
    return x + y;
  } //This is a function that takes two parameters x and y of type number
  // and returns a number
  console.log("Add Num: ", addnum(1, 2)); //Add Num: 3

  // Void
  function log(message: string | number): void {
    console.log(message);
  } //This is a function that takes a parameter message of type string
  //or number

  log("Hello World"); //Hello World

  // Interfaces
  interface UserInterface {
    readonly id: number; //This property is read-only and cannot be 
    //changed
    name: string;
    age?: number; //this property is optional and may or may not be
    //present
  } //This is an interface that defines the shape of an object with id
  //and name properties

  const user1: UserInterface = {
    id: 1,
    name: "John",
  }; //This is an object of type UserInterface

  interface MathFunc {
    (x: number, y: number): number; //This is a function that takes two parameters x and y of type number
  } //and returns a number

  const add: MathFunc = (x: number, y: number): number => x + y; //This is
  //a function that takes two parameters x and y of type number
  const sub: MathFunc = (x: number, y: number): number => x - y; //This is
  //a function that takes two parameters x and y of type number

  interface PersonInterface {
    id: number;
    name: string;
    age?: number; //this property is optional and may or may not be
    //present
  }
  // Classes
  class Person {
    id: number;
    //if i want to make the name property private,
    //  i can use the private keyword and it will not be accessible
    // outside the class
    //i can also use the protected keyword and it will be
    // accessible only within the class and its subclasses
    name: string;

    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
    register() {
      return `${this.name} is now registered`;
    }
  }
  const albert = new Person(1, "Albert Kousa");
  const john = new Person(2, "John Doe");

  console.log("Albert: ", albert); //Albert: Person {id: 1, name: "Albert Kousa"}
  console.log("John: ", john); //John: Person {id: 2, name: "John Doe"}

  console.log(albert.register()); //Albert Kousa is now registered
  // Subclasses
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'Shawn', 'Developer')

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['brad', 'John', 'Jill'])

//strArray.push(1) // Throws error
  return <div></div>;
};

export default LearnTypescript;
