var Student1 = /** @class */ (function () {
    function Student1(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
    Student1.prototype.showRollno = function () {
        console.log("Roll No:", this.rollNo);
    };
    return Student1;
}());
var y = new Student("Bindu", 101);
console.log(s1.name);
s1.showRollno();
