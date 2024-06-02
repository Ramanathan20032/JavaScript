// Set Object - Collection of Values
//            - values are unique

let arr = [1,1,1,1,2,3,3,4,4,4,5,6,6,7,7,7]
let mySet = new Set(arr)
console.log(arr)
console.log(mySet)

let mySet2 = new Set()
mySet2.add(4)
mySet2.add(5)
mySet2.add('abc')
mySet2.add('pqr')
mySet2.add('pqr')
mySet2.add({a:'1', b:'2'})
mySet2.add({a:'1', b:'2'})
mySet2.add([1, 3, 2])
mySet2.add([1, 3, 2])
mySet2.add(4)

console.log(mySet2)

let obj = {a:'1', b:'2'}
mySet2.add(obj)

console.log(mySet2)
console.log(mySet2.size)
console.log(mySet2.has(5))
console.log(mySet2.delete(obj))
console.log(mySet2)

// to covert the set into Array
let arr2 = Array.from(mySet2)
console.log(arr2)


// Map object - Map object are the collection of
//            - key-value pairs
//            - A key(should be unique) in the map may only occur once
//            - Key or value can be object

let map = new Map()
map.set('a',1)
map.set('b',2)
map.set('a',3)
console.log(map)
console.log(map.size)
console.log(map.has('a'))

map.set('c',2)
map.set('d',2)
map.set('e',3)
console.log(map)

for(let i of map){
    console.log(i)
}

for(let k of map.keys()){
    console.log(k)
}
for(let v of map.values()){
    console.log(v)
}

for(let [k,v] of map){
    console.log(v)
    // console.log(k)
}

// 2d Array to Map
let kvArray = [['a',1],['b',1]]
let map2 = new Map(kvArray)
console.log(map2)