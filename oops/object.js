let user1 = {
    name: 'Ramya',
    age: 22,
    login(){
        console.log('hi '+ this.name)
        console.log('you have logged in')
    },
    logout(){
        console.log('hi '+ this.name)
        console.log('you have logged out')
    }
}

let user2 = {
    name: 'pooja',
    age: 25,
    login(){
        console.log('hi '+ this.name)
        console.log('you have logged in')
    },
    logout(){
        console.log('hi '+ this.name)
        console.log('you have logged out')
    }
}

let user3 = {
    name: 'shriya',
    age: 40,
    login(){
        console.log('hi '+ this.name)
        console.log('you have logged in')
    },
    logout(){
        console.log('hi '+ this.name)
        console.log('you have logged out')
    }
}

console.log(user2)
user3.login()
user1.logout()