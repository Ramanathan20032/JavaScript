let a = 100
a = 200
let b = a
b = 300

console.log(a)
console.log(b)

let obj1 = {name:'Ram',age:21}
console.log(obj1)
let obj2 = obj1
console.log(obj2)

obj1.name = 'Ramanathan'
obj2.age = 20

console.log(obj2)
console.log(obj1)


let arr1 = [2, 3, 4]
let arr2 = arr1
console.log(arr1)
console.log(arr2)

arr1[0] = 10

console.log(arr2)
console.log(arr1)