/* 

Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.*/
const arrEG = [1,1,2,3,4,3,5,5]
const printUniqNumArr = arr => [... new Set(arr)]
console.log(printUniqNumArr(arrEG))