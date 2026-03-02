function greetUser(name, title) {
    if (title === void 0) { title = "mr./ms."; }
    return "Hello," + title + " " + name + "!";
}
console.log(greetUser("Raju"));
console.log(greetUser("Raju", "Dr."));
