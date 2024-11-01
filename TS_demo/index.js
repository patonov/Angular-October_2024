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
var greetMsg = "Hello, there!";
var a = 100;
var isAuthenticated = false;
var arr = [1, 2, 3, 4];
var x = 125;
console.log(arr.filter(function (x) { return x > 2; }));
var peshoUsera = {
    name: "Pesho",
    age: 29,
};
var users = [
    {
        name: "Pesho",
        age: 30,
    },
    {
        name: "Gosho",
        age: 31,
    },
    {
        name: "Mitko",
        age: 31,
    },
    {
        name: "Vancho",
        age: 32,
    },
];
users.forEach(function (u) {
    console.log(u.name);
});
;
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.age = 18;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getAgeMsg = function () {
        return "This human is ".concat(this.age, " y/o.");
    };
    Person.prototype.getDetails = function () {
        console.log("This person is ".concat(this.firstName, " ").concat(this.lastName, " and ").concat(this.age, " years old."));
    };
    return Person;
}());
var ivanPerson = new Person("Ivan", "Penev");
ivanPerson.getDetails();
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(fName, lName) {
        var _this = _super.call(this, fName, lName) || this;
        _this.grades = [3, 3, 4, 5];
        return _this;
    }
    return Student;
}(Person));
;
var mariaStudentkata = new Student("Maria", "Mariykina");
mariaStudentkata.getDetails();
console.log("=================================");
function getIdentity(id) {
    console.log("The type of id is " + typeof id);
}
getIdentity(133);
