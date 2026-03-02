class Student {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
let s1 = new Student("Bindu", 20);
console.log("Name:", s1.name);
console.log("Age:", s1.age);