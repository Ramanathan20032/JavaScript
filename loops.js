// for loop
console.log('for loop')
for(let i = 1; i <=5; i++){
    console.log(i)
}

console.log()
console.log('while loop')
// while loop
j = 1
while(j <= 5){
    console.log(j)
    j++
}

console.log()
console.log('do While loop')
// do While loop
k = 1
do{
    console.log(k)
    k++
}while(k <= 5)

console.log()
console.log('break')
// break = breaks the loop

// isNan('a') == true
// isNan(4) == false
// while(true){
//     let num = Number(prompt('Enter a Number'))
//     if(NaN(num) == false){
//         break
//     }
// }

console.log()
console.log('continue')
// continue - skips the current iteration 
for(a = 1; a <= 10; a++){
    if(a % 3 == 0){
        continue
    }
    console.log(a)
}

// to access the array
// for... of - like for each loop in java
let arr = ['appple','orange','grapes','Mango','pineapple']
for(b = 0; b < arr.length; b++){
    console.log(arr[b].toUpperCase())
}

for(let fruit of arr){
    console.log(fruit)
}

// to access the object
// for...in
let item = {
    name: 'Ram',
    age: 21
}
// keys in the object
for(let key in item){
    console.log(key)
    console.log(item[key])
}