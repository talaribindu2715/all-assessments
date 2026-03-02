function greetUser(name: string, title: string = "Mr./Ms."): void {
  console.log(`Hello, ${title} ${name}!`);
}
greetUser("Ravi");
greetUser("Ravi", "Dr."); 