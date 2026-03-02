var Student2 = /** @class */ (function () {
    function Student2(id, name) {
        this.id = id; // allowed: assigned in constructor
        this.name = name;
    }
    return Student2;
}());
// Create object
var student1 = new Student2(1, "Bindu");
// Print values
console.log("ID:", student1.id);
console.log("Name:", student1.name);
