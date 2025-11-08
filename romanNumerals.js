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
  let romanNumArray = []
  for (let letter of romanNumeralPriorityOrder) {
    romanNumeralToArabic[letter] // access the value of M 
    let romanModArabic = (num % romanNumeralToArabic[letter]) // 6 % 1000 do something with the remainder to repeat the letter if div by 10
    
    console.log(`This is the romanModArabic ${romanModArabic}`)
    if (romanModArabic === 0) {
      // romanNumArray.push(letter)
      console.log(`This is the push ${romanNumArray.push(letter)}`)
      console.log(`This is the romanNumArray ${romanNumArray}`)
      break
    } else if (romanModArabic != num) { // if not equal to 6, push to numArray
        romanNumArray.push(letter)  
    }
    output = romanNumArray.join('')
  }

  return output;
}
// console.log(toRomanLazy(6)) // should return VI
// console.log(toRomanLazy(10)) // should return X
console.log(toRomanLazy(20)) // should return XX
// console.log(toRomanLazy(26)) // should return XXVI
function toRoman(num) {
  return "";
}

module.exports = { toRoman, toRomanLazy };
