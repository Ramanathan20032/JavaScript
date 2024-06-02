// Arrays syntax - 
// let variable_name = [element1, element2, ... element3];
let marks = [23, 45, 34, 65, 70]
let cities = ['madurai','chennai','trichy']

// length of the Array
console.log(marks.length)

// arrys index start from 0

// to access the first element in the marks Array
console.log(marks[0]) // 23
// to access the second element int the cities
console.log(cities[1]) // 'chennai'

// to find the lastElement in the Array
console.log(marks[marks.length-1]) // 70

// mix of int and String (data types) in the Array
let arr = [1, 2, 3, 'hi', 'hello']
console.log(arr)

let arr1 = [4, 5, 7, 'b', 'c', [1, 2]]
console.log(arr1)
console.log(arr1[5]) // [1, 2]

console.log(arr1[5][0]) // 1
console.log(arr1[5][1]) // 2

// 2d Array
console.log(" ")
console.log("------ 2D Array ------")
console.log(" ")
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(matrix)

// to access the elements in the 2D Array (matrix)
console.log(matrix[0])      // [1, 2, 3]
console.log(matrix[0][1])   // 2
console.log(matrix[1][2])   // 6
console.log(matrix[2][1])   // 8

// Array Methods 
console.log(" ")
console.log("----- Array Methods -----")
console.log(" ")

// push - Add the new element to the end in a Array 
        // - return the new length

let x = ['a','b','c','d','e','f','g']
console.log(x.push('h')) // 8 - new length of the array
console.log(x)           // ['a','b','c','d','e','f','g','h']

// pop - remove the element from the end in the Array 
//     - return the removed value

console.log(x.pop())  // h - removed element 
console.log(x)        // ['a','b','c','d','e','f','g']

// shift - remove the element from the start of the array
//       - return the removed value

console.log(x.shift())  // a - removed element
console.log(x)          // ['b','c','d','e','f','g']

// unshift - add the elements in the start of the Array
//         - return new length

console.log(x.unshift('a')) // 7 - new length
console.log(x)              // ['a','b','c','d','e','f','g']

// delete 
// delete x[2]
// console.log(x)      //[ 'a', 'b', <1 empty item>, 'd', 'e', 'f', 'g' ]
console.log(" ")
console.log("----- splice -----")
console.log(" ") 

// -----------
// splice - delete
// splice(startIndex, No.of.items)
// ['a','b','c','d','e','f','g']

// summary
// 1st parameter          - starting index
// 2nd parameter          - no.of.elements to be deleted from the start index
// 3rd parameter(or more) - value to be inserted from starting index

x.splice(2,1)  // delete 1 element from index (2)
console.log(x)
// ['a','b','d','e','f','g']

x.splice(2,2) // delete 2 element from index (2)
console.log(x)
// ['a','b','f','g']

// ----------
// splice - replace
x.splice(2, 1, 'h')  // delete 1 element from index (2) & replace it with 'h'
console.log(x)
// ['a', 'b', 'h', 'g']

x.splice(2, 2, 'd', 'e')  // deletes 2 element from index(2) & replace it with 'd','e'
console.log(x)
// [ 'a', 'b', 'd', 'e' ]

// -----------
// splice - insert
x.splice(2, 0, 'c')  // 'c' is inserted into the start index of 2
console.log(x)
// [ 'a', 'b', 'c', 'd', 'e' ]

console.log(x.splice(1,1))     // ['b']
// [ 'a', 'c', 'd', 'e' ]
console.log(x.splice(1,1,'b')) // ['c']
// [ 'a', 'b', 'd', 'e' ]
console.log(x.splice(5,0,'f')) // []


// -----------
// slice(start index, end index)
// end index not included

let y = ['u','w','x','y','z']
console.log(y.slice(1,2)) // ['w']
console.log(y.slice(1,3)) // ['w','y']


// reverse
let z = [1,2,3,4,5]
z.reverse()
console.log(z)


// join - converts array to String
let array = ['a','b','c','d','e']
let str = array.join()
console.log(str)

// split - converts String to array
let str1 = 'g,t,r,e'
let array1 = str1.split(",")
console.log(array1)

// concat Arrays
let firstArray = [1, 2, 3]
let secondArray = [4, 5, 6]

// 2D Array
let joinedArray = [firstArray, secondArray]
console.log(joinedArray)
// [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

// To make it 1D Array
joinedArray = firstArray.concat(secondArray)
console.log(joinedArray)
// [ 1, 2, 3, 4, 5, 6 ]

// using spread operater
let joined = [...firstArray,...secondArray]
console.log(joined)
// [ 1, 2, 3, 4, 5, 6 ]


console.log()
console.log()
console.log()
console.log()
console.log()
console.log('------- Exercise -------')

let list = [5, 8, 10, 7, 9, 11]
list.splice(3,3,17,19,111)
console.log(list)
//[ 5, 8, 10, 17, 19, 111 ]

list.unshift(100)
console.log(list)
// [ 100, 5, 8, 10, 17, 19, 111]

list.splice(-1, 0, 200)
console.log(list)
// [100,  5,   8,  10, 17, 19, 200, 111]

list.push(1000)
console.log(list)
// [100, 5, 8, 10, 17, 19, 200, 111, 1000]

let mid = list.length / 2;
list.splice(mid,0,0)
console.log(list)
// [100, 5, 8, 10, 0, 17, 19, 200, 111, 1000]