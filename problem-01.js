/* 
Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.
*/
const people = [
    { name: "Alice", age: 28, gender: "female" },
    { name: "Bob", age: 35, gender: "male" },
    { name: "Charlie", age: 22, gender: "non-binary" },
    { name: "Diana", age: 30, gender: "female" },
    { name: "Ethan", age: 40, gender: "male" }
  ];
const arrOfNmaesFn = (arr)  =>{
    return arr.filter((i)=> i.gender !== "female").map(i=>i.name)
}
console.log(arrOfNmaesFn(people))