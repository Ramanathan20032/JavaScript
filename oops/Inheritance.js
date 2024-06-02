class User{ // base class, parent class, super class
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

 // inheritance
 class PaidUsers extends User{ // derived class, child class, sub class
    constructor(name, age){
        super(name, age)
        this.storage = 100
    }
    message(){
        console.log("you have 100 GB")
    }
    // overridding - redefining the base class method in the derived class
    login(){
        console.log('Thank you for your support')
        return this
    }
 }
 let PaidUser1 = new PaidUsers('meena',33)
 PaidUser1.login()
 console.log(PaidUser1.name)
 console.log(PaidUser1.storage)


 // invoking the two (or) more methods through the objects - Method Chainning
 // that method should return the obbject
 PaidUser1.login().message();