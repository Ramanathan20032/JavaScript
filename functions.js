// functions
// positive number
function ispositive(Num){   // parameter
    return Num > 0
}
console.log(ispositive(-2)) // argument

// function supports hoisting
console.log(findProduct(3, 5)) // hoisting
// function defn is down to the fuunction call. js intrepreter automatically moves up.

function findProduct(a, b){
    return a * b
}

console.log(findProduct)
console.log(typeof findProduct)

// default parameter
function greet(name = 'there'){
    console.log('Hi ',name)
}
greet('Ram')
greet()

// recursion  -  function call itself
function fact(num){
    if(num==1){
        return 1
    }
    return num * fact(num-1)
}
console.log(fact(6))

function fibo(num){
    if(num == 0){
        return 0
    }
    else if(num == 1){
        return 1
    }
    return fibo(num-1) + fibo(num-2)
}
console.log(fibo(10))

// function expression
// function expression doesn't support hoisting

// assign to the variable as a object
let isEven = function(num){
    return (num % 2 == 0)
}
console.log(isEven(5))
console.log(isEven)

let arr = [2, 5, 7, 3, 7, 8]
let findSum = function(arr){
    let sum = 0
    for(let element of arr){
        sum = sum + element
    }
    return sum
}
console.log(findSum(arr))


// Arrow Function
let volume = function(l,b,h){   
    return l*b*h
}
console.log(volume(1,2,3))

// ---
// if there is only return statement. nom nedd of return
let volume1 = (l,b,h) => l*b*h
console.log(volume1(2,3,4))

// if there is only single parameter then no need of paranthesis (arr)
let sumOfArr = arr => {
    let sum = 0
    for(let element of arr){
        sum = sum + element
    }
    return sum
}
console.log('Sum of Array :',sumOfArr(arr))

// area of circle
let area = r => Math.PI*r*r;
console.log('Area of circle :',area(5))

// variable Arguments - rest parameters, like (var-args) in java 
let prod = (...args) => {
    let product = 1
    for(let val of args){
        product = product * val
    }
    return product
}

console.log('product of variable Argument :',prod(3, 5, 4, 2, 7))


// Generators - generates value one by one
function* counterGenerator(){
    let count = 0
    while(true){
        yield count++
    }
}
// it returns a object
const generated = counterGenerator()
console.log(generated.next().value)
console.log(generated.next().value)
console.log(generated.next().value)
console.log(generated.next().value)