/* 
Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.
*/

const sumOfEvenNums = (numArr) => {
    return numArr.filter(i => i % 2 == 0).reduce((previousValue, currentValue, currentIndex, array) => {
        return currentValue + previousValue
    }, 0)
}

console.log(sumOfEvenNums([1, 2, 3, 4, 5, 6, 7, 8]))