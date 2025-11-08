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

  for (letter in romanNumeralPriorityOrder) {
    romanNumeralToArabic[6] // access the value of M
    console.log(romanNumeralToArabic[6])
  }

  // Math.floor with a modulus, output vatiable  that has a repeat of the quotient
      //find the key {
      //key is 6
      //can key (6) be divided by, M, D, ....I
      //6 % 5 = 1 remainder of 1 == V
      //1 = I} ===I
      //romanNumArray = romanNumArray.push(letter)
  // take the remainger and iterate until num === 0

  // return output as string 
    //romanNumArray.join("")
  return "";
}

function toRoman(num) {
  return "";
}

module.exports = { toRoman, toRomanLazy };
