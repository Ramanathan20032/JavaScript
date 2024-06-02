let str1 = '    ,hello:   ';
let str2 = 'I am joker!';

console.log(str1 + str2)
console.log(str1.concat(str2))
console.log(str1.concat(" "+str2))

// partioning Strings
s1 = 'strive not to be a success';
s2 = 'but rather to be a value';

// slice(start, end)
console.log(s2.slice(4,10))  // 'rather'
console.log(s2.slice(4))  // 'rather to be a value'
console.log(s2.slice(-5)) // 'value'

// subString(start, end)
console.log(s2.substring(4,10))  // 'rather'
console.log(s2.substring(4))  // 'rather to be a value'
console.log(s2.substring(-5)) // 'value'

// substr(start, length)
console.log(s2.substr(4, 10)) // 'rather to '
console.log(s2.substr(4)) // 'rather to be a value'
console.log(s2.substr(-8)) // ' a value'
console.log(s2.substr(-8,5)) // ' a va'

// String replace
console.log(s1.replace('strive','jos')) // jos not to be a success

// uppercase
console.log(s1.toUpperCase())
// lowercase
console.log(s1.toLowerCase())

// length
console.log(s1.length)

// to remove extra spaces
console.log(str1.trim())
console.log(str1.trimStart())
console.log(str1.trimEnd())

// to select the particular index
console.log(s1[1]) // 't'
console.log(s1.charAt(1)) // 't'
console.log(s1.charCodeAt(1)) // 116 - unicode of 't'

// indexOf
console.log(s1.indexOf('e')) // to find the first occurence of 'e'
console.log(s1.lastIndexOf('e'))   // to find the last occurence of 'e'
console.log(s1.indexOf('z')) // -1 

// search - return the index
console.log(s1.search("not")) // 7 - the word not ends at the index of 7
console.log(s1.search("nott")) // -1

// includes - return true or false
console.log(s1.includes('not')) // true
console.log(s1.includes('nott')) // false

console.log(s1.startsWith('s')) // true
console.log(s1.startsWith('S')) // false
console.log(s1.endsWith('s')) // true

// z = 'bharathi' generate the new character randomly from z
let z = 'ramanathan'
var randomIndex = Math.floor(Math.random() * z.length)
var randomCharacter = z.charAt(randomIndex)
console.log("random character from z : "+ randomCharacter)
