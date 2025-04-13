/* 
Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.
*/


const peoples = [
    { name: "Alice", age: 28, gender: "female" },
    { name: "Bob", age: 35, gender: "male" },
    { name: "Charlie", age: 22, gender: "non-binary" },
    { name: "Diana", age: 30, gender: "female" },
    { name: "Ethan", age: 40, gender: "male" }
];

const findNmodifyByName = (name, arr) => {
    const modifiePerson = arr.find(i => i.name == name)    
    if (modifiePerson) {
        modifiePerson.age += 5.8
    }
    return arr
}

console.log(findNmodifyByName("Alice",peoples))