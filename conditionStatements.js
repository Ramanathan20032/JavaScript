let pwd_correct = false;
if(pwd_correct){
    console.log("you are logged in")
}
else{
    console.log("Incorrect Password")
}
console.log("bye")

console.log()

let age = 19;
let gender = 'male'
if(age >= 18 && gender === 'male'){
    console.log('you are eligible')
}

console.log()

// max of two numbers
let a = 10;
let b = 20;
if(a > b){
    max = a
}
else{
    max = b
}
console.log(max + " is greater")

// condition opeerator (or) ternary operator
let maximum = a > b ? a : b;
console.log(maximum)

console.log()

var input = "was it a car or a cat i saw"
if(ispalindrome){
    console.log('palindrome')
}
else{
    console.log('not a palindrome')
}

function ispalindrome(str){
    str = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    if(str === str.split('').reverse().join('')){
        return true;
    }
    else{
        return false;
    }
}

console.log()