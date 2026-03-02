var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    return Student;
}());
var s1 = new Student("Bindu", 20);
console.log("Name:", s1.name);
console.log("Age:", s1.age);
