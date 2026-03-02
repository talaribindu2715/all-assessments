var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        console.log("Animal makes a sound");
    };
    return Animal;
}());
// Child class
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, breed) {
        var _this = _super.call(this, name) || this; // call parent constructor
        _this.breed = breed;
        return _this;
    }
    // Override parent method
    Dog.prototype.makeSound = function () {
        console.log("Woof! Woof!");
    };
    return Dog;
}(Animal));
// Create Animal object
var animal1 = new Animal("Generic Animal");
animal1.makeSound();
// Create Dog object
var dog1 = new Dog("Bruno", "Labrador");
console.log("Dog Name:", dog1.name);
console.log("Breed:", dog1.breed);
dog1.makeSound();
