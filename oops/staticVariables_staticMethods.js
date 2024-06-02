class User{
    // static variable
    static numberOfUsers = 0;
    constructor(name, age){
        // the variable inside the classes are instance vriable
        // instance variables 
        this.name = name
        this.age = age
        // static variables are accessed with classname.
        User.numberOfUsers++;
    }
    login(){
        console.log('hi',this.name)
        console.log('you are logged in')
    }
    logout(){
        console.log('hey',this.name)
        console.log('you are logged out')
    }
    // static method
    static displayNumberOfUsers(){
        console.log("Number of user object :",User.numberOfUsers)
    }
 }

 let user1 = new User('Ramesh', 21)
 let user2 = new User('Rajesh', 33)
 let user3 = new User('Ram', 19)
//  static variables and static method should invoke with className.
// common elements are declared as static and it belongs to the class.
 console.log(User.numberOfUsers)
 User.displayNumberOfUsers()

// Math - class
// sqrt - staticMethod
 console.log(Math.sqrt(4))