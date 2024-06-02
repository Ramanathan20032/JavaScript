// before the introduction of class in js 
// from ES6 class are introduced

// prototype - prototype is the internal property of the object,
//             that allow the object to inherit property and methods
//             from other object.
//             (either it can be null (or) reference another object)

function User(name, age){
    this.name = name;
    this.age = age;
}
User.prototype.login = function(){
    console.log('hi', this.name);
    console.log('you are logged in')
}

let user1 = new User('jamil', 21)
user1.login()