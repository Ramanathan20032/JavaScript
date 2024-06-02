// object creation 
let item = {
    name: 'phone',
    price: 25000,
    quantity: 2,
    // array
    categories: ['redmi','realme'],
    //nested object
    dimensions:{
        length:7,
        breadth:3.5,
        height:.5
    }
}
console.log(item)

// accessing the object
// .(dot) notation
console.log(item.price)
item.price = 20000
console.log(item.price)

// to add new property
item.returnable = true
console.log(item)

//square bracket notation
console.log(item['price'])
item['returnable'] = false

let key = 'price'
item.key = 28000   // doesnt work
item[key] = 27500

// accessing the Array
console.log(item.categories[0])

// to access the object 
console.log(item.dimensions.breadth)


let item2 = {
    name: 'laptop',
    brand: 'HP',
    // to create function into the obgects - methods
    buy : function(){
        console.log("item added to the cart")
    },
    addToList(){
        console.log('item added to list')
    }
}
console.log(item2)
// to access the method in the object
item2.buy()
item2.addToList()


// another way to create object
let item3 = new Object();
item3.name = 'charger'
item3.price = 500
item3.quantity = 1
console.log(item3)