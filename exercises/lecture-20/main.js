let person = {
    name: "Smokey Nagata",
    age: 30
};
console.log("Ім'я:", person.name);
console.log("Вік:", person.age);

person = {
    name: {
        firstName: "Smokey",
        lastName: "Nagata"
    },
    age: 30
};
console.log("Ім'я:", person.name.firstName, person.name.lastName);
console.log("Вік:", person.age);

let bio = {
    display: function() {
        console.log("Ім'я:", person.name.firstName);
        console.log("Прізвище:", person.name.lastName);
        console.log("Вік:", person.age);
    }
}
bio.display();

let introduceSelf = {
    sayHi: function() {
        console.log("Hi! I'm", person.name.firstName);
    }
};
introduceSelf.sayHi("Smokey");

function createPerson(name) {
    return {
        name: name,
        introduceSelf: function() {
            console.log("Hi! I'm", this.name);
        }
    };
}
let person1 = createPerson("Takizawa");
let person2 = createPerson("Yojiro");
person1.introduceSelf(); 
person2.introduceSelf(); 

function Persons(name) {
    this.name = name;
    this.introduceSelf = function() {
        console.log("Hi! I'm", this.name);
    };
}
let mary = new Persons("Mary");
let tom = new Persons("Tom");
mary.introduceSelf();
tom.introduceSelf();  

//визначити, чи містить об'єкт mary властивість під назвою prop.
if ('prop' in mary) {
    console.log("prop +.");
} else {
    console.log("prop -.");
}

let DirtyMartini = {
    english_please: function() {
        console.log("ingredients:");
        console.log("  6 fluid ounces gin");
        console.log("  1 dash dry vermouth (0.0351951ml)");
        console.log("  1 fluid ounce brine from olive jar");
        console.log("  4 stuffed green olives");
    },
    excuse_my_french: function() {
        console.log("ingrédients:");
        console.log("  170.4786 ml de gin");
        console.log("  1 trait de vermouth sec (0.0351951ml)");
        console.log("  28.4131 ml de saumure du pot d'olive");
        console.log("  4 olives vertes farcies");
    }
};

DirtyMartini.english_please(); 
DirtyMartini.excuse_my_french(); 





//цьом ^-^