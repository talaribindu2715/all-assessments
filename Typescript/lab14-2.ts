class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound(): void {
    console.log("Animal makes a sound");
  }
}
class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name);          
    this.breed = breed;
  }
  makeSound(): void {
    console.log("Woof! Woof!");
  }
}
const animal1 = new Animal("Generic Animal");
animal1.makeSound();
const dog1 = new Dog("Bruno", "Labrador");
console.log("Dog Name:", dog1.name);
console.log("Breed:", dog1.breed);
dog1.makeSound();