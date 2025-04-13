/* 
Write a function that determines whether a given year is a leap year.
*/

const findLeapYear = year =>{
    if(year % 400 == 0){
        return true
    }
    if(year % 4 == 0){
        if(year % 100 != 0){
            return true
        }
    }
    return false
}


console.log(findLeapYear(2020));
console.log(findLeapYear(1900));
console.log(findLeapYear(2000));
console.log(findLeapYear(2024));
console.log(findLeapYear(2023));