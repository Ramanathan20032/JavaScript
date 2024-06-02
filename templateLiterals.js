let firstName = 'Ramya'
let lastName = 'murali'
let city = 'Chennai'

console.log(firstName + " " + lastName + " lives in " + city) 

let msg = `${firstName} ${lastName} lives in ${city}`
console.log(msg)

console.log(`${firstName} ${lastName} lives in ${city}`)

// Multiline String
let multilineString = `This is a 
multiline
String`
console.log(multilineString)

//Embedded Expressions
// Single and Double Quotes in String
let text = `cat's name is "toto"`
console.log(text)


let itemCount = 5
let billAmount = 13
console.log(`"You have ${itemCount} items in your cart.
Your bill amount is $${billAmount}"`)
