function greetUser(name, title) {
    if (title === void 0) { title = "Mr./Ms."; }
    console.log("Hello, ".concat(title, " ").concat(name, "!"));
}
greetUser("Ravi");
greetUser("Ravi", "Dr.");
