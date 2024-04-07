//Functiones y Métodos Nativos

function sum(valueA, valueB) {
     return valueA + valueB;
};

// Creo una función arrow (alternativa a lo anterior).
function multiplication(valueA, valueB)  {
    return valueA * valueB;
}

// Utilizo (invoco, ejecuto...) las funciones creadas
const sumTwoNumbers = sum(6,4);
const multiplicationTwoNumbers = multiplication(6,4);

console.log(sumTwoNumbers, multiplicationTwoNumbers);

// Metodos JS simples, exemplo:
let todaday;
let someday;
let text;

// Fíjate como hemos declarado tres variables y les asignamos valores más adelante.
today = new Date();
someday = new Date();

someday.setUTCFullYear(2024,0,14); // Investiga el método en mdn (La documentacion oficial en inglés)

if (someday > today) {
    text = "Today is before January 14, 2024.";
} else {
    text = "today is after January 14, 2024.";
}
console.log(text);

// Utilizaando METODOS SIMPLES para os seguintes exercicios

// 1º) Pue contardes cuantasletras tiene tu nombre?
const Name = "Vanessa";
const nameLength = Name.length;
console.log( `My name has ${nameLength}  letters `);


//2- Añade tu apellido a "name" e indica en que posición del string empieza
//(modificando la función prueba a buscar el espacio entre el nombre y el apellido).

const myName = "Vanessa";
const myLastName = "Cardoso";
const myFullName = `${myName} ${myLastName}`;
const spaceIndex = myFullName.indexOf(" ");

console.log(`Your last name starts on position ${spaceIndex + 1}.`);


//3- Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre (lo que haya antes del espacio):

const frase = "Sou Abencoada";
const letterMedia = frase[7];
console.log(letterMedia);







