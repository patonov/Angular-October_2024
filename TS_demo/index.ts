let greetMsg: string = "Hello, there!";
let a: number = 100;
let isAuthenticated: boolean = false;

const arr: number[] = [1, 2, 3, 4];

let x: number | string = 125;

console.log(arr.filter((x) => x > 2));

// interface User {
//     name: string,
//     age: number,
// };

type User = {
    name: string,
    age: number,
}

const peshoUsera: User = {
    name: "Pesho",
    age: 29,
};

const users: User[] = [
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

users.forEach(u => {
    console.log(u.name);
});

interface Human {
    firstName: string;
    lastName: string;
    age: number;
};

class Person implements Human {
    firstName: string;
    lastName: string;
    age: number = 18;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getAgeMsg(): string {
        return `This human is ${this.age} y/o.`;
    }

    getDetails(): void {
        console.log(`This person is ${this.firstName} ${this.lastName} and ${this.age} years old.`);
    }
}

const ivanPerson = new Person("Ivan", "Penev");
ivanPerson.getDetails();

class Student extends Person {
    grades: number[] = [3, 3, 4, 5];

    constructor(fName: string, lName: string) {
        super(fName, lName);
    }
};

const mariaStudentkata = new Student("Maria", "Mariykina");
mariaStudentkata.getDetails();

console.log("=================================");

function getIdentity<T>(id: T){
    console.log("The type of id is " + typeof id);
}

getIdentity<number>(133);