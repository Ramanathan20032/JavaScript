 // class is template of properties and methods
 class User{
    // the variable inside the classes are instance vriable
    constructor(name, age){
        // instance variables 
        this.name = name
        this.age = age
    }
    login(){
        console.log('hi',this.name)
        console.log('you are logged in')
    }
    logout(){
        console.log('hey',this.name)
        console.log('you are logged out')
    }
 }

 let user1 = new User('Ramesh', 21)
 let user2 = new User('Rajesh', 33)