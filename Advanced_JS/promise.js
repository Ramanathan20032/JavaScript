let takkalBook = new Promise((resolve, reject)=>{
    let ticketBooked = true
    if(ticketBooked){
        resolve(850)
    }
    else{
        reject()
    }
})

// Method 1

/* 
takkalBook.then(success)
.catch(failure)

function success(){
    console.log('hey buddy, Ticket Booked')
}

function failure(){
    console.log('oh sorry, Ticket is fulled')
}
*/

// Method 2

takkalBook
.then((amt)=>console.log(`Thanks, I have transfered ${amt}`))
.catch(()=>console.log('Thanks for trying'))

// -------------------------------------------------

// promises in functions

function takkalBook1(){
    return new Promise((resolve, reject)=>{
        let ticketBooked = true
        if(ticketBooked){
            resolve()
        }
        else{
            reject()
        }
    })
}

takkalBook1()
.then(()=>console.log('booked'))
.catch(()=>console.log('Ticket filled'))

// --------------------------------------------------

function tossCoin(){
    return new Promise((resolve, reject)=>{
        // 0-head(success) 1-tail(failure)
        const random = Math.floor(Math.random()*2)
        if(random == 0)
            resolve()
        else
            reject()
    })
}

tossCoin()
.then(()=>console.log('Congrats! Its Head, You Won'))
.catch(()=>console.log('Sorry! Its Tail, You Lost'))

// --------------------------------------------------

  