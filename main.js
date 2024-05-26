// Function - Return new string
const newString = (string, valueToReplace, valueToReplaceWith) => {
    let parts = string.split(valueToReplace)
    return parts.join(valueToReplaceWith)
}

let originalString = "Hello, welcome to the world of development";
let replacedString = newString(originalString, "world", "universe");

console.log(replacedString);

// Function - Capitalize Words
const capitalizeWords = (sentence) => {
    return sentence
        .split(' ')
        .map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
        .join(' ');
}

const sentence = "hello, welcome to the universe of javascript";
const capitalizedSentence = capitalizeWords(sentence);
console.log(capitalizedSentence);

// Function - Sort by age
const people = [
    { name: "Tornike", age: 30 },
    { name: "Luka", age: 27 },
    { name: "Giorgi", age: 26 },
    { name: "Avto", age: 32 },
];

const sortByAge = (people) => {
    return people.sort ((a, b) => a.age - b.age);
}

const sortedAges = sortByAge(people);
console.log(sortedAges);