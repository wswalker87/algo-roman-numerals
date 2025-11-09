function toRomanLazy(num) { // 6
  // init a variable output to an empty string
  let output = ""

  // create an object that that maps keys in roman numerals and the value to the arabic numeral //Variable name is romanNumeralToArabic
  let romanNumeralToArabic = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  // variable that has an array with numerals in descending order
  let romanNumeralPriorityOrder = ['M', 'D', 'C', 'L', 'X', 'V', 'I']
  // iterate over romanNumeralPriorityOrder
  for (let letter of romanNumeralPriorityOrder) {
    const arabicNum = romanNumeralToArabic[letter];
    // console.log(arabicNum)
    let numberOfRepeats = (Math.floor(num / romanNumeralToArabic[letter]))
    // console.log(`The number of repeats is ${numberOfRepeats}`)

    for(let i = 0; i < numberOfRepeats; i++){ // init i to 0, if i is less than numOfRepeats>> output letter and subtract the arabic equiv from num, increment the i
        output = output + letter
        num = num - arabicNum
    }
  }

  return output;
}
// console.log(toRomanLazy(6)) // should return VI
// console.log(toRomanLazy(10)) // should return X
// console.log(toRomanLazy(20)) // should return XX
// console.log(toRomanLazy(26)) // should return XXVI


function toRoman(num) {
  // init a variable output to an empty string
  let output = ""

  // create an object that that maps keys in roman numerals and the value to the arabic numeral //Variable name is romanNumeralToArabic
  let romanNumeralToArabic = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  }
  // variable that has an array with numerals in descending order
  let romanNumeralPriorityOrder = ['M', 'CM', 'D', 'CD', 'C', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  // iterate over romanNumeralPriorityOrder
  for (let letter of romanNumeralPriorityOrder) {
    const arabicNum = romanNumeralToArabic[letter];
    // console.log(arabicNum)
    let numberOfRepeats = (Math.floor(num / romanNumeralToArabic[letter]))
    // console.log(`The number of repeats is ${numberOfRepeats}`)

    for(let i = 0; i < numberOfRepeats; i++){
        output = output + letter
        num = num - arabicNum
    }
  }

  return output;

}

// console.log(toRomanLazy(4)); // 'IIII'
// console.log(toRomanLazy(150)); // 'CL'
// console.log(toRomanLazy(944)); // 'DCCCCXXXXIIII'

module.exports = { toRoman, toRomanLazy };
