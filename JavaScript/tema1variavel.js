//variables 1a actividad pre curso

const name = "Leide"
console.log(name);

let age = 37
console.log(age);

//array Declara tu nombre, tu apellido y tu edad en un array

const student = ["Leide", "Vanessa", "Cardoso", "37 años"]
console.log(student);

//objeto  Declara tu nombre y tu edad dentro de un objeto

const informacionPersonal = {
    firtsName:"Leide Vanessa",
    lastName: "Cardoso",
    age: "37"
};
console.log(informacionPersonal);

// utiliza el array que has creado anteriormente para recorrerlo y mostrar una a una todas las posiciones del array.

for (i = 0; i < student.length; i++ ) {
console.log(student[i]);
}


//Crea una estructura condicional que imprima el número mayor entre dos números.

const a = 37;
const b = 65;

if (a<b) {
    console.log("No tienes edad suficiente para jubilarte.");
}

// Crea otra condicion else if para contemplar la posibilidad de que los dos números sean iguales

const number1 = 18
const number2 = 18

if (number1 != number2) { 
    console.log("The number are diferents!");
    
} else {
    console.log("The numbers are equal!");
}

//Crea una array de 5 numeros, y recorrela, mostrando además un mensaje cuando, esté a la mitad, muestre un mensaje "We are in the middle of loop"

let numbers = [1, 2, 3, 4, 5]

for (i=0; i<numbers.length; i++) {
    if (i===Math.floor(numbers.length / 2)) {
        console.log("we are in the middle of loop")
    }
    console.log(numbers[i]);
}

//Declara tu nombre y tu edad y luego crea un condicional para que en caso de no coincidir con tus datos, mostrar un error

const myName = "Vanessa"
const myAge = "37"

if (myName !== "Luana" || myAge !== "18") {
    console.log("This is not you!");
} else {
    conole.log("Hi! Glad to see you again!");
}

//Crea una array, introduce los datos anteriores y unos cuantos más de forma que al recorrer la array, muestre un mensaje cuando encuentre tus datos.

const data = [
    { name: "Carl", age: 13 },
    { name: "Lia", age: 50 },
    { name: "Johan", age: 42 },
    { name: "Leila", age: 30 },
    { name: "Alice", age: 25 },
    { name: "Vanessa", age: 37 },
    { name: "Sara", age: 28 },
    { name: "John", age: 33 },
]
for (let position = 0; position < data.length; position++) {
    if (data[position].name === "Vanessa" && data[position].age === 37 ) {
        console.log(
            `We found your data! Your name is ${data[position].name} and your age is ${data[position].age}`
            )
    }
}
