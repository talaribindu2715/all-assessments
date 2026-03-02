class Student2 {
  readonly id: number;   
  name: string;
  constructor(id: number, name: string) {
    this.id = id;        
    this.name = name;
  }
}
const student1 = new Student2(1, "Bindu");
console.log("ID:", student1.id);
console.log("Name:", student1.name);